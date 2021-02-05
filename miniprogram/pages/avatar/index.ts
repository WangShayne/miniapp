// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    role: '',
    roles: [
      { name: '研发', value: 'dev' },
      { name: '产品', value: 'prod' },
      { name: '运营', value: 'oper' },
      { name: '其它', value: 'other' }
    ],
    selectedImage: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  onRoleChange(e: any) {
    this.setData({ role: e.detail.value })
  },
  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  },
  onSelectPhoto() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      success: ({tempFilePaths}) => {
        this.setData({
          selectedImage: tempFilePaths[0]
        })
      }
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
        },
      })
    }
  },
})
