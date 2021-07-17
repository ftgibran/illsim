<template>
  <div class="input-select input-field">
    <label>
      <span><i :class="`fa ${icon}`" aria-hidden="true"></i> {{ label }}</span>
    </label>
    <v-select
      v-model="computedValue"
      :searchable="false"
      :clearable="false"
      :options="options"
    />
  </div>
</template>

<style lang="scss" scoped>
.input-select {
  label {
    display: block;
    position: relative;
    left: 0;
    top: 0;
    width: 100%;

    > span {
      position: absolute;
      top: -14px;
      left: 3px;
      right: 0;
      font-size: 0.8rem;
    }
  }

  ::v-deep {
    .v-select {
      height: 46px;
      border-bottom: 1px solid #9e9e9e;
      margin-bottom: 20px;

      > ul {
        margin-top: 2px;
        min-width: 100%;
        width: auto;
        font-size: 14px;
      }
    }

    .vs__dropdown-toggle {
      border-radius: 0;
      border: none;
      height: 100%;
    }

    .vs__selected-options {
      padding: 0;
    }

    .vs__selected {
      padding: 0 0;
      margin: 11px 0 11px -1px;
      font-size: 14px;
    }

    input {
      position: absolute;
      border: none;
      background: none !important;
    }
  }
}
</style>

<script>
import VSelect from 'vue-select'

export default {
  components: {
    VSelect,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
    name: {
      type: String,
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
    },
    options: {
      type: Array,
      default: function() {
        return [
          {
            label: 'Select',
            val: '0',
          },
        ]
      },
    },
  },

  computed: {
    computedValue: {
      get() {
        return this.options.find(it => it.val === this.value)
      },
      set(val) {
        this.$emit('input', val.val)
      },
    },
  },
}
</script>
