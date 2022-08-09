"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    onShareAppMessage: function () {
        var pages = getCurrentPages();
        var path = pages[pages.length - 1].route;
        return {
            title: 'Comunion头像助手',
            path: path,
            imageUrl: ''
        };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaGFyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtCQUFlO0lBQ2IsaUJBQWlCO1FBQ2YsSUFBTSxLQUFLLEdBQUcsZUFBZSxFQUFFLENBQUE7UUFDL0IsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1FBQzFDLE9BQU87WUFDTCxLQUFLLEVBQUUsY0FBYztZQUNyQixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxFQUFFO1NBQ2IsQ0FBQTtJQUNILENBQUM7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcbiAgICBjb25zdCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpXG4gICAgY29uc3QgcGF0aCA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdLnJvdXRlXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnQ29tdW5pb27lpLTlg4/liqnmiYsnLFxuICAgICAgcGF0aDogcGF0aCxcbiAgICAgIGltYWdlVXJsOiAnJ1xuICAgIH1cbiAgfVxufSJdfQ==