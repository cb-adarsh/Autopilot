<template>
  <div class="my-flex">
    <b-field class="">
      <b-dropdown
        v-model="selectedOperand"
        :mobile-modal="false"
        aria-role="list">
        <button class="button select" type="button" slot="trigger">
          <span>{{ selectedOperand || 'Field'}}</span>
          <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item
          v-for="option in operands"
          :key="JSON.stringify(option)"
          :value="option"
          aria-role="listitem">
          <span>{{option}}</span>
        </b-dropdown-item>

      </b-dropdown>
    </b-field>
    <b-field>
      <b-dropdown
        v-model="selectedCondition"
        :mobile-modal="false"
        aria-role="list">
        <button :disabled="selectedOperand === ''" class="button select" type="button" slot="trigger">
          <span>{{ selectedConditionDisplayText }}</span>
          <b-icon icon="menu-down"></b-icon>
        </button>

        <b-dropdown-item
          v-for="option in conditions"
          :key="JSON.stringify(option)"
          :value="option.name"
          aria-role="listitem">
          <span>{{option.displayName}}</span>
        </b-dropdown-item>

      </b-dropdown>
    </b-field>
    <DynamicInput
      v-if="selectedCondition !== ''"
      :type="valueType"
      :possible-values="possibleValues"
      :value="dynamicInputValue"
      @input="updateInput"/>
    <div class="my-mar-t--4">
      <b-button size="is-small" @click="$emit('delete')">
        <span>Delete</span>
      </b-button>
    </div>
  </div>
</template>

<script>
    import {validConditionsFromDataType} from '../helpers'
    import DynamicInput from "./DynamicInput";

    export default {
        name: 'Condition',
        components: {DynamicInput},
        props: ["possibleConditions", "value"],
        created() {
            if (!this.$isEmpty(this.value)) {
                this.selectedOperand = this.value.name;
                this.$nextTick(() => {
                    this.selectedCondition = this.value.operator;
                    let condition = this.possibleConditions.find(v => v.name === this.selectedOperand);
                    let operator = validConditionsFromDataType(
                        condition.type
                    ).find(cond => cond.name === this.selectedCondition);
                    this.valueType = this.value.operator;
                    if (operator.type === 'multi_list') {
                        this.dynamicInputValue = this.value.list;
                    } else{
                        this.dynamicInputValue = this.value.value;
                    }
                })
            }
        },
        data() {
            return {
                selectedOperand: '',
                selectedOptions: '',
                selectedCondition: '',
                valueType: '',
                possibleValues: [],
                selectedConditionDisplayText: 'Condition',
                dynamicInputValue: ''
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
        watch: {
            selectedOperand() {
                this.selectedCondition = '';
                this.selectedConditionDisplayText = 'Condition'
            },
            selectedCondition(newVal) {
                if (newVal === '') {
                    return
                }
                let condition = this.possibleConditions.find(v => v.name === this.selectedOperand);
                let operator = validConditionsFromDataType(
                    condition.type
                ).find(cond => cond.name === newVal);
                this.valueType = operator.type;
                this.possibleValues = condition.possibleValues;
                this.selectedConditionDisplayText = operator.displayName;
            }
        },
        methods: {
            updateInput(value) {
                let emitVal = {
                    name: this.selectedOperand,
                    operator: this.selectedCondition
                };
                let condition = this.possibleConditions.find(v => v.name === this.selectedOperand);
                let operator = validConditionsFromDataType(
                    condition.type
                ).find(cond => cond.name === this.selectedCondition);

                if (operator.type === 'multi_list') {
                    Object.assign(emitVal, {list: value});
                } else {
                    Object.assign(emitVal, {value});
                }
                this.$emit('input', emitVal);
            }
        }

    }
</script>
