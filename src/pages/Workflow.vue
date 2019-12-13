<template>
  <div>
    <b-field label="Entity">
      <b-select
        placeholder="Select an entity"
        @input="updateEntity">
        <option
          v-for="option in entities"
          :value="option"
          :key="option">
          {{ option }}
        </option>
      </b-select>
    </b-field>
    <b-field label="Trigger" v-if="!$isEmpty(meta) && meta.entity !== ''">
      <b-select placeholder="Select a trigger">
        <option
          v-for="option in triggers"
          :value="option"
          :selected="selectedTrigger"
          :key="option">
          {{ option }}
        </option>
      </b-select>
    </b-field>
    <template v-if="false && !$isEmpty(meta) && meta.entity !== ''">
      <condition :possible-conditions="possibleConditions"/>
    </template>
  </div>
</template>

<script>
    import * as api from '../api';
    import Condition from "../components/condition";

    export default {
        name: 'Workflow',
        components: {Condition},
        data() {
            return {
                model: [],
                meta: {}
            }
        },
        async created() {
            this.model = await api.fetchModel();
            // this.meta = await api.fetchMeta(123); //TODO: API
        },
        computed: {
            triggers() {
                return this.model.length > 0 ? this.model.find(m => m.entityName === this.meta.entity).trigger : [];
            },
            entities() {
                return this.model.length > 0 ? this.model.map(m => m.entityName) : [];
            },
            possibleConditions() {
                return this.model.length > 0 ? this.model.find(m => m.entityName === this.meta.entity).criterias : [];
            },
            selectedTrigger() {
                if (!this.$isEmpty(this.meta)) {
                    return this.meta.trigger;
                }
                return '';
            }
        },
        methods: {
            updateEntity(value) {
                this.meta = {
                    entity : value,
                    trigger: ''
                };
            }
        }
    }
</script>
