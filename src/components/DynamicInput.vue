<template>
  <b-field v-if="type === 'number' || type === 'string'">
    <b-input v-model="internalValue" :type="type" @input="updateVal"></b-input>
  </b-field>
  <b-field v-else-if="type === 'list'">
    <b-dropdown
      v-model="selectedOption"
      :mobile-modal="false"
      aria-role="list">
      <button class="button select" type="button" slot="trigger">
        <span>{{ selectedOption || 'Value' }}</span>
        <b-icon icon="menu-down"></b-icon>
      </button>

      <b-dropdown-item
        v-for="value in possibleValues"
        :key="value"
        :value="value"
        aria-role="listitem">
        <span>{{value}}</span>
      </b-dropdown-item>
    </b-dropdown>
  </b-field>
  <b-field v-else-if="type === 'multi_list'">
    <b-dropdown
      v-model="selectedOptions"
      multiple
      :mobile-modal="false"
      aria-role="list">
      <button class="button select" type="button" slot="trigger">
        <span>{{ selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Value' }}</span>
        <b-icon icon="menu-down"></b-icon>
      </button>

      <b-dropdown-item
        v-for="value in possibleValues"
        :key="value"
        :value="value"
        aria-role="listitem">
        <span>{{value}}</span>
      </b-dropdown-item>
    </b-dropdown>
  </b-field>
</template>

<script>
    export default {
        data() {
            return {
                inputDataType: '',
                internalValue: '',
                selectedOptions: [],
                selectedOption: ''
            }
        },
        props: {
            type: {
                default: 'string'
            },
            possibleValues: {
                default() {
                    return []
                }
            },
            value: {
                default: ''
            },
            mandatory: {
                default: true
            }
        },
        created() {
            this.inputDataType = this.type;
            if (!this.$isEmpty(this.value))
                if (this.type === 'multi_list') {
                    this.selectedOptions = this.value;
                } else if (this.type === 'list') {
                    this.selectedOption = this.value;
                } else {
                    this.internalValue = this.value;
                }
        },
        methods: {
            updateVal(newVal) {
                this.$emit('input', newVal);
            }
        },
        watch: {
            selectedOptions(newVal) {
                this.updateVal(newVal);
            },
            selectedOption(newVal) {
                this.updateVal(newVal);
            }
        }
    }
</script>
