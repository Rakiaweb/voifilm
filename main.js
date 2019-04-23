// // Select DOM Items
// // Header
const icon = document.querySelector(".icon");
const menuBtn = document.querySelector("#menu-btn");
const overlayNav = document.querySelector(".overlay-nav");
const navLinksCon = document.querySelector(".nav-links-container");
const navItems = document.querySelectorAll(".nav-item");
const topright = document.querySelector(".top-right");
const toprightCon = document.querySelector(".top-right-content");
const toprightItems = document.querySelectorAll(".top-right-item");
const projects = document.querySelectorAll(".project");
// Main
const body = document.getElementsByTagName("BODY")[0];
const home = document.getElementById("#home");
const about = document.getElementById("#about");
const viewworkBtn = document.querySelector(".view-work-btn");
const sections = document.querySelectorAll(".section");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
projects.forEach(project => {
  project.addEventListener("click", toggleMenu);
});

function openNav() {
  fadeOut();
  menuBtn.classList.add("close");
  setTimeout(function() {
    overlayNav.classList.add("show");
    navLinksCon.classList.add("show");
    topright.classList.add("show");
    toprightCon.classList.add("show");
    toprightItems.forEach(item => item.classList.add("show"));
    body.classList.add("show");
    icon.classList.add("show");

    TweenMax.staggerFrom(navItems, 1, { opacity: 0, delay: 0.5 }, 0.05);
    TweenMax.staggerFrom(
      projects,
      2,
      { opacity: 0, delay: 1, ease: Elastic.easeOut.config(1, 0.7), y: 100 },
      0.05
    );
  }, 500);
  // Set Menu State
  showMenu = true;
}

function closeNav() {
  TweenMax.to(".box.project", 0.5, { opacity: 0, y: 0 });
  TweenMax.to(".box.project", 0, { opacity: 1, y: 0, delay: 2 });
  TweenMax.to(".nav-links-container", 0.5, { opacity: 0, delay: 0 });
  TweenMax.to(".nav-links-container", 0, { opacity: 1, delay: 2 });
  menuBtn.classList.remove("close");
  setTimeout(function() {
    overlayNav.classList.remove("show");
    navLinksCon.classList.remove("show");
    topright.classList.remove("show");
    toprightCon.classList.remove("show");
    toprightItems.forEach(item => item.classList.remove("show"));
    body.classList.remove("show");
    icon.classList.remove("show");
  }, 1000);
  if (showMenu) {
    fadeIn();
  }
  // Set Menu State
  showMenu = false;
}

function toggleMenu() {
  if (!showMenu) {
    openNav();
  } else {
    closeNav();
  }
}

// Fade out
function fadeOut() {
  TweenMax.to("section.current .content-container", 0.3, {
    opacity: 0,
    delay: 0.2
  });
  TweenMax.to("section.current .bg-container", 0.3, { opacity: 0, delay: 0 });
  TweenMax.to("section.current .content-container", 0.3, {
    opacity: 1,
    delay: 1.3
  });
  TweenMax.to("section.current .bg-container", 0.3, { opacity: 1, delay: 1 });
}
function fadeIn() {
  TweenMax.from("section.current .bg-container", 0.3, { opacity: 0, delay: 0 });
  TweenMax.from("section.current .content-container", 0.3, {
    opacity: 0,
    delay: 0.3
  });
}

// Prev Next button
$(".next").click(function() {
  fadeOut();
  setTimeout(function() {
    var current = $("section.current");
    if (current.is(":last-child")) {
      current.removeClass("current");
      $("section:nth-child(2)").addClass("current");
    }
    current.removeClass("current");
    current.next().addClass("current");
    fadeIn();
  }, 500);
});
$(".prev").click(function() {
  fadeOut();
  setTimeout(function() {
    var current = $("section.current");
    if (current.is(":nth-child(2)")) {
      current.removeClass("current");
      $("section:last-child").addClass("current");
      return;
    }
    current.removeClass("current");
    current.prev().addClass("current");
    fadeIn();
  }, 1000);
});
// Nav Project link
$(".box.project").click(function() {
  $("#about").removeClass("active");
  // fadeOut();
  var current = $("section.current");
  var currentBox = $(".box.current");
  current.removeClass("current");
  currentBox.removeClass("current");
  $(this).addClass("current");
  var x = $(this).index() + 2;
  $("section:nth-child(" + x + ")").addClass("current");
  fadeIn();
});

// About
$(".about-btn").click(function() {
  closeNav();
  fadeOut();
  setTimeout(function() {
    $(this).addClass("active");
    $("#about").addClass("active");
    TweenMax.staggerFrom(
      ".about-content",
      1,
      { opacity: 0, delay: 0.5, ease: Elastic.easeOut.config(1, 1), y: 50 },
      0.05
    );
  }, 1000);
});

// TweenMax Animation
TweenMax.from(".bg-container", 2, { opacity: 0, delay: 0 });
TweenMax.from("#voifilm", 3, { opacity: 0, delay: 1 });
TweenMax.from("#view-work-btn, #menu-btn, #voifilm-icon", 3, {
  opacity: 0,
  delay: 2
});
TweenMax.staggerFrom(".top-right-item", 5, { opacity: 0, delay: 2 }, 0.1);
