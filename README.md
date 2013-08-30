#jquery.selectjs

## Usage:

```html
<script src="js/jquery.js"></script>
<!-- actual -->
<script src="js/jquery.actual.min.js"></script>
```

Define script:

```javascript
$(document).ready(function(){
  $('.custom-tooltip-js').tooltip(); //Запуск срипта на class="custom-tooltip-js"
});
```
По умолчанию тултип выводится с правой стороны.

Define script with options:

```javascript
$(document).ready(function(){
  $('.custom-tooltip-js').tooltip({
    tooltipSide: "bottom"
  });
});
```
В настройках можно прописать сторону с которой будет выводится сообщение. Возможны такие значения:
- top
- right
- bottom
- left (по умолчанию)

Define default html

```html
<div class="tooltip-wrapper custom-class">
    <!--контент на который реагирует подстказка (Пример: input) -->
    <div class="custom-tooltip custom-tooltip-js">
       <!--Подсказка--> 
    </div>  
</div>
```

Function selectjs

```javascript
// tooltip
(function($){
  tooltip = function() {
    this._init = function(element, options) {
      var defaults = {
        tooltipElement: $(element),
        tooltipSide: "right"
      },
      settings = $.extend(defaults, options); 
      settings.tooltipElement.each(function(i){
        var tooltipElementHeight = $(this).actual( "outerHeight", { absolute : true } ),
          tooltipWrapperHeight = $(this).parent(".tooltip-wrapper").actual( "outerHeight", { absolute : true } ),
          tooltipElementWidth = $(this).actual( "outerWidth", { absolute : true } ),
          tooltipWrapperWidth = $(this).parent(".tooltip-wrapper").actual( "outerWidth", { absolute : true } );
        if (settings.tooltipSide == "left") {
          $(this).addClass('tooltip-left').css({top:-(tooltipElementHeight/2 - tooltipWrapperHeight/2)});
        }
        else if (settings.tooltipSide == "right"){
          $(this).addClass('tooltip-right').css({top:-(tooltipElementHeight/2 - tooltipWrapperHeight/2)});
        }
        else if (settings.tooltipSide == "top"){
          $(this).addClass('tooltip-top').css({left: -((tooltipElementWidth - tooltipWrapperWidth)/2)});
        }
        else if (settings.tooltipSide == "bottom"){
          $(this).addClass('tooltip-bottom').css({left: -((tooltipElementWidth - tooltipWrapperWidth)/2)});         
        }
      });     
    };
  };
  // Launch plugin
  $.fn.tooltip = function( options ){
    return this.each(function(){
      $( this ).data( "tooltip", new tooltip()._init( this, options ) );
    });
  };
})(jQuery);
// end tooltip
```

Default css
```css
/*tooltip style*/
.tooltip-wrapper{
  position: relative;
  display: inline-block;
  vertical-align: top;
}
.custom-tooltip{
  position: absolute;
  width: 150px;
  /*white-space: nowrap;*/
  z-index: 1000;
}
.custom-tooltip:before{
  content: '';
  position: absolute;
  border: #border-size solid transparent;
}
.custom-tooltip.tooltip-left{
  right: 100%;
  margin-right: #border-size;
}
.custom-tooltip.tooltip-left:before{
  left: 100%;
  border-left-color: #color;
  top: 50%;
  margin-top: -(#border-size);
}
.custom-tooltip.tooltip-right{
  left: 100%;
  margin-left: #border-size;
}
.custom-tooltip.tooltip-right:before{
  right: 100%;
  border-right-color: #color;
  top: 50%;
  margin-top: -(#border-size);
}
.custom-tooltip.tooltip-top{
  bottom: 100%;
  margin-bottom: #border-size;
}
.custom-tooltip.tooltip-top:before{
  top: 100%;
  left: 50%;
  margin-left: -(#border-size);
  border-top-color: #color;
}
.custom-tooltip.tooltip-bottom{
  top: 100%;
  margin-top: #border-size;
}
.custom-tooltip.tooltip-bottom:before{
  bottom: 100%;
  left: 50%;
  margin-left: -(#border-size);
  border-bottom-color: #color;
}
/*end tooltip style*/
```

