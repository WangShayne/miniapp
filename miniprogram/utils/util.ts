export function drawImage(canvas: any, ctx: any, src: string, x: number, y: number, width: number, height: number): Promise<void> {
  // @ts-ignore
  return new Promise((resolve, reject) => {
    const img = canvas.createImage()
    img.onload = () => {
      ctx.drawImage(img, x, y, width, height)
      resolve()
    }
    img.onerror = reject
    img.src = src
  })
}

export const HighSDKVersion = "2.21.2"

export function compareVersion(v1: string, v2: string) {
  const list1 = v1.split('.')
  const list2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  // 调整两个版本号位数相同
  while (list1.length < len) {
    list1.push('0')
  }
  while (list2.length < len) {
    list2.push('0')
  }

  // 循环判断每位数的大小
  for (let i = 0; i < len; i++) {
    const num1 = parseInt(list1[i])
    const num2 = parseInt(list2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}