<template>
  <div>
    <Navbar/>
    <div class="my-container">
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

          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
    import * as api from '../api';
    import Condition from "../components/Condition";
    import Navbar from "../components/Navbar";
    import DynamicInput from "../components/DynamicInput";

    export default {
        name: 'Workflow',
        components: {
            Condition,
            Navbar,
            DynamicInput,
        },
        data() {
            return {
                model: [],
                meta: {
                    entityName: '',
                    trigger: '',
                    criterias: [],
                    action: {
                        attributes: []
                    }
                },
                entityName: '',
                trigger: '',
                actionName: '',
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
            }
        },
        watch: {
            entityName(newVal) {
                this.meta.entityName = newVal;
                this.meta.trigger = '';
                this.meta.criterias = [];
                this.meta.action = {
                    attributes: []
                };
            },
            trigger(newVal) {
                this.meta.trigger = newVal;
                this.meta.criterias = [];
                this.meta.action = {
                    attributes: []
                };
            },
            actionName(newVal) {
                this.meta.action = {
                    actionName: newVal,
                    attributes: []
                };

            }
        }
    }
</script>
