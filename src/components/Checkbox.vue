<template>
  <div>
    <div class="ta-l mt-s">
      <input
        v-model="checked"
        type="checkbox"
        class="filled-in"
        :id="name"
        :name="name"
      />
      <label class="truncate" :for="name">{{ label }}</label>
    </div>

    <slot v-if="checked"></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    checked: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>
