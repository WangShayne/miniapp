"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var app = getApp();
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
    onRoleChange: function (e) {
        this.setData({ role: e.detail.value });
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
    },
    onSelectPhoto: function () {
        var _this = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            success: function (_a) {
                var tempFilePaths = _a.tempFilePaths;
                _this.setData({
                    selectedImage: tempFilePaths[0]
                });
            }
        });
    },
    saveAvatar: function () {
        var _this = this;
        wx.createSelectorQuery()
            .select('#canvas')
            .node()
            .exec(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var canvas, ctx, w, borderW, radius;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        canvas = res[0].node;
                        ctx = canvas.getContext('2d');
                        ctx.scale(1, 1);
                        w = 512;
                        canvas.width = w;
                        canvas.height = w;
                        ctx.fillStyle = '#fff';
                        borderW = 24;
                        radius = 8;
                        ctx.fillRect(0, 0, w, w);
                        ctx.beginPath();
                        ctx.moveTo(borderW, borderW + radius);
                        ctx.lineTo(borderW, w - borderW - radius);
                        ctx.arcTo(borderW, w - borderW - radius, borderW + radius, w - borderW, radius);
                        ctx.lineTo(w - borderW - radius, w - borderW);
                        ctx.arcTo(w - borderW - radius, w - borderW, w - borderW, w - borderW - radius, radius);
                        ctx.lineTo(w - borderW, borderW + radius);
                        ctx.arcTo(w - borderW, borderW + radius, w - borderW - radius, borderW, radius);
                        ctx.lineTo(borderW + radius, borderW);
                        ctx.arcTo(borderW + radius, borderW, borderW, borderW + radius, radius);
                        ctx.closePath();
                        ctx.clip();
                        return [4, util_1.drawImage(canvas, ctx, this.data.selectedImage || app.globalData.userInfo.avatarUrl, 0, 0, 512, 512)];
                    case 1:
                        _a.sent();
                        ctx.beginPath();
                        ctx.arc(440, 440, 88, 0, 2 * Math.PI);
                        ctx.rect(440, 440, 88, 88);
                        ctx.fill();
                        ctx.closePath();
                        ctx.beginPath();
                        ctx.arc(440, 440, 72, 0, 2 * Math.PI);
                        ctx.clip();
                        return [4, util_1.drawImage(canvas, ctx, "../../assets/badge-" + this.data.role + ".png", 368, 368, 144, 144)];
                    case 2:
                        _a.sent();
                        ctx.closePath();
                        wx.canvasToTempFilePath({
                            canvas: canvas,
                            success: function (res) {
                                wx.saveImageToPhotosAlbum({
                                    filePath: res.tempFilePath,
                                    success: function () {
                                        wx.showToast({ title: '头像已保存', icon: 'success' });
                                    },
                                    fail: function () {
                                        wx.showToast({ title: '保存失败', icon: 'none' });
                                    }
                                });
                            },
                            fail: function () {
                                wx.showToast({ title: '生成失败', icon: 'none' });
                            }
                        });
                        return [2];
                }
            });
        }); });
    },
    onLoad: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                });
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true,
                    });
                },
            });
        }
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.writePhotosAlbum']) {
                    _this.setData({ saveEnabled: true });
                }
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHlDQUE0QztBQUc1QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNMLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDNUMsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUNuRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtTQUNoQztRQUNELGFBQWEsRUFBRSxFQUFFO1FBQ2pCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsV0FBVyxFQUFFLEtBQUs7S0FDbkI7SUFDRCxZQUFZLEVBQVosVUFBYSxDQUFNO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENB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QUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1gsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLEVBQUU7b0JBQzdDLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtpQkFDcEM7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG5cbmltcG9ydCB7IGRyYXdJbWFnZSB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsXCJcblxuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHJvbGU6ICcnLFxuICAgIHJvbGVzOiBbXG4gICAgICB7IG5hbWU6ICfkuqflk4HnoJTlj5HvvIjkuqflk4Eg5oqA5pyvIOeglOWPkSBVSeetie+8iScsIHZhbHVlOiAnZGV2JyB9LFxuICAgICAgeyBuYW1lOiAn5biC5Zy65o6o5bm/77yI6L+Q6JClIOW4guWcuiDlk4HniYwg6IqC54K5IOWqkuS9k+etie+8iScsIHZhbHVlOiAncHJvbW90ZScgfSxcbiAgICAgIHsgbmFtZTogJ+WfuumHkeeuoeeQhicsIHZhbHVlOiAnZnVuZCcgfSxcbiAgICAgIHsgbmFtZTogJ+S4k+WutumhvumXricsIHZhbHVlOiAncHJvZicgfVxuICAgIF0sXG4gICAgc2VsZWN0ZWRJbWFnZTogJycsXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgc2F2ZUVuYWJsZWQ6IGZhbHNlXG4gIH0sXG4gIG9uUm9sZUNoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoeyByb2xlOiBlLmRldGFpbC52YWx1ZSB9KVxuICB9LFxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgfSlcbiAgfSxcbiAgb25TZWxlY3RQaG90bygpIHtcbiAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICBjb3VudDogMSxcbiAgICAgIHNpemVUeXBlOiBbJ2NvbXByZXNzZWQnXSxcbiAgICAgIHN1Y2Nlc3M6ICh7dGVtcEZpbGVQYXRoc30pID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBzZWxlY3RlZEltYWdlOiB0ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgc2F2ZUF2YXRhcigpIHtcbiAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcbiAgICAgIC5zZWxlY3QoJyNjYW52YXMnKVxuICAgICAgLm5vZGUoKVxuICAgICAgLmV4ZWMoYXN5bmMgcmVzID0+IHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gcmVzWzBdLm5vZGVcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgY3R4LnNjYWxlKDEsIDEpXG4gICAgICAgIGNvbnN0IHcgPSA1MTJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNmZmYnXG4gICAgICAgIC8vIOeZvei+ueWuveW6plxuICAgICAgICBjb25zdCBib3JkZXJXID0gMjRcbiAgICAgICAgY29uc3QgcmFkaXVzID0gOFxuICAgICAgICAvLyDnmb3lupVcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHcsIHcpXG4gICAgICAgIC8vIOeZvei+ueijgeWJquWMuuWfn1xuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4Lm1vdmVUbyhib3JkZXJXLCBib3JkZXJXICsgcmFkaXVzKVxuICAgICAgICBjdHgubGluZVRvKGJvcmRlclcsIHcgLSBib3JkZXJXIC0gcmFkaXVzKVxuICAgICAgICBjdHguYXJjVG8oYm9yZGVyVywgdyAtIGJvcmRlclcgLSByYWRpdXMsIGJvcmRlclcgKyByYWRpdXMsIHcgLSBib3JkZXJXLCByYWRpdXMpXG4gICAgICAgIGN0eC5saW5lVG8odyAtIGJvcmRlclcgLSByYWRpdXMsIHcgLSBib3JkZXJXKVxuICAgICAgICBjdHguYXJjVG8odyAtIGJvcmRlclcgLSByYWRpdXMsIHcgLSBib3JkZXJXLCB3IC0gYm9yZGVyVywgdyAtIGJvcmRlclcgLSByYWRpdXMsIHJhZGl1cylcbiAgICAgICAgY3R4LmxpbmVUbyh3IC0gYm9yZGVyVywgYm9yZGVyVyArIHJhZGl1cylcbiAgICAgICAgY3R4LmFyY1RvKHcgLSBib3JkZXJXLCBib3JkZXJXICsgcmFkaXVzLCB3IC0gYm9yZGVyVyAtIHJhZGl1cywgYm9yZGVyVywgcmFkaXVzKVxuICAgICAgICBjdHgubGluZVRvKGJvcmRlclcgKyByYWRpdXMsIGJvcmRlclcpXG4gICAgICAgIGN0eC5hcmNUbyhib3JkZXJXICsgcmFkaXVzLCBib3JkZXJXLCBib3JkZXJXLCBib3JkZXJXICsgcmFkaXVzLCByYWRpdXMpXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKVxuICAgICAgICBjdHguY2xpcCgpXG5cbiAgICAgICAgLy8g5aS05YOPXG4gICAgICAgIGF3YWl0IGRyYXdJbWFnZShjYW52YXMsIGN0eCwgdGhpcy5kYXRhLnNlbGVjdGVkSW1hZ2UgfHwgYXBwLmdsb2JhbERhdGEudXNlckluZm8hLmF2YXRhclVybCwgMCwgMCwgNTEyLCA1MTIpXG4gICAgICAgIC8vIOinkuagh+WkluWbtFxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmFyYyg0NDAsIDQ0MCwgODgsIDAsIDIgKiBNYXRoLlBJKVxuICAgICAgICBjdHgucmVjdCg0NDAsIDQ0MCwgODgsIDg4KVxuICAgICAgICBjdHguZmlsbCgpXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKVxuICAgICAgICAvLyDop5LmoIdcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5hcmMoNDQwLCA0NDAsIDcyLCAwLCAyICogTWF0aC5QSSlcbiAgICAgICAgY3R4LmNsaXAoKVxuICAgICAgICBhd2FpdCBkcmF3SW1hZ2UoY2FudmFzLCBjdHgsIGAuLi8uLi9hc3NldHMvYmFkZ2UtJHt0aGlzLmRhdGEucm9sZX0ucG5nYCwgMzY4LCAzNjgsIDE0NCwgMTQ0KVxuICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICAgICAgLy8gY29uc3QgaW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKClcbiAgICAgICAgd3guY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBjYW52YXMsXG4gICAgICAgICAgLy8gd2lkdGg6IDUxMixcbiAgICAgICAgICAvLyBoZWlnaHQ6IDUxMixcbiAgICAgICAgICAvLyBkZXN0V2lkdGg6IDUxMiAqIGluZm8ucGl4ZWxSYXRpbyxcbiAgICAgICAgICAvLyBkZXN0SGVpZ2h0OiA1MTIgKiBpbmZvLnBpeGVsUmF0aW8sXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgd3guc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XG4gICAgICAgICAgICAgIGZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoLFxuICAgICAgICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn5aS05YOP5bey5L+d5a2YJywgaWNvbjogJ3N1Y2Nlc3MnIH0pXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhaWwoKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfkv53lrZjlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwoKSB7XG4gICAgICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+eUn+aIkOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gcmVzID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG4gICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLndyaXRlUGhvdG9zQWxidW0nXSkge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHNhdmVFbmFibGVkOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9LFxufSlcbiJdfQ==