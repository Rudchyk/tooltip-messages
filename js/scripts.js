/*
 * @see https://github.com/Rudchyk/tooltip-messages
 * Author: Rudchyk.Sergii
 */
$(document).ready(function(){
	$('.tip-js').tooltip({
		side: "top",
		hover: false,
	});

	$('.tip2-js').tooltip();

	$('.tip3-js').tooltip({
		side: "bottom"
	});

	$('.tip4-js').tooltip({
		side: "left"
	});

	$('.tip5-js').tooltip({
		fix: true
	});

	$('.tip6-js').tooltip();


	$('.up').click(function() {
		$('#bla').toggleClass('none');
	});

}); // Ready


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
                    elNum = el.data("posb"),
                    elPosLeft = el.offset().left,
                    elPosTop = el.offset().top,
                    elMessage = $("<div class='" + settings.elMessageClass + ' ' +settings.elMessageClass+elNum+ "'>" + elData + "</div>");
                    
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