/*
 * @see https://github.com/Rudchyk/tooltip-messages
 * Author: Rudchyk.Sergii
 */
$(document).ready(function(){
	$('.valid-wrapper-bottom-js').tooltip({
		tooltipSide: "bottom"
	});
	$('.valid-wrapper-right-js').tooltip({
		tooltipSide: "right"
	});
	$('.valid-wrapper-left-js').tooltip({
		tooltipSide: "left"
	});
	$('.tooltip-wrapper-top-js').tooltip({
		tooltipSide: "top"		 	
	});

	$('.up').click(function() {
		$('#bla').toggleClass('none');
	});
}); // Ready


(function($){
	tooltip = function() {

		this._init = function(element, options) {

			var defaults = {
				tooltipElement: $(element),
				tooltipSide: "left"
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