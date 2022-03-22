const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

//scroller
var x = document.querySelector("#myDIV");
window.addEventListener("scroll", function () {
  let offset;
  offset = window.pageYOffset;
  if (offset > 320) {
    x.style.display = "block";
  }
  if (offset < 300) {
    x.style.display = "none";
  }
});
