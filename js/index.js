
const question = document.querySelectorAll(".question");
question.forEach((ques) => {
  ques.addEventListener("click", (e) => {
    /* closes previously opened question */
    question.forEach((opened_ques) => {
      const opened_ans = opened_ques.nextElementSibling;
      opened_ans.classList.remove("show");
    });
    const i = ques.lastElementChild.firstElementChild;
    const ans = ques.nextElementSibling;
    ans.classList.toggle("show");
    i.classList.toggle("rotate");
  });
});
// SCROLL TO TOP BUTTON
var x = document.getElementById("myDIV");
window.addEventListener("scroll", function () {
  let offset;
  offset = window.pageYOffset;
  if (offset > 225) {
    x.style.display = "block";
  }
  if (offset < 200) {
    x.style.display = "none";
  }
});


const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

