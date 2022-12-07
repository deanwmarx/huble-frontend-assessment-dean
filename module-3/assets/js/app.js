$('.accordion-header').click(function(){
    let currentId = $(this).parent().attr('id').slice(-1);
    let currentImage = $(this).parent().parent().parent().find('.accordion-images').find('#accordion-image-' + currentId).attr('id');
    let otherAccordionGroups = $('.accordion-header').not($(this)).parent();

    otherAccordionGroups.find('.accordion-header').removeClass('active');
    otherAccordionGroups.find('.accordion-inner').slideUp(275);
    $('.accordion-images').find('img').not('#' + currentImage).slideUp(275);

    $(this).toggleClass('active');
    $(this).parent().find('.accordion-inner').slideToggle(275);
    $('#' + currentImage).slideToggle(275);
});