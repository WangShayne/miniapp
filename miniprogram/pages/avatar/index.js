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
        saveEnabled: true
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
    checkSaveAuth: function (setting) {
        if (setting.authSetting['scope.writePhotosAlbum'] === false) {
            if (this.data.saveEnabled) {
                this.setData({ saveEnabled: false });
            }
        }
        else {
            if (!this.data.saveEnabled) {
                this.setData({ saveEnabled: true });
            }
        }
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
    onOpenedSetting: function (res) {
        this.checkSaveAuth(res.detail);
    },
    saveAvatar: function () {
        var _this = this;
        wx.createSelectorQuery()
            .select('#canvas')
            .node()
            .exec(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var info, canvas, ctx, w, borderW, radius, b1, b2, b3, b4, b5, b6, b7, b8, badgeRadius, badgeBorder, badgeCenter;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        info = wx.getSystemInfoSync();
                        canvas = res[0].node;
                        ctx = canvas.getContext('2d');
                        ctx.scale(1, 1);
                        w = 512;
                        canvas.width = w;
                        canvas.height = w;
                        ctx.fillStyle = '#ffffff';
                        ctx.save();
                        borderW = 32;
                        radius = 32;
                        ctx.fillRect(0, 0, w, w);
                        ctx.beginPath();
                        b1 = [borderW, borderW + radius];
                        b2 = [borderW, w - borderW - radius];
                        b3 = [borderW + radius, w - borderW];
                        b4 = [w - borderW - radius, w - borderW];
                        b5 = [w - borderW, w - borderW - radius];
                        b6 = [w - borderW, borderW + radius];
                        b7 = [w - borderW - radius, borderW];
                        b8 = [borderW + radius, borderW];
                        ctx.moveTo(b1[0], b1[1]);
                        ctx.lineTo(b2[0], b2[1]);
                        ctx.arcTo(b2[0], b2[1] + radius, b3[0], b3[1], radius);
                        ctx.lineTo(b4[0], b4[1]);
                        ctx.arcTo(b4[0] + radius - 2, b4[1], b5[0], b5[1], radius);
                        ctx.lineTo(b6[0], b6[1]);
                        ctx.arcTo(b6[0], b6[1] - radius, b7[0], b7[1], radius);
                        ctx.lineTo(b8[0], b8[1]);
                        ctx.arcTo(b8[0] - radius, b8[1], b1[0], b1[1], radius);
                        ctx.closePath();
                        ctx.clip();
                        return [4, util_1.drawImage(canvas, ctx, this.data.selectedImage || app.globalData.userInfo.avatarUrl, borderW, borderW, w - 2 * borderW, w - 2 * borderW)];
                    case 1:
                        _a.sent();
                        ctx.restore();
                        badgeRadius = 72;
                        badgeBorder = 16;
                        badgeCenter = w - borderW - badgeRadius;
                        ctx.fillRect(badgeCenter, badgeCenter, badgeRadius + badgeBorder + borderW, badgeRadius + badgeBorder + borderW);
                        ctx.beginPath();
                        ctx.arc(badgeCenter, badgeCenter, badgeRadius + badgeBorder, 0, 2 * Math.PI);
                        ctx.closePath();
                        ctx.fill();
                        ctx.beginPath();
                        ctx.arc(badgeCenter, badgeCenter, badgeRadius, 0, 2 * Math.PI);
                        ctx.closePath();
                        ctx.clip();
                        return [4, util_1.drawImage(canvas, ctx, "../../assets/badge-" + this.data.role + ".png", w - borderW - 2 * badgeRadius, w - borderW - 2 * badgeRadius, 2 * badgeRadius, 2 * badgeRadius)];
                    case 2:
                        _a.sent();
                        wx.canvasToTempFilePath({
                            canvas: canvas,
                            destWidth: info.windowWidth * info.pixelRatio,
                            destHeight: info.windowWidth * info.pixelRatio,
                            success: function (res) {
                                wx.saveImageToPhotosAlbum({
                                    filePath: res.tempFilePath,
                                    success: function () {
                                        wx.showToast({ title: '头像已保存', icon: 'success' });
                                    },
                                    fail: function (err) {
                                        if (err.errMsg === 'saveImageToPhotosAlbum:fail auth deny') {
                                            wx.showToast({ title: '请打开设置允许访问相册权限', icon: 'none' });
                                        }
                                        else {
                                            console.log(err);
                                            wx.showToast({ title: '保存失败', icon: 'none' });
                                        }
                                        _this.setData({
                                            saveEnabled: false
                                        });
                                    }
                                });
                            },
                            fail: function (err) {
                                console.log(err);
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
                _this.checkSaveAuth(res);
            }
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHlDQUE0QztBQUc1QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNMLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDNUMsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUNuRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtTQUNoQztRQUNELGFBQWEsRUFBRSxFQUFFO1FBQ2pCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsV0FBVyxFQUFFLElBQUk7S0FDbEI7SUFDRCxZQUFZLEVBQVosVUFBYSxDQUFNO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENB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R0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO3dCQUNwQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO3dCQUN0QyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ3hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTt3QkFDdEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ3hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7d0JBQzFELEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUN4QixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFD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TTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3pCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcblxuaW1wb3J0IHsgZHJhd0ltYWdlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxcIlxuXG4vLyDojrflj5blupTnlKjlrp7kvotcbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgcm9sZTogJycsXG4gICAgcm9sZXM6IFtcbiAgICAgIHsgbmFtZTogJ+S6p+WTgeeglOWPke+8iOS6p+WTgSDmioDmnK8g56CU5Y+RIFVJ562J77yJJywgdmFsdWU6ICdkZXYnIH0sXG4gICAgICB7IG5hbWU6ICfluILlnLrmjqjlub/vvIjov5DokKUg5biC5Zy6IOWTgeeJjCDoioLngrkg5aqS5L2T562J77yJJywgdmFsdWU6ICdwcm9tb3RlJyB9LFxuICAgICAgeyBuYW1lOiAn5Z+66YeR566h55CGJywgdmFsdWU6ICdmdW5kJyB9LFxuICAgICAgeyBuYW1lOiAn5LiT5a626aG+6ZeuJywgdmFsdWU6ICdwcm9mJyB9XG4gICAgXSxcbiAgICBzZWxlY3RlZEltYWdlOiAnJyxcbiAgICB1c2VySW5mbzoge30sXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICBzYXZlRW5hYmxlZDogdHJ1ZVxuICB9LFxuICBvblJvbGVDaGFuZ2UoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHsgcm9sZTogZS5kZXRhaWwudmFsdWUgfSlcbiAgfSxcbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgIH0pXG4gIH0sXG4gIGNoZWNrU2F2ZUF1dGgoc2V0dGluZzogYW55KSB7XG4gICAgaWYgKHNldHRpbmcuYXV0aFNldHRpbmdbJ3Njb3BlLndyaXRlUGhvdG9zQWxidW0nXSA9PT0gZmFsc2UpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEuc2F2ZUVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgc2F2ZUVuYWJsZWQ6IGZhbHNlIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5kYXRhLnNhdmVFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IHNhdmVFbmFibGVkOiB0cnVlIH0pXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBvblNlbGVjdFBob3RvKCkge1xuICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgIGNvdW50OiAxLFxuICAgICAgc2l6ZVR5cGU6IFsnY29tcHJlc3NlZCddLFxuICAgICAgc3VjY2VzczogKHt0ZW1wRmlsZVBhdGhzfSkgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHNlbGVjdGVkSW1hZ2U6IHRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICBvbk9wZW5lZFNldHRpbmcocmVzOiBhbnkpIHtcbiAgICB0aGlzLmNoZWNrU2F2ZUF1dGgocmVzLmRldGFpbClcbiAgfSxcbiAgc2F2ZUF2YXRhcigpIHtcbiAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcbiAgICAgIC5zZWxlY3QoJyNjYW52YXMnKVxuICAgICAgLm5vZGUoKVxuICAgICAgLmV4ZWMoYXN5bmMgcmVzID0+IHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKClcbiAgICAgICAgY29uc3QgY2FudmFzID0gcmVzWzBdLm5vZGVcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgY3R4LnNjYWxlKDEsIDEpXG4gICAgICAgIGNvbnN0IHcgPSA1MTJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnXG4gICAgICAgIGN0eC5zYXZlKClcbiAgICAgICAgLy8g55m96L655a695bqmXG4gICAgICAgIGNvbnN0IGJvcmRlclcgPSAzMlxuICAgICAgICBjb25zdCByYWRpdXMgPSAzMlxuICAgICAgICAvLyDnmb3lupVcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHcsIHcpXG4gICAgICAgIC8vIOeZvei+ueijgeWJquWMuuWfn1xuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY29uc3QgYjEgPSBbYm9yZGVyVywgYm9yZGVyVyArIHJhZGl1c11cbiAgICAgICAgY29uc3QgYjIgPSBbYm9yZGVyVywgdyAtIGJvcmRlclcgLSByYWRpdXNdXG4gICAgICAgIGNvbnN0IGIzID0gW2JvcmRlclcgKyByYWRpdXMsIHcgLSBib3JkZXJXXVxuICAgICAgICBjb25zdCBiNCA9IFt3IC0gYm9yZGVyVyAtIHJhZGl1cywgdyAtIGJvcmRlclddXG4gICAgICAgIGNvbnN0IGI1ID0gW3cgLSBib3JkZXJXLCB3IC0gYm9yZGVyVyAtIHJhZGl1c11cbiAgICAgICAgY29uc3QgYjYgPSBbdyAtIGJvcmRlclcsIGJvcmRlclcgKyByYWRpdXNdXG4gICAgICAgIGNvbnN0IGI3ID0gW3cgLSBib3JkZXJXIC0gcmFkaXVzLCBib3JkZXJXXVxuICAgICAgICBjb25zdCBiOCA9IFtib3JkZXJXICsgcmFkaXVzLCBib3JkZXJXXVxuICAgICAgICBjdHgubW92ZVRvKGIxWzBdLCBiMVsxXSlcbiAgICAgICAgY3R4LmxpbmVUbyhiMlswXSwgYjJbMV0pXG4gICAgICAgIGN0eC5hcmNUbyhiMlswXSwgYjJbMV0gKyByYWRpdXMsIGIzWzBdLCBiM1sxXSwgcmFkaXVzKVxuICAgICAgICBjdHgubGluZVRvKGI0WzBdLCBiNFsxXSlcbiAgICAgICAgY3R4LmFyY1RvKGI0WzBdICsgcmFkaXVzIC0gMiwgYjRbMV0sIGI1WzBdLCBiNVsxXSwgcmFkaXVzKVxuICAgICAgICBjdHgubGluZVRvKGI2WzBdLCBiNlsxXSlcbiAgICAgICAgY3R4LmFyY1RvKGI2WzBdLCBiNlsxXSAtIHJhZGl1cywgYjdbMF0sIGI3WzFdLCByYWRpdXMpXG4gICAgICAgIGN0eC5saW5lVG8oYjhbMF0sIGI4WzFdKVxuICAgICAgICBjdHguYXJjVG8oYjhbMF0gLSByYWRpdXMsIGI4WzFdLCBiMVswXSwgYjFbMV0sIHJhZGl1cylcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgICAgIGN0eC5jbGlwKClcblxuICAgICAgICAvLyDlpLTlg49cbiAgICAgICAgYXdhaXQgZHJhd0ltYWdlKGNhbnZhcywgY3R4LCB0aGlzLmRhdGEuc2VsZWN0ZWRJbWFnZSB8fCBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyEuYXZhdGFyVXJsLCBib3JkZXJXLCBib3JkZXJXLCB3IC0gMiAqIGJvcmRlclcsIHcgLSAyICogYm9yZGVyVylcblxuICAgICAgICBjdHgucmVzdG9yZSgpXG4gICAgICAgIC8vIOinkuagh1xuICAgICAgICBjb25zdCBiYWRnZVJhZGl1cyA9IDcyXG4gICAgICAgIGNvbnN0IGJhZGdlQm9yZGVyID0gMTZcbiAgICAgICAgY29uc3QgYmFkZ2VDZW50ZXIgPSB3IC0gYm9yZGVyVyAtIGJhZGdlUmFkaXVzXG4gICAgICAgIC8vIOWPs+S4i+inkuWhq+eZvVxuICAgICAgICBjdHguZmlsbFJlY3QoYmFkZ2VDZW50ZXIsIGJhZGdlQ2VudGVyLCBiYWRnZVJhZGl1cyArIGJhZGdlQm9yZGVyICsgYm9yZGVyVywgYmFkZ2VSYWRpdXMgKyBiYWRnZUJvcmRlciArIGJvcmRlclcpXG4gICAgICAgIC8vIOinkuagh+WkluWbtFxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmFyYyhiYWRnZUNlbnRlciwgYmFkZ2VDZW50ZXIsIGJhZGdlUmFkaXVzICsgYmFkZ2VCb3JkZXIsIDAsIDIgKiBNYXRoLlBJKVxuICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICAgICAgY3R4LmZpbGwoKVxuICAgICAgICAvLyDop5LmoIdcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5hcmMoYmFkZ2VDZW50ZXIsIGJhZGdlQ2VudGVyLCBiYWRnZVJhZGl1cywgMCwgMiAqIE1hdGguUEkpXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKVxuICAgICAgICBjdHguY2xpcCgpXG4gICAgICAgIGF3YWl0IGRyYXdJbWFnZShjYW52YXMsIGN0eCwgYC4uLy4uL2Fzc2V0cy9iYWRnZS0ke3RoaXMuZGF0YS5yb2xlfS5wbmdgLCB3IC0gYm9yZGVyVyAtIDIgKiBiYWRnZVJhZGl1cywgdyAtIGJvcmRlclcgLSAyICogYmFkZ2VSYWRpdXMsIDIgKiBiYWRnZVJhZGl1cywgMiAqIGJhZGdlUmFkaXVzKVxuICAgICAgICB3eC5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIGNhbnZhcyxcbiAgICAgICAgICBkZXN0V2lkdGg6IGluZm8ud2luZG93V2lkdGggKiBpbmZvLnBpeGVsUmF0aW8sXG4gICAgICAgICAgZGVzdEhlaWdodDogaW5mby53aW5kb3dXaWR0aCAqIGluZm8ucGl4ZWxSYXRpbyxcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICB3eC5zYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtKHtcbiAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGgsXG4gICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICflpLTlg4/lt7Lkv53lrZgnLCBpY29uOiAnc3VjY2VzcycgfSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuZXJyTXNnID09PSAnc2F2ZUltYWdlVG9QaG90b3NBbGJ1bTpmYWlsIGF1dGggZGVueScpIHtcbiAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn6K+35omT5byA6K6+572u5YWB6K646K6/6Zeu55u45YaM5p2D6ZmQJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn5L+d5a2Y5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICBzYXZlRW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn55Sf5oiQ5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgdXNlckluZm86IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvLFxuICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY2FuSVVzZSkge1xuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSByZXMgPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWcqOayoeaciSBvcGVuLXR5cGU9Z2V0VXNlckluZm8g54mI5pys55qE5YW85a655aSE55CGXG4gICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH1cbiAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5jaGVja1NhdmVBdXRoKHJlcylcbiAgICAgIH1cbiAgICB9KVxuICB9LFxufSlcbiJdfQ==