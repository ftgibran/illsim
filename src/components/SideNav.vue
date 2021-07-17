<template>
  <div class="sidenav card-panel grey lighten-5">
    <slot></slot>
  </div>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
.sidenav {
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: 500px;
  z-index: 10000;
}
</style>

<script>
import {TweenMax, Power1, Power3} from 'gsap'

export default {
  props: {
    time: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      hidden: false,
    }
  },

  methods: {
    shownEvent() {
      window.$(document).on('click', e => {
        if (window.$(e.target).closest(this.$el).length === 0) {
          this.hide()
        }
      })
    },
    hiddenEvent() {
      window.$(document).off('click')
    },

    show() {
      var el = window.$(this.$el)

      TweenMax.to(el, this.time, {
        x: 0,
        ease: Power3.easeOut,
      })
    },

    hide() {
      var el = window.$(this.$el)

      TweenMax.to(el, this.time, {
        x: -el.width(),
        ease: Power3.easeOut,
      })
    },
    isTouchDevice() {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      )
    },
  },

  mounted() {
    var el = window.$(this.$el)

    if (!this.isTouchDevice()) {
      window.$(el).hover(
        () => {
          TweenMax.to(el, this.time, {
            opacity: 1,
            ease: Power3.easeOut,
          })
        },
        () => {
          TweenMax.to(el, this.time, {
            opacity: 0.4,
            ease: Power1.easeOut,
          })
        }
      )
    }

    this.hide()

    this.$root.$on('showSidebar', this.show)
    this.$root.$on('reset', this.hide)

    this.$on('shown', this.shownEvent)
    this.$on('hidden', this.hiddenEvent)
  },

  destroyed() {
    this.$root.$off('showSidebar', this.show)
    this.$root.$off('reset', this.hide)

    this.$off('shown', this.shownEvent)
    this.$off('hidden', this.hiddenEvent)
  },
}
</script>
