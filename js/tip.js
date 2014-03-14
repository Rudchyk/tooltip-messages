(function($){
    tooltip = function() {

        this._init = function(element, options) {

            var defaults = {
                el: $(element),
                elMessageClass: "messageTip",
                elMessageSizeClass: 'elMessage',
                fullWidthClass: 'full-width',
                side: "right",
                hover: false,
                fix: false,
                elMessageFixIndent: 10,
                tipHelp: 'tip-help'
            },
            settings = $.extend(defaults, options);

            settings.el.each(function(){

                var $el = $(this),
                    $elHeight = $el.actual( "outerHeight", { absolute : true } ),
                    $elWidth = $el.actual( "outerWidth", { absolute : true } ),
                    $elData = $el.data("tip_message"),
                    $elNum = $el.data("tip_class"),
                    $elMessage = $("<div class='" + settings.elMessageClass + ' ' +$elNum+ "'>" + $elData + "</div>");

                $el
                    .wrap('<div class="'+settings.elMessageSizeClass+'-wrapper '+settings.fullWidthClass+'"></div>')
                    .parent().append($elMessage);

                var $elMessageHeight = $elMessage.actual( "outerHeight"),
                    $elMessageWidth = $elMessage.actual( "outerWidth");

                if (!settings.fix) {
                    if (settings.side == "right") {
                        $elMessage
                                .addClass(settings.elMessageSizeClass+"-right")
                                .css("top", (($elHeight/2) - ($elMessageHeight/2)));
                    }
                    else if (settings.side == "left"){
                        $elMessage
                                .addClass(settings.elMessageSizeClass+"-left")
                                .css("top", (($elHeight/2) - ($elMessageHeight/2)));
                    }
                    else if (settings.side == "top"){
                        $elMessage
                                .addClass(settings.elMessageSizeClass+"-top")
                                .css("left", (($elWidth/2) - ($elMessageWidth/2)));
                    }
                    else if (settings.side == "bottom"){
                        $elMessage
                                .addClass(settings.elMessageSizeClass+"-bottom")
                                .css("left", (($elWidth/2) - ($elMessageWidth/2)));
                    }
                }
                else{
                    $el.on('mousemove', function(pos) {
                        $(this).addClass(settings.tipHelp);
                        $elMessage
                                .addClass(settings.elMessageSizeClass+'-fix')
                                .css({top: pos.clientY+settings.elMessageFixIndent, left: pos.clientX+settings.elMessageFixIndent});
                    });
                }
                if (settings.hover) {
                    $el.hover(function(){
                        $elMessage.toggle();
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