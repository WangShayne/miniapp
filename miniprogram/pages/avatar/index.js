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
            var canvas, ctx, w, borderW, radius, b1, b2, b3, b4, b5, b6, b7, b8, badgeRadius, badgeBorder, badgeCenter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        canvas = res[0].node;
                        ctx = canvas.getContext('2d');
                        ctx.scale(1, 1);
                        w = 512;
                        canvas.width = w;
                        canvas.height = w;
                        ctx.fillStyle = '#ffffff';
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
                        ctx.arcTo(b4[0] + radius, b4[1], b5[0], b5[1], radius);
                        ctx.lineTo(b6[0], b6[1]);
                        ctx.arcTo(b6[0], b6[1] - radius, b7[0], b7[1], radius);
                        ctx.lineTo(b8[0], b8[1]);
                        ctx.arcTo(b8[0] - radius, b8[1], b1[0], b1[1], radius);
                        ctx.closePath();
                        ctx.clip();
                        ctx.save();
                        return [4, util_1.drawImage(canvas, ctx, this.data.selectedImage || app.globalData.userInfo.avatarUrl, borderW, borderW, w - 2 * borderW, w - 2 * borderW)];
                    case 1:
                        _a.sent();
                        badgeRadius = 72;
                        badgeBorder = 16;
                        badgeCenter = w - borderW - badgeRadius;
                        ctx.beginPath();
                        ctx.arc(badgeCenter, badgeCenter, badgeRadius + badgeBorder, 0, 2 * Math.PI);
                        ctx.rect(badgeCenter, badgeCenter, badgeRadius + badgeBorder, badgeRadius + badgeBorder);
                        ctx.fill();
                        ctx.closePath();
                        ctx.restore();
                        ctx.beginPath();
                        ctx.arc(badgeCenter, badgeCenter, badgeRadius, 0, 2 * Math.PI);
                        ctx.clip();
                        return [4, util_1.drawImage(canvas, ctx, "../../assets/badge-" + this.data.role + ".png", w - borderW - 2 * badgeRadius, w - borderW - 2 * badgeRadius, 2 * badgeRadius, 2 * badgeRadius)];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHlDQUE0QztBQUc1QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNMLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7WUFDNUMsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUNuRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtTQUNoQztRQUNELGFBQWEsRUFBRSxFQUFFO1FBQ2pCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsV0FBVyxFQUFFLEtBQUs7S0FDbkI7SUFDRCxZQUFZLEVBQVosVUFBYSxDQUFNO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsYUFBYTtRQUFiLGlCQVVDO1FBVEMsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLEtBQUssRUFBRSxDQUFDO1lBQ1IsUUFBUSxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3hCLE9BQU8sRUFBRSxVQUFDLEVBQWU7b0JBQWQsYUFBYSxtQkFBQTtnQkFDdEIsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztpQkFDaEMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxVQUFVLEVBQVY7UUFBQSxpQkFnRkM7UUEvRUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFO2FBQ3JCLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDakIsSUFBSSxFQUFFO2FBQ04sSUFBSSxDQUFDLFVBQU0sR0FBRzs7Ozs7d0JBQ1AsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7d0JBQ3BCLEdBQUcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUNuQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTt3QkFDVCxDQUFDLEdBQUcsR0FBRyxDQUFBO3dCQUNiLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO3dCQUNoQixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTt3QkFDakIsR0FBRyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7d0JBRW5CLE9BQU8sR0FBRyxFQUFFLENBQUE7d0JBQ1osTUFBTSxHQUFHLEVBQUUsQ0FBQTt3QkFFakIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTt3QkFFeEIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFBO3dCQUNULEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUE7d0JBQ2hDLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFBO3dCQUNwQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQTt3QkFDcEMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFBO3dCQUN4QyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUE7d0JBQ3hDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLEVBQUUsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFBO3dCQUNwQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTt3QkFDcEMsRUFBRSxHQUFHLENBQUMsT0FBTyxHQUFHLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTt3QkFDdEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ3hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUN4QixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7d0JBQ3RELEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUN4QixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7d0JBQ3RELEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUN4QixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7d0JBQ3RELEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUN4QixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUE7d0JBQ3RELEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQTt3QkFDZixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7d0JBQ1YsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBO3dCQUdWLFdBQU0sZ0JBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsR0FB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QUMsV0FBVyxDQUFDO2dCQUNiLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0JBQ1YsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTtvQkFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7d0JBQ3RCLFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUFDLENBQUE7Z0JBQ0osQ0FBQzthQUNGLENBQUMsQ0FBQTtTQUNIO1FBQ0QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1gsSUFBSSxHQUFHLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLEVBQUU7b0JBQzdDLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtpQkFDcEM7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG5cbmltcG9ydCB7IGRyYXdJbWFnZSB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsXCJcblxuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHJvbGU6ICcnLFxuICAgIHJvbGVzOiBbXG4gICAgICB7IG5hbWU6ICfkuqflk4HnoJTlj5HvvIjkuqflk4Eg5oqA5pyvIOeglOWPkSBVSeetie+8iScsIHZhbHVlOiAnZGV2JyB9LFxuICAgICAgeyBuYW1lOiAn5biC5Zy65o6o5bm/77yI6L+Q6JClIOW4guWcuiDlk4HniYwg6IqC54K5IOWqkuS9k+etie+8iScsIHZhbHVlOiAncHJvbW90ZScgfSxcbiAgICAgIHsgbmFtZTogJ+WfuumHkeeuoeeQhicsIHZhbHVlOiAnZnVuZCcgfSxcbiAgICAgIHsgbmFtZTogJ+S4k+WutumhvumXricsIHZhbHVlOiAncHJvZicgfVxuICAgIF0sXG4gICAgc2VsZWN0ZWRJbWFnZTogJycsXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgc2F2ZUVuYWJsZWQ6IGZhbHNlXG4gIH0sXG4gIG9uUm9sZUNoYW5nZShlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoeyByb2xlOiBlLmRldGFpbC52YWx1ZSB9KVxuICB9LFxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgfSlcbiAgfSxcbiAgb25TZWxlY3RQaG90bygpIHtcbiAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICBjb3VudDogMSxcbiAgICAgIHNpemVUeXBlOiBbJ2NvbXByZXNzZWQnXSxcbiAgICAgIHN1Y2Nlc3M6ICh7dGVtcEZpbGVQYXRoc30pID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBzZWxlY3RlZEltYWdlOiB0ZW1wRmlsZVBhdGhzWzBdXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgc2F2ZUF2YXRhcigpIHtcbiAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcbiAgICAgIC5zZWxlY3QoJyNjYW52YXMnKVxuICAgICAgLm5vZGUoKVxuICAgICAgLmV4ZWMoYXN5bmMgcmVzID0+IHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gcmVzWzBdLm5vZGVcbiAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgY3R4LnNjYWxlKDEsIDEpXG4gICAgICAgIGNvbnN0IHcgPSA1MTJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gd1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnXG4gICAgICAgIC8vIOeZvei+ueWuveW6plxuICAgICAgICBjb25zdCBib3JkZXJXID0gMzJcbiAgICAgICAgY29uc3QgcmFkaXVzID0gMzJcbiAgICAgICAgLy8g55m95bqVXG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB3LCB3KVxuICAgICAgICAvLyDnmb3ovrnoo4HliarljLrln59cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGNvbnN0IGIxID0gW2JvcmRlclcsIGJvcmRlclcgKyByYWRpdXNdXG4gICAgICAgIGNvbnN0IGIyID0gW2JvcmRlclcsIHcgLSBib3JkZXJXIC0gcmFkaXVzXVxuICAgICAgICBjb25zdCBiMyA9IFtib3JkZXJXICsgcmFkaXVzLCB3IC0gYm9yZGVyV11cbiAgICAgICAgY29uc3QgYjQgPSBbdyAtIGJvcmRlclcgLSByYWRpdXMsIHcgLSBib3JkZXJXXVxuICAgICAgICBjb25zdCBiNSA9IFt3IC0gYm9yZGVyVywgdyAtIGJvcmRlclcgLSByYWRpdXNdXG4gICAgICAgIGNvbnN0IGI2ID0gW3cgLSBib3JkZXJXLCBib3JkZXJXICsgcmFkaXVzXVxuICAgICAgICBjb25zdCBiNyA9IFt3IC0gYm9yZGVyVyAtIHJhZGl1cywgYm9yZGVyV11cbiAgICAgICAgY29uc3QgYjggPSBbYm9yZGVyVyArIHJhZGl1cywgYm9yZGVyV11cbiAgICAgICAgY3R4Lm1vdmVUbyhiMVswXSwgYjFbMV0pXG4gICAgICAgIGN0eC5saW5lVG8oYjJbMF0sIGIyWzFdKVxuICAgICAgICBjdHguYXJjVG8oYjJbMF0sIGIyWzFdICsgcmFkaXVzLCBiM1swXSwgYjNbMV0sIHJhZGl1cylcbiAgICAgICAgY3R4LmxpbmVUbyhiNFswXSwgYjRbMV0pXG4gICAgICAgIGN0eC5hcmNUbyhiNFswXSArIHJhZGl1cywgYjRbMV0sIGI1WzBdLCBiNVsxXSwgcmFkaXVzKVxuICAgICAgICBjdHgubGluZVRvKGI2WzBdLCBiNlsxXSlcbiAgICAgICAgY3R4LmFyY1RvKGI2WzBdLCBiNlsxXSAtIHJhZGl1cywgYjdbMF0sIGI3WzFdLCByYWRpdXMpXG4gICAgICAgIGN0eC5saW5lVG8oYjhbMF0sIGI4WzFdKVxuICAgICAgICBjdHguYXJjVG8oYjhbMF0gLSByYWRpdXMsIGI4WzFdLCBiMVswXSwgYjFbMV0sIHJhZGl1cylcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgICAgIGN0eC5jbGlwKClcbiAgICAgICAgY3R4LnNhdmUoKVxuXG4gICAgICAgIC8vIOWktOWDj1xuICAgICAgICBhd2FpdCBkcmF3SW1hZ2UoY2FudmFzLCBjdHgsIHRoaXMuZGF0YS5zZWxlY3RlZEltYWdlIHx8IGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvIS5hdmF0YXJVcmwsIGJvcmRlclcsIGJvcmRlclcsIHcgLSAyICogYm9yZGVyVywgdyAtIDIgKiBib3JkZXJXKVxuXG4gICAgICAgIC8vIOinkuagh1xuICAgICAgICBjb25zdCBiYWRnZVJhZGl1cyA9IDcyXG4gICAgICAgIGNvbnN0IGJhZGdlQm9yZGVyID0gMTZcbiAgICAgICAgY29uc3QgYmFkZ2VDZW50ZXIgPSB3IC0gYm9yZGVyVyAtIGJhZGdlUmFkaXVzXG4gICAgICAgIC8vIOinkuagh+WkluWbtFxuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmFyYyhiYWRnZUNlbnRlciwgYmFkZ2VDZW50ZXIsIGJhZGdlUmFkaXVzICsgYmFkZ2VCb3JkZXIsIDAsIDIgKiBNYXRoLlBJKVxuICAgICAgICAvLyDlj7PkuIvop5Lloavnmb1cbiAgICAgICAgY3R4LnJlY3QoYmFkZ2VDZW50ZXIsIGJhZGdlQ2VudGVyLCBiYWRnZVJhZGl1cyArIGJhZGdlQm9yZGVyLCBiYWRnZVJhZGl1cyArIGJhZGdlQm9yZGVyKVxuICAgICAgICBjdHguZmlsbCgpXG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKVxuICAgICAgICBjdHgucmVzdG9yZSgpXG4gICAgICAgIC8vIOinkuagh1xuICAgICAgICBjdHguYmVnaW5QYXRoKClcbiAgICAgICAgY3R4LmFyYyhiYWRnZUNlbnRlciwgYmFkZ2VDZW50ZXIsIGJhZGdlUmFkaXVzLCAwLCAyICogTWF0aC5QSSlcbiAgICAgICAgY3R4LmNsaXAoKVxuICAgICAgICBhd2FpdCBkcmF3SW1hZ2UoY2FudmFzLCBjdHgsIGAuLi8uLi9hc3NldHMvYmFkZ2UtJHt0aGlzLmRhdGEucm9sZX0ucG5nYCwgdyAtIGJvcmRlclcgLSAyICogYmFkZ2VSYWRpdXMsIHcgLSBib3JkZXJXIC0gMiAqIGJhZGdlUmFkaXVzLCAyICogYmFkZ2VSYWRpdXMsIDIgKiBiYWRnZVJhZGl1cylcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpXG4gICAgICAgIHd4LmNhbnZhc1RvVGVtcEZpbGVQYXRoKHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY2FudmFzLFxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgIHd4LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xuICAgICAgICAgICAgICBmaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aCxcbiAgICAgICAgICAgICAgc3VjY2VzcygpIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+WktOWDj+W3suS/neWtmCcsIGljb246ICdzdWNjZXNzJyB9KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmYWlsKCkge1xuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn5L+d5a2Y5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsKCkge1xuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHsgdGl0bGU6ICfnlJ/miJDlpLHotKUnLCBpY29uOiAnbm9uZScgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS53cml0ZVBob3Rvc0FsYnVtJ10pIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoeyBzYXZlRW5hYmxlZDogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSxcbn0pXG4iXX0=