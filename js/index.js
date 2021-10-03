
const question = document.querySelectorAll('.question');
question.forEach((ques)=>{
  ques.addEventListener('click',(e)=>{
    const i =ques.lastElementChild.firstElementChild;
    const ans=ques.nextElementSibling;
    ans.classList.toggle('show');
    i.classList.toggle('rotate');
  })
});