// The JQuery Version. Although it would work Bootstrap 5 will use plain js so we avoid to future proof
//  https://websitesetup.org/bootstrap-tutorial-for-beginners/

$(document).ready(function () {
  $(".header").height($(window).height());
});

// var ready = (callback) => {
//   if (document.readyState != "loading") callback();
//   else document.addEventListener("DOMContentLoaded", callback);
// };
// ready(() => {
//   document.querySelector(".header").style.height = window.innerHeight + "px";
// });
