// index.ts

import { drawImage } from "../../utils/util"

// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    role: '',
    roles: [
      { name: '产品研发（产品 技术 研发 UI等）', value: 'dev' },
      { name: '市场推广（运营 市场 品牌 节点 媒体等）', value: 'promote' },
      { name: '基金管理', value: 'fund' },
      { name: '专家顾问', value: 'prof' }
    ],
    selectedImage: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    saveEnabled: false
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
  saveAvatar() {
    wx.createSelectorQuery()
      .select('#canvas')
      .node()
      .exec(async res => {
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')
        ctx.scale(1, 1)
        const w = 512
        canvas.width = w
        canvas.height = w
        ctx.fillStyle = '#fff'
        // 白边宽度
        const borderW = 24
        const radius = 8
        // 白底
        ctx.fillRect(0, 0, w, w)
        // 白边裁剪区域
        ctx.beginPath()
        ctx.moveTo(borderW, borderW + radius)
        ctx.lineTo(borderW, w - borderW - radius)
        ctx.arcTo(borderW, w - borderW - radius, borderW + radius, w - borderW, radius)
        ctx.lineTo(w - borderW - radius, w - borderW)
        ctx.arcTo(w - borderW - radius, w - borderW, w - borderW, w - borderW - radius, radius)
        ctx.lineTo(w - borderW, borderW + radius)
        ctx.arcTo(w - borderW, borderW + radius, w - borderW - radius, borderW, radius)
        ctx.lineTo(borderW + radius, borderW)
        ctx.arcTo(borderW + radius, borderW, borderW, borderW + radius, radius)
        ctx.closePath()
        ctx.clip()

        // 头像
        await drawImage(canvas, ctx, this.data.selectedImage || app.globalData.userInfo!.avatarUrl, 0, 0, 512, 512)
        // 角标外围
        ctx.beginPath()
        ctx.arc(440, 440, 88, 0, 2 * Math.PI)
        ctx.rect(440, 440, 88, 88)
        ctx.fill()
        ctx.closePath()
        // 角标
        ctx.beginPath()
        ctx.arc(440, 440, 72, 0, 2 * Math.PI)
        ctx.clip()
        await drawImage(canvas, ctx, `../../assets/badge-${this.data.role}.png`, 368, 368, 144, 144)
        ctx.closePath()
        // const info = wx.getSystemInfoSync()
        wx.canvasToTempFilePath({
          // @ts-ignore
          canvas,
          // width: 512,
          // height: 512,
          // destWidth: 512 * info.pixelRatio,
          // destHeight: 512 * info.pixelRatio,
          success: (res) => {
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success() {
                wx.showToast({ title: '头像已保存', icon: 'success' })
              },
              fail() {
                wx.showToast({ title: '保存失败', icon: 'none' })
              }
            })
          },
          fail() {
            wx.showToast({ title: '生成失败', icon: 'none' })
          }
        })
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
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.writePhotosAlbum']) {
          this.setData({ saveEnabled: true })
        }
      }
    })
  },
})
