"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var share_1 = require("../../common/share");
var app = getApp();
var defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
Page(__assign(__assign({}, share_1.default), { data: {
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
    }, onRoleChange: function (e) {
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
    onChooseAvatar: function (e) {
        var avatarUrl = e.detail.avatarUrl;
        console.log(e.detail);
        this.setData({
            avatarUrl: avatarUrl,
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
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
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
                        return [4, util_1.drawImage(canvas, ctx, this.data.selectedImage || ((_a = app.globalData.userInfo) === null || _a === void 0 ? void 0 : _a.avatarUrl) || this.data.avatarUrl, borderW, borderW, w - 2 * borderW, w - 2 * borderW)];
                    case 1:
                        _b.sent();
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
                        _b.sent();
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
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEseUNBQTRDO0FBQzVDLDRDQUFzQztBQUd0QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUNoQyxJQUFNLGdCQUFnQixHQUFHLHdIQUF3SCxDQUFBO0FBRWpKLElBQUksdUJBQ0MsZUFBSyxLQUNSLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFO1lBQ0wsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtZQUM1QyxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ25ELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1NBQ2hDO1FBQ0QsYUFBYSxFQUFFLEVBQUU7UUFDakIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixnQkFBZ0IsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQjtRQUNqRCxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxXQUFXLEVBQUUsSUFBSTtRQUNqQixTQUFTLEVBQUUsZ0JBQWdCO0tBQzVCLEVBQ0QsWUFBWSxFQUFaLFVBQWEsQ0FBTTtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQ0QsV0FBVyxFQUFYLFVBQVksQ0FBTTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMs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QUUsQ0FBQyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQTt3QkFDcEMsRUFBRSxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUE7d0JBQ3BDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQTt3QkFDeEMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFBO3dCQUN4QyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQTt3QkFDcEMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7d0JBQ3BDLEVBQUUsR0FBRyxDQUFDLE9BQU8sR0FBRyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUE7d0JBQ3RDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUN4QixHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDeEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO3dCQUN0RCxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDeEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTt3QkFDMUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ3hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTt3QkFDdEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ3hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQTt3QkFDdEQsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFBO3dCQUNmLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTt3QkFHVixXQUFNLGdCQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsV0FBSSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsMENBQUUsU0FBUyxDQUFBLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFBOzt3QkFBdEssU0FBc0ssQ0FBQTt3QkFFdEss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QUM7SUFDRCxNQUFNO1FBQU4saUJBZ0NDO1FBL0JDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUEsR0FBRztnQkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7b0JBQ3RCLFdBQVcsRUFBRSxJQUFJO2lCQUNsQixDQUFDLENBQUE7WUFDSixDQUFDLENBQUE7U0FDRjthQUFNO1lBRUwsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHO29CQUNWLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7b0JBQ3RDLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO3dCQUN0QixXQUFXLEVBQUUsSUFBSTtxQkFDbEIsQ0FBQyxDQUFBO2dCQUNKLENBQUM7YUFDRixDQUFDLENBQUE7U0FDSDtRQUNELEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNYLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDekIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUMsSUFDRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcblxuaW1wb3J0IHsgZHJhd0ltYWdlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3V0aWxcIlxuaW1wb3J0IHNoYXJlIGZyb20gJy4uLy4uL2NvbW1vbi9zaGFyZSdcblxuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuY29uc3QgZGVmYXVsdEF2YXRhclVybCA9ICdodHRwczovL21tYml6LnFwaWMuY24vbW1iaXovaWNUZGJxV05Pd05SbmE0MkZJMjQyTGNpYTA3alFvZGQyRkpHSVlRZkcwTEFKR0Z4TTRGYm5RUDZ5Zk14QmdKMEYzWVJxSkNKMWFQQUsyZFFhZ2R1c0JaZy8wJ1xuXG5QYWdlKHtcbiAgLi4uc2hhcmUsXG4gIGRhdGE6IHtcbiAgICByb2xlOiAnJyxcbiAgICByb2xlczogW1xuICAgICAgeyBuYW1lOiAn5Lqn5ZOB56CU5Y+R77yI5Lqn5ZOBIOaKgOacryDnoJTlj5EgVUnnrYnvvIknLCB2YWx1ZTogJ2RldicgfSxcbiAgICAgIHsgbmFtZTogJ+W4guWcuuaOqOW5v++8iOi/kOiQpSDluILlnLog5ZOB54mMIOiKgueCuSDlqpLkvZPnrYnvvIknLCB2YWx1ZTogJ3Byb21vdGUnIH0sXG4gICAgICB7IG5hbWU6ICfln7rph5HnrqHnkIYnLCB2YWx1ZTogJ2Z1bmQnIH0sXG4gICAgICB7IG5hbWU6ICfkuJPlrrbpob7pl64nLCB2YWx1ZTogJ3Byb2YnIH1cbiAgICBdLFxuICAgIHNlbGVjdGVkSW1hZ2U6ICcnLFxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgaXNIaWdoU0RLVmVyc2lvbjogYXBwLmdsb2JhbERhdGEuaXNIaWdoU0RLVmVyc2lvbixcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgc2F2ZUVuYWJsZWQ6IHRydWUsXG4gICAgYXZhdGFyVXJsOiBkZWZhdWx0QXZhdGFyVXJsXG4gIH0sXG4gIG9uUm9sZUNoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoeyByb2xlOiBlLmRldGFpbC52YWx1ZSB9KVxuICB9LFxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgfSlcbiAgfSxcbiAgb25DaG9vc2VBdmF0YXIoZTogYW55KSB7XG4gICAgY29uc3QgeyBhdmF0YXJVcmwgfSA9IGUuZGV0YWlsXG4gICAgY29uc29sZS5sb2coZS5kZXRhaWwpXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGF2YXRhclVybCxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgIH0pXG4gIH0sXG4gIGNoZWNrU2F2ZUF1dGgoc2V0dGluZzogYW55KSB7XG4gICAgaWYgKHNldHRpbmcuYXV0aFNldHRpbmdbJ3Njb3BlLndyaXRlUGhvdG9zQWxidW0nXSA9PT0gZmFsc2UpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEuc2F2ZUVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgc2F2ZUVuYWJsZWQ6IGZhbHNlIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5kYXRhLnNhdmVFbmFibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IHNhdmVFbmFibGVkOiB0cnVlIH0pXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBvblNlbGVjdFBob3RvKCkge1xuICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgIGNvdW50OiAxLFxuICAgICAgc2l6ZVR5cGU6IFsnY29tcHJlc3NlZCddLFxuICAgICAgc3VjY2VzczogKHsgdGVtcEZpbGVQYXRocyB9KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgc2VsZWN0ZWRJbWFnZTogdGVtcEZpbGVQYXRoc1swXVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIG9uT3BlbmVkU2V0dGluZyhyZXM6IGFueSkge1xuICAgIHRoaXMuY2hlY2tTYXZlQXV0aChyZXMuZGV0YWlsKVxuICB9LFxuICBzYXZlQXZhdGFyKCkge1xuICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgLnNlbGVjdCgnI2NhbnZhcycpXG4gICAgICAubm9kZSgpXG4gICAgICAuZXhlYyhhc3luYyByZXMgPT4ge1xuICAgICAgICBjb25zdCBpbmZvID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKVxuICAgICAgICBjb25zdCBjYW52YXMgPSByZXNbMF0ubm9kZVxuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBjdHguc2NhbGUoMSwgMSlcbiAgICAgICAgY29uc3QgdyA9IDUxMlxuICAgICAgICBjYW52YXMud2lkdGggPSB3XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZidcbiAgICAgICAgY3R4LnNhdmUoKVxuICAgICAgICAvLyDnmb3ovrnlrr3luqZcbiAgICAgICAgY29uc3QgYm9yZGVyVyA9IDMyXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IDMyXG4gICAgICAgIC8vIOeZveW6lVxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdywgdylcbiAgICAgICAgLy8g55m96L656KOB5Ymq5Yy65Z+fXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjb25zdCBiMSA9IFtib3JkZXJXLCBib3JkZXJXICsgcmFkaXVzXVxuICAgICAgICBjb25zdCBiMiA9IFtib3JkZXJXLCB3IC0gYm9yZGVyVyAtIHJhZGl1c11cbiAgICAgICAgY29uc3QgYjMgPSBbYm9yZGVyVyArIHJhZGl1cywgdyAtIGJvcmRlclddXG4gICAgICAgIGNvbnN0IGI0ID0gW3cgLSBib3JkZXJXIC0gcmFkaXVzLCB3IC0gYm9yZGVyV11cbiAgICAgICAgY29uc3QgYjUgPSBbdyAtIGJvcmRlclcsIHcgLSBib3JkZXJXIC0gcmFkaXVzXVxuICAgICAgICBjb25zdCBiNiA9IFt3IC0gYm9yZGVyVywgYm9yZGVyVyArIHJhZGl1c11cbiAgICAgICAgY29uc3QgYjcgPSBbdyAtIGJvcmRlclcgLSByYWRpdXMsIGJvcmRlclddXG4gICAgICAgIGNvbnN0IGI4ID0gW2JvcmRlclcgKyByYWRpdXMsIGJvcmRlclddXG4gICAgICAgIGN0eC5tb3ZlVG8oYjFbMF0sIGIxWzFdKVxuICAgICAgICBjdHgubGluZVRvKGIyWzBdLCBiMlsxXSlcbiAgICAgICAgY3R4LmFyY1RvKGIyWzBdLCBiMlsxXSArIHJhZGl1cywgYjNbMF0sIGIzWzFdLCByYWRpdXMpXG4gICAgICAgIGN0eC5saW5lVG8oYjRbMF0sIGI0WzFdKVxuICAgICAgICBjdHguYXJjVG8oYjRbMF0gKyByYWRpdXMgLSAyLCBiNFsxXSwgYjVbMF0sIGI1WzFdLCByYWRpdXMpXG4gICAgICAgIGN0eC5saW5lVG8oYjZbMF0sIGI2WzFdKVxuICAgICAgICBjdHguYXJjVG8oYjZbMF0sIGI2WzFdIC0gcmFkaXVzLCBiN1swXSwgYjdbMV0sIHJhZGl1cylcbiAgICAgICAgY3R4LmxpbmVUbyhiOFswXSwgYjhbMV0pXG4gICAgICAgIGN0eC5hcmNUbyhiOFswXSAtIHJhZGl1cywgYjhbMV0sIGIxWzBdLCBiMVsxXSwgcmFkaXVzKVxuICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICAgICAgY3R4LmNsaXAoKVxuXG4gICAgICAgIC8vIOWktOWDj1xuICAgICAgICBhd2FpdCBkcmF3SW1hZ2UoY2FudmFzLCBjdHgsIHRoaXMuZGF0YS5zZWxlY3RlZEltYWdlIHx8IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvPy5hdmF0YXJVcmwgfHwgdGhpcy5kYXRhLmF2YXRhclVybCwgYm9yZGVyVywgYm9yZGVyVywgdyAtIDIgKiBib3JkZXJXLCB3IC0gMiAqIGJvcmRlclcpXG5cbiAgICAgICAgY3R4LnJlc3RvcmUoKVxuICAgICAgICAvLyDop5LmoIdcbiAgICAgICAgY29uc3QgYmFkZ2VSYWRpdXMgPSA3MlxuICAgICAgICBjb25zdCBiYWRnZUJvcmRlciA9IDE2XG4gICAgICAgIGNvbnN0IGJhZGdlQ2VudGVyID0gdyAtIGJvcmRlclcgLSBiYWRnZVJhZGl1c1xuICAgICAgICAvLyDlj7PkuIvop5Lloavnmb1cbiAgICAgICAgY3R4LmZpbGxSZWN0KGJhZGdlQ2VudGVyLCBiYWRnZUNlbnRlciwgYmFkZ2VSYWRpdXMgKyBiYWRnZUJvcmRlciArIGJvcmRlclcsIGJhZGdlUmFkaXVzICsgYmFkZ2VCb3JkZXIgKyBib3JkZXJXKVxuICAgICAgICAvLyDop5LmoIflpJblm7RcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5hcmMoYmFkZ2VDZW50ZXIsIGJhZGdlQ2VudGVyLCBiYWRnZVJhZGl1cyArIGJhZGdlQm9yZGVyLCAwLCAyICogTWF0aC5QSSlcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgICAgIGN0eC5maWxsKClcbiAgICAgICAgLy8g6KeS5qCHXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHguYXJjKGJhZGdlQ2VudGVyLCBiYWRnZUNlbnRlciwgYmFkZ2VSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICAgICAgICBjdHguY2xvc2VQYXRoKClcbiAgICAgICAgY3R4LmNsaXAoKVxuICAgICAgICBhd2FpdCBkcmF3SW1hZ2UoY2FudmFzLCBjdHgsIGAuLi8uLi9hc3NldHMvYmFkZ2UtJHt0aGlzLmRhdGEucm9sZX0ucG5nYCwgdyAtIGJvcmRlclcgLSAyICogYmFkZ2VSYWRpdXMsIHcgLSBib3JkZXJXIC0gMiAqIGJhZGdlUmFkaXVzLCAyICogYmFkZ2VSYWRpdXMsIDIgKiBiYWRnZVJhZGl1cylcbiAgICAgICAgd3guY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBjYW52YXMsXG4gICAgICAgICAgZGVzdFdpZHRoOiBpbmZvLndpbmRvd1dpZHRoICogaW5mby5waXhlbFJhdGlvLFxuICAgICAgICAgIGRlc3RIZWlnaHQ6IGluZm8ud2luZG93V2lkdGggKiBpbmZvLnBpeGVsUmF0aW8sXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgd3guc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XG4gICAgICAgICAgICAgIGZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoLFxuICAgICAgICAgICAgICBzdWNjZXNzKCkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn5aS05YOP5bey5L+d5a2YJywgaWNvbjogJ3N1Y2Nlc3MnIH0pXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmVyck1zZyA9PT0gJ3NhdmVJbWFnZVRvUGhvdG9zQWxidW06ZmFpbCBhdXRoIGRlbnknKSB7XG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+ivt+aJk+W8gOiuvue9ruWFgeiuuOiuv+mXruebuOWGjOadg+mZkCcsIGljb246ICdub25lJyB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+S/neWtmOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgc2F2ZUVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+eUn+aIkOWksei0pScsIGljb246ICdub25lJyB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gcmVzID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG4gICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuY2hlY2tTYXZlQXV0aChyZXMpXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbn0pXG4iXX0=