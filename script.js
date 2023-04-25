document.querySelector("#donation-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // get form data
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var amount = document.querySelector("#amount").value;
  
    // display thank you message
    var thankYouMessageContainer = document.querySelector("#thank-you-message-container");
    var thankYouMessage = document.querySelector("#thank-you-message");
    thankYouMessage.innerHTML = "Thank you " + name + " for your donation of $" + amount + "!";
    thankYouMessageContainer.classList.add("show");
  
    // reset form
    document.querySelector("#donation-form").reset();
  });
  // Navbar scroll animation
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('nav');
  const windowPosition = window.scrollY > 0;
  navbar.classList.toggle('scrolling-active', windowPosition);
});

// CTA buttons animation
const ctaBtns = document.querySelectorAll('.cta-btns a');
ctaBtns.forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.classList.add('animate__animated', 'animate__pulse');
  });

  btn.addEventListener('mouseleave', function() {
    this.classList.remove('animate__animated', 'animate__pulse');
  });
});

// Navbar hamburger menu
const hamburger = document.querySelector('.hamburger');
const navbarNav = document.querySelector('.navbar-nav');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('is-active');
  navbarNav.classList.toggle('show');
});
