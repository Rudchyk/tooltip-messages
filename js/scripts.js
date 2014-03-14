$(document).ready(function(){






    $('.form').on('focus', 'input', function() {
        var $el = $(this);
        $el
            .addClass('error')
            .parent().find('.messageTip').show();
    }).on('blur', 'input', function(event) {
        var $el = $(this);
        $el
            .removeClass('error')
            .parent().find('.messageTip').hide();
    });






    $('.show-box-link').click(function() {
        var $el = $(this),
            $hideBox = $('.hide-box');
        $hideBox.toggle();
        if ($hideBox.is(':hidden')) {
            $el.text('show block');
        }
        else{
            $el.text('hide block');
        }
    });








}); // Ready