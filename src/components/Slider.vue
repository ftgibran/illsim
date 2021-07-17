<template>
  <div class="input-field">
    <label class="truncate"
      ><i :class="`fa ${icon}`" aria-hidden="true"></i> {{ label }}</label
    >

    <div class="nouislider"></div>

    <div class="row mb-0">
      <div class="input-field mt-0 s6 col">
        <input type="text" v-model="value1" class="ta-l" />
      </div>
      <div class="input-field mt-0 s6 col" v-show="range">
        <input type="text" v-model="value2" class="ta-r" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
    }
  },

  props: {
    icon: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    range: {
      type: Boolean,
      default: false,
    },
    value: {},
    valueMin: {},
    valueMax: {},
    step: {
      type: String,
      default: '1',
    },
    min: {
      type: String,
      default: '0',
    },
    max: {
      type: String,
      default: '100',
    },
    decimals: {
      type: String,
      default: '0',
    },
    prefix: {
      type: String,
      default: '',
    },
    postfix: {
      type: String,
      default: '',
    },
  },

  watch: {
    value1(newVal) {
      if (this.range) {
        this.valMin =
          this.postfix === '%' ? this.per2num(newVal) : this.str2num(newVal)
      } else {
        this.val =
          this.postfix === '%' ? this.per2num(newVal) : this.str2num(newVal)
      }
    },
    value2(newVal) {
      if (this.range) {
        this.valMax =
          this.postfix === '%' ? this.per2num(newVal) : this.str2num(newVal)
      }
    },
    val(newVal) {
      if (this.range) {
        this.value1 =
          this.postfix === '%'
            ? this.num2per(newVal[0])
            : this.num2str(newVal[0])
        this.value2 =
          this.postfix === '%'
            ? this.num2per(newVal[1])
            : this.num2str(newVal[1])
      } else {
        this.value1 =
          this.postfix === '%' ? this.num2per(newVal) : this.num2str(newVal)
      }
    },
  },

  computed: {
    val: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    valMin: {
      get() {
        return this.valueMin
      },
      set(val) {
        this.$emit('inputMin', val)
      },
    },
    valMax: {
      get() {
        return this.valueMax
      },
      set(val) {
        this.$emit('inputMax', val)
      },
    },
  },

  methods: {
    num2per(value) {
      return String(value * 100).replace(',', '.') + '%'
    },
    per2num(value) {
      return Number(value.replace('%', '').replace(',', '.')) / 100
    },
    str2num(value) {
      return Number(value.replace(',', '.'))
    },
    num2str(value) {
      return String(value).replace(',', '.')
    },
  },

  mounted() {
    var el = this.$el

    var input = window.$(el).find('input')
    var label = window.$(el).find('label')
    var slider = window.$(el).find('.nouislider')[0]

    var start = []

    if (this.range) {
      start[0] = this.valMin * (this.postfix === '%' ? 100 : 1)
      start[1] = this.valMax * (this.postfix === '%' ? 100 : 1)
    } else {
      start[0] = this.val * (this.postfix === '%' ? 100 : 1)
    }

    window.$(el).css('margin-top', '2em')
    label.css('top', '-2em')
    label.css('left', '0')
    label.css('font-size', '14px')
    input.css('border', 'none')
    input.css('margin-bottom', '0')

    if (!this.range) {
      window.$(input[0]).attr('id', this.name)
      window.$(input[0]).attr('name', this.name)
      window.$(input[1]).remove()
    }

    window.noUiSlider.create(slider, {
      start: start,
      connect: this.range ? true : 'lower',
      step: Number(this.step),
      range: {
        min: Number(this.min),
        max: Number(this.max),
      },
      format: window.wNumb({
        decimals: Number(this.decimals),
        postfix: this.postfix,
        prefix: this.prefix,
      }),
    })

    slider.noUiSlider.on(
      'update',
      function(values) {
        if (this.range) {
          this.value1 = values[0]
          this.value2 = values[1]
        } else {
          this.value1 = values[0]
        }
      }.bind(this)
    )

    input.each(function(index) {
      window
        .$(this)
        .on('change', function() {
          if (index) slider.noUiSlider.set([null, this.value])
          else slider.noUiSlider.set([this.value, null])
        })
        .on('click', function() {
          window.$(this).select()
        })
    })
  },
}
</script>
