(function($){
  // Add smooth scrolling to all links in navbar + footer link
  $(".main-nav a, footer a[href='#jcPage']").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Remove class="active" first on all <li>
    $(".main-nav li").each(function() {
      $(this).removeClass('active');  
    })
    
    // Add class="active" on the parent <li>
    $(this).parent().attr('class', 'active');

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
  
  // Slide in elements on scroll
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})(jQuery);