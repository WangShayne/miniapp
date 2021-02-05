// components/cell/index.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  externalClasses: ['cell-class'],
  properties: {
    title: String,
    url: String
  }
})
