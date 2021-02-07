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
            .select('.canvas')
            .node()
            .exec(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var canvas, ctx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        canvas = res[0].node;
                        ctx = canvas.getContext('2d');
                        ctx.scale(1, 1);
                        ctx.clearRect(0, 0, 128, 128);
                        return [4, util_1.drawImage(canvas, ctx, this.data.selectedImage || app.globalData.userInfo.avatarUrl, 0, 0, 128, 128)];
                    case 1:
                        _a.sent();
                        ctx.beginPath();
                        ctx.arc(110, 110, 22, 0, 2 * Math.PI);
                        ctx.rect(110, 110, 22, 22);
                        ctx.fillStyle = '#fff';
                        ctx.fill();
                        ctx.closePath();
                        ctx.beginPath();
                        ctx.arc(110, 110, 18, 0, 2 * Math.PI);
                        ctx.clip();
                        return [4, util_1.drawImage(canvas, ctx, "../../assets/badge-" + this.data.role + ".png", 92, 92, 36, 36)];
                    case 2:
                        _a.sent();
                        ctx.closePath();
                        wx.canvasToTempFilePath({
                            canvas: canvas,
                            success: function (res) {
                                wx.saveImageToPhotosAlbum({
                                    filePath: res.tempFilePath,
                                    success: function () {
                                        wx.showModal({
                                            title: '头像已保存到手机相册',
                                            content: '快去替换自己的微信头像吧',
                                            showCancel: false
                                        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHlDQUE0QztBQUc1QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNMLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDNUMsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUNuRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtTQUNoQztRQUNELGFBQWEsRUFBRSxFQUFFO1FBQ2pCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsV0FBVyxFQUFFLEtBQUs7S0FDbkI7SUFDRCxZQUFZLEVBQVosVUFBYSxDQUFNO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENB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RyxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO29CQUM3QyxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7aUJBQ3BDO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuXG5pbXBvcnQgeyBkcmF3SW1hZ2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbFwiXG5cbi8vIOiOt+WPluW6lOeUqOWunuS+i1xuY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICByb2xlOiAnJyxcbiAgICByb2xlczogW1xuICAgICAgeyBuYW1lOiAn5Lqn5ZOB56CU5Y+R77yI5Lqn5ZOBIOaKgOacryDnoJTlj5EgVUnnrYnvvIknLCB2YWx1ZTogJ2RldicgfSxcbiAgICAgIHsgbmFtZTogJ+W4guWcuuaOqOW5v++8iOi/kOiQpSDluILlnLog5ZOB54mMIOiKgueCuSDlqpLkvZPnrYnvvIknLCB2YWx1ZTogJ3Byb21vdGUnIH0sXG4gICAgICB7IG5hbWU6ICfln7rph5HnrqHnkIYnLCB2YWx1ZTogJ2Z1bmQnIH0sXG4gICAgICB7IG5hbWU6ICfkuJPlrrbpob7pl64nLCB2YWx1ZTogJ3Byb2YnIH1cbiAgICBdLFxuICAgIHNlbGVjdGVkSW1hZ2U6ICcnLFxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuICAgIHNhdmVFbmFibGVkOiBmYWxzZVxuICB9LFxuICBvblJvbGVDaGFuZ2UoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHsgcm9sZTogZS5kZXRhaWwudmFsdWUgfSlcbiAgfSxcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgIH0pXG4gIH0sXG4gIG9uU2VsZWN0UGhvdG8oKSB7XG4gICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgY291bnQ6IDEsXG4gICAgICBzaXplVHlwZTogWydjb21wcmVzc2VkJ10sXG4gICAgICBzdWNjZXNzOiAoe3RlbXBGaWxlUGF0aHN9KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgc2VsZWN0ZWRJbWFnZTogdGVtcEZpbGVQYXRoc1swXVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIHNhdmVBdmF0YXIoKSB7XG4gICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpXG4gICAgICAuc2VsZWN0KCcuY2FudmFzJylcbiAgICAgIC5ub2RlKClcbiAgICAgIC5leGVjKGFzeW5jIHJlcyA9PiB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHJlc1swXS5ub2RlXG4gICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgIGN0eC5zY2FsZSgxLCAxKVxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDEyOCwgMTI4KVxuICAgICAgICAvLyDlpLTlg49cbiAgICAgICAgYXdhaXQgZHJhd0ltYWdlKGNhbnZhcywgY3R4LCB0aGlzLmRhdGEuc2VsZWN0ZWRJbWFnZSB8fCBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyEuYXZhdGFyVXJsLCAwLCAwLCAxMjgsIDEyOClcbiAgICAgICAgLy8g6KeS5qCH5aSW5Zu0XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHguYXJjKDExMCwgMTEwLCAyMiwgMCwgMiAqIE1hdGguUEkpXG4gICAgICAgIGN0eC5yZWN0KDExMCwgMTEwLCAyMiwgMjIpXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZidcbiAgICAgICAgY3R4LmZpbGwoKVxuICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICAgICAgLy8g6KeS5qCHXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHguYXJjKDExMCwgMTEwLCAxOCwgMCwgMiAqIE1hdGguUEkpXG4gICAgICAgIGN0eC5jbGlwKClcbiAgICAgICAgYXdhaXQgZHJhd0ltYWdlKGNhbnZhcywgY3R4LCBgLi4vLi4vYXNzZXRzL2JhZGdlLSR7dGhpcy5kYXRhLnJvbGV9LnBuZ2AsIDkyLCA5MiwgMzYsIDM2KVxuICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICAgICAgd3guY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBjYW52YXMsXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgd3guc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XG4gICAgICAgICAgICAgIGZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoLFxuICAgICAgICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+WktOWDj+W3suS/neWtmOWIsOaJi+acuuebuOWGjCcsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiAn5b+r5Y675pu/5o2i6Ieq5bex55qE5b6u5L+h5aS05YOP5ZCnJyxcbiAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFpbCgpIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+S/neWtmOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbCgpIHtcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn55Sf5oiQ5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSByZXMgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH1cbiAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUud3JpdGVQaG90b3NBbGJ1bSddKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHsgc2F2ZUVuYWJsZWQ6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG59KVxuIl19