
$(document).ready(function() {
    buildModals($);

    $('.special.cards .image').dimmer({
        on: 'hover'
      });

      $(window).on('scroll', function(){
        $timeline_block.each(function(){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
});


function buildModals($) {
    $("#1x1-explore").click(() => {
        console.log("#1x1thumb clicked");
        $('#adl-modal')
        .modal('show')
      ;
    });
}