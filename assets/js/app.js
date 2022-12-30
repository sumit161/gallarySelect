let cl=console.log;
const selectMathematician = document.getElementById("selectMathematician");
const all = Array.from(document.querySelectorAll(".all"));
cl(all)
const onhandlerchange = (eve) =>{
    let selectMathe = eve.target.value;
    cl(selectMathe)
   all.forEach(div =>div.classList.add("d-none"))
   let getdivs = Array.from(document.querySelectorAll("."+selectMathe));
   getdivs.forEach(div => div.classList.remove("d-none"))
}
selectMathematician.addEventListener("change",onhandlerchange)

