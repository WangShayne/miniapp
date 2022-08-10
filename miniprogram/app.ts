// app.ts
import { HighSDKVersion, compareVersion } from "./utils/util"

App<IAppOption>({
  globalData: {
    isHighSDKVersion: false
  },
  onLaunch() {

    /**
     * 2022-08-10 Shayne 
     * 根据小程序官方2022-05-09 <<小程序用户头像昵称获取规则调整公告>> 调整获取用户头像相关代码
     * https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01
     */
    const _this = this

    // 获取用户小程序基础库版本
    try {
      const res = wx.getSystemInfoSync()
      _this.globalData.isHighSDKVersion = compareVersion(res.SDKVersion, HighSDKVersion) >= 0 ? true : false
    } catch (e) {
      // Do something when catch error
      console.error("Get SDKVersion faild!")
    }

    if (!_this.globalData.isHighSDKVersion) {
      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                this.globalData.userInfo = res.userInfo

                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              },
            })
          }
        },
      })
    }
  },
})