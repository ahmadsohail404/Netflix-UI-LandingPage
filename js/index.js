/* Loading Screen logic */
window.onload = () => {
  document.querySelector(".loading-screen").style =
    " animation: load-remove 1s forwards;";
  document.querySelector("html").removeAttribute("style");
  setTimeout(() => {
    document.querySelector(".loading-screen").remove();
  }, 5000);
};

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
