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
