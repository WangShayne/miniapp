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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHlDQUE0QztBQUk1QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFFSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNMLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDNUMsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUNuRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtTQUNoQztRQUNELGFBQWEsRUFBRSxFQUFFO1FBQ2pCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsV0FBVyxFQUFFLElBQUk7S0FDbEI7SUFDRCxZQUFZLEVBQVosVUFBYSxDQUFNO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENB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R0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO3dCQUNwQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFBO3dCQUN0QyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ3hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTt3QkFDdEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ3hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7d0JBQzFELEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUN4QixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFD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TTtZQUVMLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxLQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7UUFDRCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3pCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcblxuaW1wb3J0IHsgZHJhd0ltYWdlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxcIlxuLy8gaW1wb3J0IHNoYXJlIGZyb20gJy4uLy4uL2NvbW1vbi9zaGFyZSdcblxuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuXG5QYWdlKHtcbiAgLy8gLi4uc2hhcmUsXG4gIGRhdGE6IHtcbiAgICByb2xlOiAnJyxcbiAgICByb2xlczogW1xuICAgICAgeyBuYW1lOiAn5Lqn5ZOB56CU5Y+R77yI5Lqn5ZOBIOaKgOacryDnoJTlj5EgVUnnrYnvvIknLCB2YWx1ZTogJ2RldicgfSxcbiAgICAgIHsgbmFtZTogJ+W4guWcuuaOqOW5v++8iOi/kOiQpSDluILlnLog5ZOB54mMIOiKgueCuSDlqpLkvZPnrYnvvIknLCB2YWx1ZTogJ3Byb21vdGUnIH0sXG4gICAgICB7IG5hbWU6ICfln7rph5HnrqHnkIYnLCB2YWx1ZTogJ2Z1bmQnIH0sXG4gICAgICB7IG5hbWU6ICfkuJPlrrbpob7pl64nLCB2YWx1ZTogJ3Byb2YnIH1cbiAgICBdLFxuICAgIHNlbGVjdGVkSW1hZ2U6ICcnLFxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuICAgIHNhdmVFbmFibGVkOiB0cnVlXG4gIH0sXG4gIG9uUm9sZUNoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoeyByb2xlOiBlLmRldGFpbC52YWx1ZSB9KVxuICB9LFxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgfSlcbiAgfSxcbiAgY2hlY2tTYXZlQXV0aChzZXR0aW5nOiBhbnkpIHtcbiAgICBpZiAoc2V0dGluZy5hdXRoU2V0dGluZ1snc2NvcGUud3JpdGVQaG90b3NBbGJ1bSddID09PSBmYWxzZSkge1xuICAgICAgaWYgKHRoaXMuZGF0YS5zYXZlRW5hYmxlZCkge1xuICAgICAgICB0aGlzLnNldERhdGEoeyBzYXZlRW5hYmxlZDogZmFsc2UgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLmRhdGEuc2F2ZUVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgc2F2ZUVuYWJsZWQ6IHRydWUgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG9uU2VsZWN0UGhvdG8oKSB7XG4gICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgY291bnQ6IDEsXG4gICAgICBzaXplVHlwZTogWydjb21wcmVzc2VkJ10sXG4gICAgICBzdWNjZXNzOiAoe3RlbXBGaWxlUGF0aHN9KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgc2VsZWN0ZWRJbWFnZTogdGVtcEZpbGVQYXRoc1swXVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIG9uT3BlbmVkU2V0dGluZyhyZXM6IGFueSkge1xuICAgIHRoaXMuY2hlY2tTYXZlQXV0aChyZXMuZGV0YWlsKVxuICB9LFxuICBzYXZlQXZhdGFyKCkge1xuICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgLnNlbGVjdCgnI2NhbnZhcycpXG4gICAgICAubm9kZSgpXG4gICAgICAuZXhlYyhhc3luYyByZXMgPT4ge1xuICAgICAgICBjb25zdCBpbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKVxuICAgICAgICBjb25zdCBjYW52YXMgPSByZXNbMF0ubm9kZVxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBjdHguc2NhbGUoMSwgMSlcbiAgICAgICAgY29uc3QgdyA9IDUxMlxuICAgICAgICBjYW52YXMud2lkdGggPSB3XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZidcbiAgICAgICAgY3R4LnNhdmUoKVxuICAgICAgICAvLyDnmb3ovrnlrr3luqZcbiAgICAgICAgY29uc3QgYm9yZGVyVyA9IDMyXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IDMyXG4gICAgICAgIC8vIOeZveW6lVxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdywgdylcbiAgICAgICAgLy8g55m96L656KOB5Ymq5Yy65Z+fXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjb25zdCBiMSA9IFtib3JkZXJXLCBib3JkZXJXICsgcmFkaXVzXVxuICAgICAgICBjb25zdCBiMiA9IFtib3JkZXJXLCB3IC0gYm9yZGVyVyAtIHJhZGl1c11cbiAgICAgICAgY29uc3QgYjMgPSBbYm9yZGVyVyArIHJhZGl1cywgdyAtIGJvcmRlclddXG4gICAgICAgIGNvbnN0IGI0ID0gW3cgLSBib3JkZXJXIC0gcmFkaXVzLCB3IC0gYm9yZGVyV11cbiAgICAgICAgY29uc3QgYjUgPSBbdyAtIGJvcmRlclcsIHcgLSBib3JkZXJXIC0gcmFkaXVzXVxuICAgICAgICBjb25zdCBiNiA9IFt3IC0gYm9yZGVyVywgYm9yZGVyVyArIHJhZGl1c11cbiAgICAgICAgY29uc3QgYjcgPSBbdyAtIGJvcmRlclcgLSByYWRpdXMsIGJvcmRlclddXG4gICAgICAgIGNvbnN0IGI4ID0gW2JvcmRlclcgKyByYWRpdXMsIGJvcmRlclddXG4gICAgICAgIGN0eC5tb3ZlVG8oYjFbMF0sIGIxWzFdKVxuICAgICAgICBjdHgubGluZVRvKGIyWzBdLCBiMlsxXSlcbiAgICAgICAgY3R4LmFyY1RvKGIyWzBdLCBiMlsxXSArIHJhZGl1cywgYjNbMF0sIGIzWzFdLCByYWRpdXMpXG4gICAgICAgIGN0eC5saW5lVG8oYjRbMF0sIGI0WzFdKVxuICAgICAgICBjdHguYXJjVG8oYjRbMF0gKyByYWRpdXMgLSAyLCBiNFsxXSwgYjVbMF0sIGI1WzFdLCByYWRpdXMpXG4gICAgICAgIGN0eC5saW5lVG8oYjZbMF0sIGI2WzFdKVxuICAgICAgICBjdHguYXJjVG8oYjZbMF0sIGI2WzFdIC0gcmFkaXVzLCBiN1swXSwgYjdbMV0sIHJhZGl1cylcbiAgICAgICAgY3R4LmxpbmVUbyhiOFswXSwgYjhbMV0pXG4gICAgICAgIGN0eC5hcmNUbyhiOFswXSAtIHJhZGl1cywgYjhbMV0sIGIxWzBdLCBiMVsxXSwgcmFkaXVzKVxuICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICAgICAgY3R4LmNsaXAoKVxuXG4gICAgICAgIC8vIOWktOWDj1xuICAgICAgICBhd2FpdCBkcmF3SW1hZ2UoY2FudmFzLCBjdHgsIHRoaXMuZGF0YS5zZWxlY3RlZEltYWdlIHx8IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvIS5hdmF0YXJVcmwsIGJvcmRlclcsIGJvcmRlclcsIHcgLSAyICogYm9yZGVyVywgdyAtIDIgKiBib3JkZXJXKVxuXG4gICAgICAgIGN0eC5yZXN0b3JlKClcbiAgICAgICAgLy8g6KeS5qCHXG4gICAgICAgIGNvbnN0IGJhZGdlUmFkaXVzID0gNzJcbiAgICAgICAgY29uc3QgYmFkZ2VCb3JkZXIgPSAxNlxuICAgICAgICBjb25zdCBiYWRnZUNlbnRlciA9IHcgLSBib3JkZXJXIC0gYmFkZ2VSYWRpdXNcbiAgICAgICAgLy8g5Y+z5LiL6KeS5aGr55m9XG4gICAgICAgIGN0eC5maWxsUmVjdChiYWRnZUNlbnRlciwgYmFkZ2VDZW50ZXIsIGJhZGdlUmFkaXVzICsgYmFkZ2VCb3JkZXIgKyBib3JkZXJXLCBiYWRnZVJhZGl1cyArIGJhZGdlQm9yZGVyICsgYm9yZGVyVylcbiAgICAgICAgLy8g6KeS5qCH5aSW5Zu0XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHguYXJjKGJhZGdlQ2VudGVyLCBiYWRnZUNlbnRlciwgYmFkZ2VSYWRpdXMgKyBiYWRnZUJvcmRlciwgMCwgMiAqIE1hdGguUEkpXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKVxuICAgICAgICBjdHguZmlsbCgpXG4gICAgICAgIC8vIOinkuagh1xuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmFyYyhiYWRnZUNlbnRlciwgYmFkZ2VDZW50ZXIsIGJhZGdlUmFkaXVzLCAwLCAyICogTWF0aC5QSSlcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgICAgIGN0eC5jbGlwKClcbiAgICAgICAgYXdhaXQgZHJhd0ltYWdlKGNhbnZhcywgY3R4LCBgLi4vLi4vYXNzZXRzL2JhZGdlLSR7dGhpcy5kYXRhLnJvbGV9LnBuZ2AsIHcgLSBib3JkZXJXIC0gMiAqIGJhZGdlUmFkaXVzLCB3IC0gYm9yZGVyVyAtIDIgKiBiYWRnZVJhZGl1cywgMiAqIGJhZGdlUmFkaXVzLCAyICogYmFkZ2VSYWRpdXMpXG4gICAgICAgIHd4LmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY2FudmFzLFxuICAgICAgICAgIGRlc3RXaWR0aDogaW5mby53aW5kb3dXaWR0aCAqIGluZm8ucGl4ZWxSYXRpbyxcbiAgICAgICAgICBkZXN0SGVpZ2h0OiBpbmZvLndpbmRvd1dpZHRoICogaW5mby5waXhlbFJhdGlvLFxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgIHd4LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xuICAgICAgICAgICAgICBmaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aCxcbiAgICAgICAgICAgICAgc3VjY2VzcygpIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+WktOWDj+W3suS/neWtmCcsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyci5lcnJNc2cgPT09ICdzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtOmZhaWwgYXV0aCBkZW55Jykge1xuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfor7fmiZPlvIDorr7nva7lhYHorrjorr/pl67nm7jlhozmnYPpmZAnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfkv53lrZjlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgIHNhdmVFbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfnlJ/miJDlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmNoZWNrU2F2ZUF1dGgocmVzKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG59KVxuIl19