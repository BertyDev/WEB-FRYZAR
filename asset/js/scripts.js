var scrollpos = window.scrollY;
var header = document.getElementById("header");
var navcontent = document.getElementById("nav-content");
var navaction = document.getElementById("navAction");
var toToggle = document.querySelectorAll(".toggleColour");
var navlink = document.getElementById("nav-link");
// var price = document.getElementById("price");

document.addEventListener("scroll", function () {
  /*aplica las clases al hacer scroll*/
  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    header.classList.add("bg-white");
    navaction.classList.remove("bg-white");
    navaction.classList.add("gradient");
    navaction.classList.remove("text-gray-800");
    navaction.classList.add("text-white");
    navlink.classList.remove("nav-link-active");

    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-blue-800");
      toToggle[i].classList.remove("text-white");
    }
    header.classList.add("shadow");
    navcontent.classList.remove("bg-gray-50");
    navcontent.classList.remove("md:text-white");
    navcontent.classList.add("bg-white");
    navcontent.classList.add("text-gray-700");
  } else {
    header.classList.remove("bg-white");
    navaction.classList.remove("gradient");
    navaction.classList.add("bg-white");
    navaction.classList.remove("text-white");
    navaction.classList.add("text-gray-800");
    navlink.classList.add("nav-link-active");

    for (var i = 0; i < toToggle.length; i++) {
      toToggle[i].classList.add("text-white");
      toToggle[i].classList.remove("text-blue-800");
    }

    header.classList.remove("shadow");
    navcontent.classList.remove("bg-white");
    navcontent.classList.add("bg-gray-50");
    navcontent.classList.add("text-gray-700");
    navcontent.classList.add("md:text-white");
  }
});

/*Responsive NAV*/
var navlinkAll = document.querySelectorAll("#nav-link");
var navMenuDiv = document.getElementById("nav-content");
var navMenu = document.getElementById("nav-toggle");
document.onclick = check;

function check(e) {

  var target = (e && e.target) || (e && e.srcElement);

  // checkLink(target);

  //Nav Menu hamburger
  if (!checkParent(target, navMenuDiv)) {
    // click NOT on the menu
    if (checkParent(target, navMenu)) {
      // click on the link
      if (navMenuDiv.classList.contains("hidden")) {
        navMenuDiv.classList.remove("hidden");
      } else {
        navMenuDiv.classList.add("hidden");
      }
    } else {
      // click both outside link and outside menu, hide menu
      navMenuDiv.classList.add("hidden");
    }
  }
}

// function checkLink(x) {
//   for (var i = 0; i < navlinkAll.length; i++) {
//     navlinkAll[i].addEventListener("click", function () {
//       if (window.location.href == x.href) {
//         navMenuDiv.classList.add("hidden");
//       }
//     });
//   }
// }


function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}

navaction.addEventListener("click", function () {
  navMenuDiv.classList.add("hidden");
  for (var i = 0; i < navlinkAll.length; i++) {
    navlinkAll[i].classList.remove("nav-link-active");
  }
});
// cambia los estilo al dar click al navlink si encuentran una forma mas elegante
function activeLink(x) {
  for (var i = 0; i < navlinkAll.length; i++) {
    navlinkAll[i].classList.remove("nav-link-active");
  }
  navMenuDiv.classList.add("hidden");
  x.classList.add("nav-link-active");
}

// navlink.addEventListener("click", function () {
//   navlink.classList.add("nav-link-active");
// });
// function AddClassPrice(x) {
//   // REMOVE CLASS
//   x.classList.remove("flex");
//   x.classList.remove("flex-col");
//   x.classList.remove("w-5/6");
//   x.classList.remove("lg:w-1/4");
//   x.classList.remove("mx-auto");
//   x.classList.remove("lg:mx-0");
//   x.classList.remove("rounded-none");
//   x.classList.remove("lg:rounded-l-lg");
//   x.classList.remove("bg-white");
//   x.classList.remove("mt-4");
//   // ADD CLASS
//   x.classList.add("flex");
//   x.classList.add("flex-col");
//   x.classList.add("w-5/6");
//   x.classList.add("lg:w-1/3");
//   x.classList.add("mx-auto");
//   x.classList.add("lg:mx-0");
//   x.classList.add("rounded-lg");
//   x.classList.add("bg-white");
//   x.classList.add("mt-4");
//   x.classList.add("sm:-mt-6");
//   x.classList.add("shadow-lg");
//   x.classList.add("z-10");
// }

// function RemoveClassPrice(x) {
//   // REMOVE CLASS
//   x.classList.remove("flex");
//   x.classList.remove("flex-col");
//   x.classList.remove("w-5/6");
//   x.classList.remove("lg:w-1/3");
//   x.classList.remove("mx-auto");
//   x.classList.remove("lg:mx-0");
//   x.classList.remove("rounded-lg");
//   x.classList.remove("bg-white");
//   x.classList.remove("mt-4");
//   x.classList.remove("sm:-mt-6");
//   x.classList.remove("shadow-lg");
//   x.classList.remove("z-10");
// // ADD CLASS
//   x.classList.add("flex");
//   x.classList.add("flex-col");
//   x.classList.add("w-5/6");
//   x.classList.add("lg:w-1/4");
//   x.classList.add("mx-auto");
//   x.classList.add("lg:mx-0");
//   x.classList.add("rounded-none");
//   x.classList.add("lg:rounded-l-lg");
//   x.classList.add("bg-white");
//   x.classList.add("mt-4");

// }