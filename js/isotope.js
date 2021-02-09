$(document).ready(function(){
    $('#grid').isotope({      
        itemSelector: '.item',
        percentPosition: true,
        masonry: {      
          columnWidth: '.sizer'
        }
      })
});