#jquery.selectjs

## Usage:

```html
<script src="jquery.js"></script>
<!-- actual -->
<script src="jquery.actual.min.js"></script>
<!-- tip -->
<script src="tip.js"></script>
```

Define script:

```javascript
$(document).ready(function(){
  $('.tip-js').tooltip(); //Запуск срипта на class="tip-js"
});
```
Define script with options:

```javascript
$(document).ready(function(){
  $('.tip-js').tooltip({
    elMessageClass: "messageTip", // Главный класс тултипа. По умолчанию: 'messageTip';
    elMessageSizeClass: 'elMessage', // Вспомогательный класс тултипа. Является составным и присоединяется к названию стороны вывода (пример: elMessage-top). По умолчанию: 'elMessage';
    fullWidthClass: 'full-width', // Класс который устанавливает ширину обвертки тултипа в 100%. По умолчанию: 'full-width';
    side: "right", // Строна вывода тултипа. По умолчанию: right. Варианты: top, right, bottom, left
    hover: false, // Вывод тултипа по наведению на элемент. По умолчанию: false;
    fix: false, // Фиксированный тултип (прилипание к курсору). По умолчанию: false;
    elMessageFixIndent: 10, // Отступ тултипа от курсора, при фиксированном тултипе. По умолчанию: 10px;
    tipHelp: 'tip-help' // Класс вывода курсора "help"
  });
});
```

Define default html

```html
<input type="password" class="tip tip-js" data-tip_message="some_text" data-tip_class="some_tip_class">
```
or
```html
<div class="tip tip-js" data-tip_message="some_text" data-tip_class="some_tip_class"></div>
```
data-tip_message - Текст сообщения;
data-tip_class - Специальный класс для тултипа;

Default scss
```css
.tip{
    &.tip-help{
        cursor: help;
    }
}

.full-width{
    width: 100%;
}

/*tooltip wrap*/

.elMessage-wrapper{
    display: inline-block;
    position: relative;
    vertical-align: top;
}

//message style
$message-bg: #ef5b5b;
$message-padding: 10px 14px;
$message-shadow: 3px 4px 6px rgba(0,0,1,.22);
$message-textColor: #fff;
$message-lineHeight: 1;

//message type style
$arrow-width: 5px;
$arrow-height: 8px;
$message-indent: 12px;

.messageTip{
    background-color: $message-bg;
    box-shadow: $message-shadow;
    color: $message-textColor;
    display: none;
    line-height: $message-lineHeight;
    padding: $message-padding;
    position: absolute;
    white-space: nowrap;
    z-index: 1000;
    &:before{
        border-style: solid;
        content: '';
        position: absolute;
    }
    &.elMessage-right,
    &.elMessage-left{
        &:before{
            margin-top: -$arrow-width;
            top: 50%;
        }
    }
    &.elMessage-top,
    &.elMessage-bottom{
        &:before{
            margin-left: -$arrow-width;
            left: 50%;
        }
    }
    &.elMessage-right{
        margin-left: $message-indent;
        left: 100%;
        &:before{
            border: {
                width: $arrow-width $arrow-height $arrow-width 0;
                color: transparent $message-bg transparent transparent;
            }
            right: 100%;
        }
    }
    &.elMessage-left{
        margin-right: $message-indent;
        right: 100%;
        &:before{
            border: {
                width: $arrow-width 0 $arrow-width $arrow-height;
                color: transparent transparent transparent $message-bg;
            }
            left: 100%;
        }
    }
    &.elMessage-top{
        bottom: 100%;
        margin-bottom: $message-indent;
        &:before{
            border: {
                width: $arrow-height $arrow-width 0 $arrow-width;
                color: $message-bg transparent transparent transparent;
            }
            top: 100%;
        }
    }
    &.elMessage-bottom{
        margin-top: $message-indent;
        top: 100%;
        &:before{
            border: {
                width: 0 $arrow-width $arrow-height $arrow-width;
                color: transparent transparent $message-bg transparent;
            }
            bottom: 100%;
        }
    }
    &.elMessage-fix{
        position: fixed;
        &:before{
            border: none;
            content: '';
            position: absolute;
        }
    }
}
```
DEMO:
<a href="http://viking-r.pp.ua/tooltip-messages/">link</a>
