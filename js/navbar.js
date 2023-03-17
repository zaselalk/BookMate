window.onscroll = function () {
  scrollFunction();
};

function changeColorOfLinks(color) {
  const navlinks = document.getElementsByClassName("navbar-links");

  for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].style.color = color;
  }
}
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar-content ").style.background = "#f6eac7";
    changeColorOfLinks("#7c5245");
    document.getElementById("login-btn").style.background = "none";
    document.getElementById("login-btn").style.color = "black";
    document
      .getElementById("login-btn")
      .addEventListener(
        "mouseover",
        () =>
          (document.getElementById("login-btn").style.background = "#f6eac7")
      );
    document
      .getElementById("login-btn")
      .addEventListener(
        "mouseout",
        () => (document.getElementById("login-btn").style.background = "white")
      );
  } else {
    document.getElementById("navbar-content ").style.background = "transparent";
    changeColorOfLinks("white");
    document.getElementById("login-btn").style.background = "white";
  }
}
