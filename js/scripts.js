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
		tooltipSide: "top",
	tooltipLeftPadding: 10,
	tooltipRightPadding: 10,
	tooltipTopPadding: 5,
	tooltipBottomPadding: 5			 	
	});
}); // Ready


(function($){
	tooltip = function() {

		this._init = function(element, options) {

			var defaults = {
				tooltipWrapper: $(element),
				tooltipSide: "bottom",
				tooltipLeftPadding: 10,
                tooltipRightPadding: 10,
                tooltipTopPadding: 10,
                tooltipBottomPadding: 10
			},
			settings = $.extend(defaults, options); 

			settings.tooltipWrapper.each(function(i){
				var tooltip = $(this).find(".tooltip-js"),
					tooltipWrapperHeight = $(this).height(),
					tooltipHeight = tooltip.height() + settings.tooltipTopPadding + settings.tooltipBottomPadding,
					tooltipWrapperWidth = $(this).width(),
					tooltipWidth = tooltip.width() + settings.tooltipLeftPadding + settings.tooltipRightPadding;

				tooltip.css({paddingLeft: settings.tooltipLeftPadding, paddingRight: settings.tooltipRightPadding, paddingTop: settings.tooltipTopPadding, paddingBottom: settings.tooltipBottomPadding});

				if (settings.tooltipSide == "left") {
					tooltip.addClass('tooltip-left').css({top:-((tooltipHeight)/2 - tooltipWrapperHeight/2)});
				}
				else if (settings.tooltipSide == "right"){
					tooltip.addClass('tooltip-right').css({top:-((tooltipHeight)/2 - tooltipWrapperHeight/2)});
				}
				else if (settings.tooltipSide == "top"){
					tooltip.addClass('tooltip-top').css({left: -(((tooltipWidth) - tooltipWrapperWidth)/2)});
				}
				else if (settings.tooltipSide == "bottom"){
					tooltip.addClass('tooltip-bottom').css({left: -(((tooltipWidth) - tooltipWrapperWidth)/2)});					
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