$(document).ready(function() {
    "use strict";

    $('#tabs-services').cubeportfolio({
        filters: '#js-filters-tabs',
        defaultFilter: '.first',
        animationType: 'fadeOut',
        gridAdjustment: 'default',
        displayType: 'default',
        caption: '',
    });

	// --
    // Accordeon
    // --
    $('#accordeon').cubeportfolio({
        filters: '#filters-faq',
        defaultFilter: '*',
        animationType: 'sequentially',
        gridAdjustment: 'default',
        displayType: 'default',
        caption: 'expand',
        gapHorizontal: 0,
        gapVertical: 0
    });

    $('#faq').cubeportfolio({
        filters: '#filters-faq',
        defaultFilter: '*',
        animationType: 'sequentially',
        gridAdjustment: 'default',
        displayType: 'default',
        caption: 'expand',
        gapHorizontal: 0,
        gapVertical: 0,
    });

    $('#solo').cubeportfolio({
        animationType: 'sequentially',
        gridAdjustment: 'default',
        displayType: 'default',
        caption: 'expand',
        gapHorizontal: 0,
        gapVertical: 0
    });

    $('#solo2').cubeportfolio({
        animationType: 'sequentially',
        gridAdjustment: 'default',
        displayType: 'default',
        caption: 'expand',
        gapHorizontal: 0,
        gapVertical: 0
    });

}); // End of document.ready
