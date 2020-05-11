// Menubar on mobile screen
$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active');
        $('nav').toggleClass('active')
    });

    $('nav ul li a').click(function(){
    
      $('nav').removeClass('active')
  });

  

})



// @mobile on the hero section, the bacground
$(document).ready(function(){
  $('.menu-toggle').click(function(){
      $('.menu-toggle').toggleClass('active')
      $('.fix').toggleClass('active')
      $('.fix').addClass('nav-scrolled')
  });

})

// Header on scroll
const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


// Clicking a nav link to activate it
$(document).on('click','nav ul li ', function(){
    $(this).addClass('active').siblings().removeClass('active')
});


(function(){
  var navLinks = $('nav ul li a'),
      navH = $('nav').height(),
      section = $('section'),
      documentEl = $(document);

  documentEl.on('scroll', function(){
    var currentScrollPos = documentEl.scrollTop();

    section.each(function(){
      var self = $(this);
      if(self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight()) ){
        var targetClass = '.' + self.attr('class') + '-link';
        navLinks.removeClass('active');
        $(targetClass).addClass('actve');
      }
    });
  });




});

