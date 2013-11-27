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
  $('.tip-js').tooltip(); //Запуск срипта на class="tip-js"
});
```
По умолчанию тултип выводится с правой стороны.

Define script with options:

```javascript
$(document).ready(function(){
  $('.tip-js').tooltip({
    side: "bottom"
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
<input type="text" class="field tip tip-js" data-message="Подсказка">
```

Function selectjs

```javascript
// tooltip
(function($){
  tooltip = function() {

    this._init = function(element, options) {

      var defaults = {
        el: $(element),
        side: "right",
        fix: false,
        hover: true,
        elMessageClass: "messageTip"
      },
      settings = $.extend(defaults, options); 

      settings.el.each(function(i){

        var el = $(this),
          elHeight = el.actual( "outerHeight", { absolute : true } ),
          elWidth = el.actual( "outerWidth", { absolute : true } ),
          elData = el.data("message"),
          elPosLeft = el.position().left,
          elPosTop = el.position().top,
          elMessage = $("<div class='" + settings.elMessageClass + "'>" + elData + "</div>");
          
        $("body").append(elMessage);

        var elMessageHeight = elMessage.actual( "outerHeight"),
          elMessageWidth = elMessage.actual( "outerWidth");       

        if (settings.fix == false) {
          if (settings.side == "left") {
            elMessage.addClass("elMessage-left").css({top: (elPosTop + (elHeight/2) - (elMessageHeight/2)), left: (elPosLeft - elWidth)});
          }
          else if (settings.side == "right"){
            elMessage.addClass("elMessage-right").css({top: (elPosTop + (elHeight/2) - (elMessageHeight/2)), left: (elPosLeft + elWidth)});
          }
          else if (settings.side == "top"){
            elMessage.addClass("elMessage-top").css({top: (elPosTop - elHeight), left: (elPosLeft + (elWidth/2) - (elMessageWidth/2))});
          }
          else if (settings.side == "bottom"){
            elMessage.addClass("elMessage-bottom").css({top: (elPosTop + elHeight), left: (elPosLeft + (elWidth/2) - (elMessageWidth/2))});         
          }         
        }
        else{
          $(document).mousemove(function (pos) {
            elMessage.addClass('elMessage-fix').css({top: pos.clientY+10, left: pos.clientX+10});
          });           
        }
        if (settings.hover == true) {
          el.hover(function(){
            elMessage.toggle();
          })
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
.messageTip{
  position: absolute;
  display: none;
}
.elMessage-fix{
  position: fixed;
}
/*end tooltip style*/
```

