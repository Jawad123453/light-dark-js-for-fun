let bacolor=document.querySelector(".center");
let btn=document.querySelector(".bcolor");

btn.addEventListener("click",()=>{
  bacolor.classList.toggle("dark_themc");
  btn.classList.toggle("bcolor");
  btn.classList.toggle("dark_themb");
  if(btn.classList.contains("bcolor")){
    btn.textContent="Light";
  }
  else{
    btn.textContent="Dark";
  }
})