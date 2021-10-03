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
