/*!
 * wait.btn.js  Buttons with spinner and double click prevent
 *
 * Copyright (c) 2015 Raul Anatol
 * http://natol.es
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
(function ($) {

    $('.has-spinner').each(function (i, element) {
        var $element = $(element);
        $element.prepend('<span class="spinner"><i></i></span>');
        var $spinner = $element.find('.spinner i');
        $element.click(function (event) {
            event.preventDefault();
            if (!$spinner.hasClass('fa-spin')) {
                $spinner.addClass('fa fa-spinner fa-spin wait-separator');
                $spinner.html(' ');
                $element.trigger('secureClick');
            }
        });
    });

    $.fn.waitBtnStop = function () {
        var that = $(this);
        var spinner = that.find('.fa-spin');
        spinner.removeClass('fa fa-spinner fa-spin wait-separator');
        spinner.html('');
        return that;
    };

    return this;
})(jQuery);