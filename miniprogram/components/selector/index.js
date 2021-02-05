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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBQ1IsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLGNBQWM7S0FDL0I7SUFDRCxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNuQyxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsV0FBVyxZQUFDLENBQU07WUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvcmFkaW8vaW5kZXguanNcbkNvbXBvbmVudCh7XG4gIG9wdGlvbnM6IHtcbiAgICBzdHlsZUlzb2xhdGlvbjogJ2FwcGx5LXNoYXJlZCdcbiAgfSxcbiAgZXh0ZXJuYWxDbGFzc2VzOiBbJ3NlbGVjdG9yLWNsYXNzJ10sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBsaXN0OiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHZhbHVlOiBbXVxuICAgIH0sXG4gICAgdmFsdWU6IFN0cmluZ1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcmFkaW9DaGFuZ2UoZTogYW55KSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2hhbmdlJywgZS5kZXRhaWwpXG4gICAgfVxuICB9XG59KVxuIl19