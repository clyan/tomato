export const FieldMixin = {
  inject: {
    tomatoField: {
      default: null,
    },
  },

  watch: {
    value() {
      const field = this.tomatoField;

      if (field) {
        field.resetValidation();
        field.validateWithTrigger('onChange');
      }
    },
  },

  created() {
    const field = this.tomatoField;

    if (field && !field.children) {
      field.children = this;
    }
  },
};
