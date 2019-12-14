<template>
  <div>
    <Navbar/>
    <div v-if="!hasPreMeta" class="my-container">
      <div class="my-push-right">
        <b-button type="is-primary" size="is-medium">
          <span>Save Workflow</span>
        </b-button>
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
          v-model="trigger"
          :mobile-modal="false"
          aria-role="list">
          <button class="button select" type="button" slot="trigger">
            <span>{{ meta.trigger || 'Choose a trigger' }}</span>
            <b-icon icon="menu-down"></b-icon>
          </button>

          <b-dropdown-item
            v-for="option in triggers"
            :key="option"
            :value="option"
            aria-role="listitem">
            <span>{{option}}</span>
          </b-dropdown-item>

        </b-dropdown>
      </b-field>
      <template v-if="meta.entityName !== '' && meta.trigger !== ''">
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
      <template v-if="meta.entityName !== '' && meta.trigger !== ''">
        <div>
          <b-field label="Action">
            <b-dropdown
              v-model="actionName"
              :mobile-modal="false"
              aria-role="list">
              <button class="button select" type="button" slot="trigger">
                <span>{{ meta.action.actionName || 'Choose an action' }}</span>
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
            <b-input v-model="name" type="string" @input="updateVal"></b-input>
          </b-field>
          <b-field label="Description">
            <b-input v-model="desc" type="string" @input="updateVal"></b-input>
          </b-field>
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
                    entityName: '',
                    trigger: '',
                    criterias: [],
                    action: {
                        attributes: [],
                        multiAttribute: []
                    }
                },
                entityName: '',
                trigger: '',
                actionName: '',
                hasPreMeta: false
            }
        },
        async created() {
            this.model = await api.fetchModel();
            // this.meta = await api.fetchMeta(123); //TODO: API
        },
        computed: {
            triggers() {
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
                if (this.meta.trigger !== '') {
                    return this.meta.trigger;
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
                this.meta.trigger = '';
                this.meta.criterias = [];
                this.meta.action = {
                    attributes: [],
                    multiAttribute: []
                };
                this.actionName = '';
            },
            trigger(newVal) {
                this.meta.trigger = newVal;
                this.meta.criterias = [];
                this.meta.action = {
                    attributes: [],
                    multiAttribute: []
                };
                this.actionName = '';
            },
            actionName(newVal) {
                this.meta.action = {
                    actionName: newVal,
                    attributes: [],
                    multiAttribute: []
                };

            }
        }
    }
</script>
