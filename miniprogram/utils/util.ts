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