// components/radio/index.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  externalClasses: ['selector-class'],
  properties: {
    list: {
      type: Array,
      value: []
    },
    value: String
  },
  methods: {
    radioChange(e: any) {
      this.triggerEvent('change', e.detail)
    }
  }
})
