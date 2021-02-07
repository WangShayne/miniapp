"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawImage = void 0;
function drawImage(canvas, ctx, src, x, y, width, height) {
    return new Promise(function (resolve, reject) {
        var img = canvas.createImage();
        img.onload = function () {
            ctx.drawImage(img, x, y, width, height);
            resolve();
        };
        img.onerror = reject;
        img.src = src;
    });
}
exports.drawImage = drawImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBZ0IsU0FBUyxDQUFDLE1BQVcsRUFBRSxHQUFRLEVBQUUsR0FBVyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYSxFQUFFLE1BQWM7SUFFL0csT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNoQyxHQUFHLENBQUMsTUFBTSxHQUFHO1lBQ1gsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7WUFDdkMsT0FBTyxFQUFFLENBQUE7UUFDWCxDQUFDLENBQUE7UUFDRCxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtRQUNwQixHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtJQUNmLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQVhELDhCQVdDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRyYXdJbWFnZShjYW52YXM6IGFueSwgY3R4OiBhbnksIHNyYzogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gQHRzLWlnbm9yZVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGltZyA9IGNhbnZhcy5jcmVhdGVJbWFnZSgpXG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgcmVzb2x2ZSgpXG4gICAgfVxuICAgIGltZy5vbmVycm9yID0gcmVqZWN0XG4gICAgaW1nLnNyYyA9IHNyY1xuICB9KVxufSJdfQ==