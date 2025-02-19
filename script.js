(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $(document).ready(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (
          location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
          location.hostname === this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
            $("html, body").animate(
              {
                scrollTop: target.offset().top,
              },
              1000,
              "easeInOutExpo"
            );
            return false;
          }
        }
      });
  
      // Closes responsive menu when a scroll trigger link is clicked
      $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
      });
  
      // Activate scrollspy to add active class to navbar items on scroll
      $("body").scrollspy({
        target: "#navbar",
        offset: 50, // Adjust offset as needed
      });
    });
  
    // Dark Mode Toggle Function
    function toggleDarkMode() {
      const element = document.body;
      element.classList.toggle("dark-mode");
    }
  
    // Add event listener for dark mode toggle
    document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
  
  })(jQuery); // End of use strict
