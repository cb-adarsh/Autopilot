<template>
  <div>
    <b-field label="Field">
      <b-select
        placeholder="Select"
        @input="updateOperand">
        <option
          v-for="option in operands"
          :value="option"
          :selected="value && value.name"
          :key="option">
          {{ option }}
        </option>
      </b-select>
    </b-field>
    <b-field label="Condition" :disabled="selectedOperand === ''">
      <b-select placeholder="Select">
        <option
          v-for="option in conditions"
          :value="option.name"
          :selected="value && value.operator.name"
          :key="option.name">
          {{ option.displayName }}
        </option>
      </b-select>
    </b-field>
  </div>
</template>

<script>
    import {validConditionsFromDataType} from '../helpers'

    export default {
        name: 'condition',
        props: ["possibleConditions", "value"],
        data() {
            return {
                selectedOperand: ''
            }
        },
        computed: {
            operands() {
                return this.possibleConditions.map(v => v.name);
            },
            conditions() {
                return this.selectedOperand !== '' ?
                    validConditionsFromDataType(this.possibleConditions.find(v => v.name === this.selectedOperand).type)
                    : undefined;
            }
        },
        methods:{
            updateOperand(value){
                this.selectedOperand = this.possibleConditions.find(v => v.name === value);
            }
        }

    }
</script>
