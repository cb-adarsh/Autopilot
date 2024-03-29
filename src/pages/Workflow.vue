<template>
  <div>
    <Navbar/>
    <div v-if=" hasPreMeta" class="my-container">
      <div style="display: flex;justify-content: space-between;margin-bottom: 24px">
        <div>
          <div class="is-size-3">{{this.meta.name}}</div>
          <div class="is-size-6">{{this.meta.desc}}</div>
        </div>
        <div class="my-push-right">
          <b-switch style="margin-right: 12px"
                    v-model="meta.status"
                    size="is-small"
                    true-value="ACTIVE"
                    false-value="DISABLED">
            {{ meta.status ==='ACTIVE' ? 'ACTIVE' : 'INACTIVE' }}
          </b-switch>
          <b-button type="is-primary" size="is-medium" @click="save">
            <span>Save Workflow</span>
          </b-button>
        </div>
      </div>
      <b-field label="Entity">
        <b-dropdown
          v-model="entityName"
          :mobile-modal="false"
          aria-role="list">
          <button class="button select" type="button" slot="trigger">
            <span>{{ meta.entityName || 'Choose an entity' }}</span>
            <b-icon icon="menu-down"></b-icon>
          </button>

          <b-dropdown-item
            v-for="option in entities"
            :key="option"
            :value="option"
            aria-role="listitem">
            <span>{{option}}</span>
          </b-dropdown-item>

        </b-dropdown>
      </b-field>
      <b-field label="Trigger" v-if="meta.entityName !== ''">
        <b-dropdown
          v-model="triggers"
          :mobile-modal="false"
          multiple
          aria-role="list">
          <button class="button select" type="button" slot="trigger">
            <span>{{ meta.triggers.length > 0 ? meta.triggers.join(', ') : 'Choose a trigger' }}</span>
            <b-icon icon="menu-down"></b-icon>
          </button>

          <b-dropdown-item
            v-for="option in triggerx"
            :key="option"
            :value="option"
            aria-role="listitem">
            <span>{{option}}</span>
          </b-dropdown-item>

        </b-dropdown>
      </b-field>
      <template v-if="meta.entityName !== '' && meta.triggers !== ''">
        <div class="label">Criterias</div>
        <div class="my-pre-paper" :class="{'my-paper':meta.criterias.length > 0}">
          <condition
            :possible-conditions="possibleConditions"
            v-for="(condition,index) in meta.criterias"
            :key="rand()"
            :value="condition"
            @input="(conditionMeta)=>updateCriteria(conditionMeta,index)"
            @delete="deleteCriteria(index)"
          />
          <b-button @click="addCriteria">
            <span>Add Criteria</span>
          </b-button>
        </div>
      </template>
      <template v-if="meta.entityName !== '' && meta.triggers !== ''">
        <div>
          <b-field label="Action">
            <b-dropdown
              v-model="actionName"
              :mobile-modal="false"
              aria-role="list">
              <button class="button select" type="button" slot="trigger">
                <span>{{ meta.action.name || 'Choose an action' }}</span>
                <b-icon icon="menu-down"></b-icon>
              </button>

              <b-dropdown-item
                v-for="option in actions"
                :key="option.name"
                :value="option.name"
                aria-role="listitem">
                <span>{{option.name}}</span>
              </b-dropdown-item>

            </b-dropdown>
          </b-field>
          <div class="my-pre-paper my-paper" v-if="actionName !== ''">
            <div class="label">Params</div>
            <div
              class="my-action"
              v-for="attribute in actionParamsAttributes"
              :key="attribute.key"
            >
              <div class="my-action-name">{{attribute.name}}</div>
              <DynamicInput
                :type="attribute.type"
                :possible-values="attribute.possibleValues"
                :value="getActionAttrValue(attribute.name)"
                @input="(val) => updateActionAttr(val,attribute.name)"
              />
            </div>
            <div v-for="attribute in multiActionParamsAttributes" :key="rand()">
              <MultiInputs
                v-for="(multiAttr,index) in getMultiAttribute(attribute.name)"
                :key="multiAttr.key"
                :possible-values="attribute"
                :value="multiAttr"
                @update="(metaVal)=>updateMultiAttr(metaVal,index)"
                @delete="deleteMultiAttr(multiAttr,index)"
              />
              <b-button @click="addMultiAttr(attribute.name)">
                <span>Add {{attribute.name}}</span>
              </b-button>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div v-else>
      <b-modal :active="true"
               :has-modal-card="true"
               aria-role="dialog"
               aria-modal>
        <div class="card" style="width: 400px;">
          <div class="title">Workflow</div>
          <b-field label="Name">
            <b-input v-model="name" type="string"></b-input>
          </b-field>
          <b-field label="Description">
            <b-input v-model="desc" type="string"></b-input>
          </b-field>
          <b-field label="Type">
            <b-dropdown
              v-model="workflowType"
              :mobile-modal="false"
              aria-role="list">
              <button class="button select" type="button" slot="trigger">
                <span>{{ workflowType || 'Choose' }}</span>
                <b-icon icon="menu-down"></b-icon>
              </button>

              <b-dropdown-item
                value="HOOK"
                aria-role="listitem">
                <span>Hook</span>
              </b-dropdown-item>
              <b-dropdown-item
                :disabled="true"
                value="scheduled"
                aria-role="listitem">
                <span>Scheduled</span>
              </b-dropdown-item>
              <b-dropdown-item
                :disabled="true"
                value="immediate"
                aria-role="listitem">
                <span>Immediate</span>
              </b-dropdown-item>

            </b-dropdown>
          </b-field>
          <footer class="">
            <button @click="$router.push('/')" class="button">
              Cancel
            </button>
            <button @click="proceed" class="button is-primary">
              Proceed
            </button>
          </footer>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
    import * as api from '../api';
    import Condition from "../components/Condition";
    import Navbar from "../components/Navbar";
    import DynamicInput from "../components/DynamicInput";
    import MultiInputs from "../components/MultiInputs";
    import Chart from "../components/Chart";

    export default {
        name: 'Workflow',
        components: {
            Chart,
            Condition,
            Navbar,
            DynamicInput,
            MultiInputs,
        },
        data() {
            return {
                model: [],
                meta: {
                    status: 'ACTIVE',
                    entityName: '',
                    triggers: [],
                    criterias: [],
                    action: {
                        attributes: [],
                        multiAttribute: []
                    }
                },
                entityName: '',
                triggers: [],
                actionName: '',
                hasPreMeta: false,
                desc: '',
                name: '',
                workflowType: ''
            }
        },
        async created() {
            this.model = (await api.fetchModel()).data;
            // this.meta = await api.fetchWorkflow(123); //TODO: API
        },
        computed: {
            triggerx() {
                return this.model.length > 0 && this.meta.entityName !== ''
                    ? this.model.find(m => m.entityName === this.meta.entityName).trigger
                    : [];
            },
            entities() {
                return this.model.length > 0 ? this.model.map(m => m.entityName) : [];
            },
            actions() {
                return this.model.length > 0 && this.meta.entityName !== ''
                    ? this.model.find(m => m.entityName === this.meta.entityName).actions
                    : [];
            },
            possibleConditions() {
                return this.model.length > 0 ? this.model.find(m => m.entityName === this.meta.entityName).criterias : [];
            },
            selectedTrigger() {
                if (this.meta.triggers !== '') {
                    return this.meta.triggers;
                }
                return '';
            },
            actionParamsAttributes() {
                if (this.model.length > 0 && this.meta.entityName !== '' && this.actionName !== '') {
                    let actions = this.model.find(m => m.entityName === this.meta.entityName).actions;
                    let action = actions.find(action => action.name === this.actionName);
                    return action.attributes;
                } else {
                    return [];
                }
            },
            multiActionParamsAttributes() {
                if (this.model.length > 0 && this.meta.entityName !== '' && this.actionName !== '') {
                    let actions = this.model.find(m => m.entityName === this.meta.entityName).actions;
                    let action = actions.find(action => action.name === this.actionName);
                    return action.multiAttribute;
                } else {
                    return [];
                }
            }
        },
        methods: {
            async save() {
                await api.createWorkflow(this.meta);
                this.$router.push('/')
            },
            proceed() {
                if (this.name === '' || this.desc === '' || this.workflowType === '') {
                    return;
                }
                this.meta.name = this.name;
                this.meta.desc = this.desc;
                this.meta.type = this.workflowType;
                this.hasPreMeta = true;
            },
            addCriteria() {
                this.meta.criterias.push({});
            },
            updateCriteria(meta, index) {
                this.meta.criterias[index] = meta;
            },
            deleteCriteria(index) {
                this.meta.criterias.splice(index, 1);
            },
            rand() {
                return Math.floor(Math.random() * 10000)
            },
            updateActionAttr(val, attrName) {
                let attribute = this.meta.action.attributes.find(attr => attr.name === attrName);
                if (!!attribute) {
                    attribute.value = val;
                } else {
                    this.meta.action.attributes.push({
                        name: attrName,
                        value: val,
                        key: this.rand()
                    })
                }
            },
            getActionAttrValue(attrName) {
                let attribute = this.meta.action.attributes.find(attr => attr.name === attrName);
                return attribute === undefined ? '' : attribute.value;
            },
            updateMultiAttr(meta, index) {
                let multiAttr = this.meta.action.multiAttribute;
                let matchedMeta = multiAttr.filter(attr => attr.name === meta.name)[index];
                let attr = multiAttr[multiAttr.findIndex(ma => ma === matchedMeta)];
                attr.fields = meta.fields;
            },
            getMultiAttribute(attrName) {
                return this.meta.action.multiAttribute.filter(attr => attr.name === attrName);
            },
            addMultiAttr(attrName) {
                let index = this.findLastIndex(this.meta.action.multiAttribute, 'name', attrName);
                this.meta.action.multiAttribute.splice(index + 1, 0, {name: attrName, key: this.rand()})
            },
            findLastIndex(array, searchKey, searchValue) {
                let index = array.slice().reverse().findIndex(x => x[searchKey] === searchValue);
                let count = array.length - 1;
                return index >= 0 ? count - index : index;
            },
            deleteMultiAttr(multiAttribute, index) {
                let multiAttr = this.meta.action.multiAttribute;
                let matchedMeta = multiAttr.filter(attr => attr.name === multiAttribute.name)[index];
                multiAttr.splice(multiAttr.findIndex(ma => ma === matchedMeta), 1);
            }
        },
        watch: {
            entityName(newVal) {
                this.meta.entityName = newVal;
                this.meta.triggers = '';
                this.meta.criterias = [];
                this.meta.action = {
                    attributes: [],
                    multiAttribute: []
                };
                this.actionName = '';
            },
            triggers(newVal) {
                this.meta.triggers = newVal;
                this.meta.criterias = [];
                this.meta.action = {
                    attributes: [],
                    multiAttribute: []
                };
                this.actionName = '';
            },
            actionName(newVal) {
                this.meta.action = {
                    name: newVal,
                    attributes: [],
                    multiAttribute: []
                };

            }
        }
    }
</script>
