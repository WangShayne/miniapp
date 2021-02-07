"use strict";
Component({
    options: {
        styleIsolation: 'apply-shared'
    },
    externalClasses: ['selector-class'],
    properties: {
        list: {
            type: Array,
            value: []
        },
        value: String
    },
    methods: {
        radioChange: function (e) {
            this.triggerEvent('change', e.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBQ1IsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLGNBQWM7S0FDL0I7SUFDRCxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNuQyxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsV0FBVyxFQUFYLFVBQVksQ0FBTTtZQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkMsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9yYWRpby9pbmRleC5qc1xuQ29tcG9uZW50KHtcbiAgb3B0aW9uczoge1xuICAgIHN0eWxlSXNvbGF0aW9uOiAnYXBwbHktc2hhcmVkJ1xuICB9LFxuICBleHRlcm5hbENsYXNzZXM6IFsnc2VsZWN0b3ItY2xhc3MnXSxcbiAgcHJvcGVydGllczoge1xuICAgIGxpc3Q6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgdmFsdWU6IFtdXG4gICAgfSxcbiAgICB2YWx1ZTogU3RyaW5nXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICByYWRpb0NoYW5nZShlOiBhbnkpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjaGFuZ2UnLCBlLmRldGFpbClcbiAgICB9XG4gIH1cbn0pXG4iXX0=