export default {
  onShareAppMessage() {
    const pages = getCurrentPages()
    const path = pages[pages.length - 1].route
    return {
      title: 'Comunion头像助手',
      path: path,
      imageUrl: ''
    }
  }
}