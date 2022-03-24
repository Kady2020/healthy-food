let headerScroll;
window.onscroll = function () {
  headerScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (headerScroll > 70) {
    $(".header").css({ "background": "#222" })
  }
  if (70 > headerScroll) {
    $(".header").css({ "background": "none" })
  }
}
