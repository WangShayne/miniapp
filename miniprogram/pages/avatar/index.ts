// index.ts

import { drawImage } from "../../utils/util"
import share from '../../common/share'

// 获取应用实例
const app = getApp<IAppOption>()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  ...share,
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
    isHighSDKVersion: app.globalData.isHighSDKVersion,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    saveEnabled: true,
    avatarUrl: defaultAvatarUrl
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
  onChooseAvatar(e: any) {
    const { avatarUrl } = e.detail
    console.log(e.detail)
    this.setData({
      avatarUrl,
      hasUserInfo: true,
    })
  },
  checkSaveAuth(setting: any) {
    if (setting.authSetting['scope.writePhotosAlbum'] === false) {
      if (this.data.saveEnabled) {
        this.setData({ saveEnabled: false })
      }
    } else {
      if (!this.data.saveEnabled) {
        this.setData({ saveEnabled: true })
      }
    }
  },
  onSelectPhoto() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      success: ({ tempFilePaths }) => {
        this.setData({
          selectedImage: tempFilePaths[0]
        })
      }
    })
  },
  onOpenedSetting(res: any) {
    this.checkSaveAuth(res.detail)
  },
  saveAvatar() {
    wx.createSelectorQuery()
      .select('#canvas')
      .node()
      .exec(async res => {
        const info = wx.getSystemInfoSync()
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')
        ctx.scale(1, 1)
        const w = 512
        canvas.width = w
        canvas.height = w
        ctx.fillStyle = '#ffffff'
        ctx.save()
        // 白边宽度
        const borderW = 32
        const radius = 32
        // 白底
        ctx.fillRect(0, 0, w, w)
        // 白边裁剪区域
        ctx.beginPath()
        const b1 = [borderW, borderW + radius]
        const b2 = [borderW, w - borderW - radius]
        const b3 = [borderW + radius, w - borderW]
        const b4 = [w - borderW - radius, w - borderW]
        const b5 = [w - borderW, w - borderW - radius]
        const b6 = [w - borderW, borderW + radius]
        const b7 = [w - borderW - radius, borderW]
        const b8 = [borderW + radius, borderW]
        ctx.moveTo(b1[0], b1[1])
        ctx.lineTo(b2[0], b2[1])
        ctx.arcTo(b2[0], b2[1] + radius, b3[0], b3[1], radius)
        ctx.lineTo(b4[0], b4[1])
        ctx.arcTo(b4[0] + radius - 2, b4[1], b5[0], b5[1], radius)
        ctx.lineTo(b6[0], b6[1])
        ctx.arcTo(b6[0], b6[1] - radius, b7[0], b7[1], radius)
        ctx.lineTo(b8[0], b8[1])
        ctx.arcTo(b8[0] - radius, b8[1], b1[0], b1[1], radius)
        ctx.closePath()
        ctx.clip()

        // 头像
        await drawImage(canvas, ctx, this.data.selectedImage || app.globalData.userInfo?.avatarUrl || this.data.avatarUrl, borderW, borderW, w - 2 * borderW, w - 2 * borderW)

        ctx.restore()
        // 角标
        const badgeRadius = 72
        const badgeBorder = 16
        const badgeCenter = w - borderW - badgeRadius
        // 右下角填白
        ctx.fillRect(badgeCenter, badgeCenter, badgeRadius + badgeBorder + borderW, badgeRadius + badgeBorder + borderW)
        // 角标外围
        ctx.beginPath()
        ctx.arc(badgeCenter, badgeCenter, badgeRadius + badgeBorder, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fill()
        // 角标
        ctx.beginPath()
        ctx.arc(badgeCenter, badgeCenter, badgeRadius, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.clip()
        await drawImage(canvas, ctx, `../../assets/badge-${this.data.role}.png`, w - borderW - 2 * badgeRadius, w - borderW - 2 * badgeRadius, 2 * badgeRadius, 2 * badgeRadius)
        wx.canvasToTempFilePath({
          // @ts-ignore
          canvas,
          destWidth: info.windowWidth * info.pixelRatio,
          destHeight: info.windowWidth * info.pixelRatio,
          success: (res) => {
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success() {
                wx.showToast({ title: '头像已保存', icon: 'success' })
              },
              fail: (err) => {
                if (err.errMsg === 'saveImageToPhotosAlbum:fail auth deny') {
                  wx.showToast({ title: '请打开设置允许访问相册权限', icon: 'none' })
                } else {
                  console.log(err)
                  wx.showToast({ title: '保存失败', icon: 'none' })
                }
                this.setData({
                  saveEnabled: false
                })
              }
            })
          },
          fail(err) {
            console.log(err)
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
        this.checkSaveAuth(res)
      }
    })
  },
})
