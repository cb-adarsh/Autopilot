<template>
  <div class="my-multi-action">
    <div class="label">{{possibleValues.name}}</div>
    <div
      class="my-action"
      v-for="attribute in possibleValues.fields"
      :key="attribute.name"
    >
      <div class="my-action-name">{{attribute.name}}</div>
      <DynamicInput
        :type="attribute.type"
        :possible-values="attribute.possibleValues"
        :value="getActionAttrValue(attribute.name)"
        @input="(val) => updateActionAttr(val,attribute.name)"
      />
    </div>
    <div class="my-mar-t--4">
      <b-button size="is-small" @click="$emit('delete')">
        <span>Delete</span>
      </b-button>
    </div>
  </div>
</template>

<script>
    import DynamicInput from "../components/DynamicInput";

    export default {
        name: 'MultiInputs',
        components: {
            DynamicInput
        },
        props: ['possibleValues', 'value'],
        data() {
            return {
                fields: []
            }
        },
        created() {
            if (!this.$isEmpty(this.value)){
                this.fields = this.value.fields || [];
            }
        },
        methods: {
            rand() {
                return Math.floor(Math.random() * 10000)
            },
            updateActionAttr(val, attrName) {
                let attribute = this.fields.find(attr => attr.name === attrName);
                if (!!attribute) {
                    attribute.value = val;
                } else {
                    this.fields.push({
                        name: attrName,
                        value: val,
                        key: this.rand()
                    })
                }

                this.$emit('update', {
                    name: this.possibleValues.name,
                    fields: this.fields
                })
            },
            getActionAttrValue: function (attrName) {
                let attr = this.fields.find(attr => attr.name === attrName);
                return attr && attr.value;
            }
        }
    }
</script>
