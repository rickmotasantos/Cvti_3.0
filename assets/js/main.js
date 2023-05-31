const btn = document.querySelectorAll('button');
btn.forEach((item) => {
  item.addEventListener('click', () => {
    alert('em breve!');
  });
});

console.log('hello world');


let btnMenu = document.querySelectorAll('.hamburguer');
let nave = document.getElementsByTagName("nav")

console.log(nave)

console.log(btnMenu)

btnMenu[0].addEventListener('click', ()=> {

  if(nave[0].classList.contains("aparecer")){
    nave[0].classList.remove("aparecer")
  }else{
    nave[0].classList.add("aparecer")
  }
}) 