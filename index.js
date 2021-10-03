/* Loading Screen logic */
window.onload = () => {
  document.querySelector(".loading-screen").style =
    " animation: load-remove 1s forwards;";
  document.querySelector("html").removeAttribute("style");
  setTimeout(() => {
    document.querySelector(".loading-screen").remove();
  }, 5000);
};
