/// A) selecteur///
// document.querySelector("h4");

//------//

//B) Mettre une balise html dans une const//

// const nomDeLaConstante = document.querySelector("h4");
// console.log(nomDeLaConstante);

//------------//

//C) Click event///

const questionContainer = document.querySelector(".click-event");

const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answer = document.querySelector(".answer");
const video = document.querySelector(".video");

//ajouter un évenement//

questionContainer.addEventListener("click", () => {
  //injecter une class//

  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  answer.classList.remove("show-response-false");
  answer.classList.add("show-response-true");
  video.innerHTML = `<iframe class='video-size' src="https://www.youtube.com/embed/BdG1D10s480" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
});
btn2.addEventListener("click", () => {
  answer.classList.remove("show-response-true");
  answer.classList.add("show-response-false");
  video.innerHTML = `<iframe class='videosize' src="https://www.youtube.com/embed/BdG1D10s480" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
});

//------------------------------------------------------------//

//C) Mouse-event ///

const mouseMove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
  mouseMove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(121,265,55)";
});

answer.addEventListener("mouseover", () => {
  answer.style.transform = "rotate(2deg)";
});

//-------------------//

//D) keyPress event///

const keypressContainer = document.querySelector(".keypress");
const btn3 = document.getElementById("btn-3")
const btn4 = document.getElementById("btn-4")
const key = document.getElementById("key");
const video2 = document.querySelector(".video2");
const answer2 = document.querySelector(".answer2");
// const ringTrue = () => {
//   const audio = new Audio();
//   audio.src = "./ressources/son/5.mp3";
//   audio.play();
// };

btn3.addEventListener("click", () => {
  key.classList.remove("btn4")
  key.classList.add("btn3")
  key.textContent = "bravo il y'a bien 5 piliers dans l'islam";
 
    video2.innerHTML = `<iframe class='video-size' src="https://www.youtube.com/embed/rjaPFjvi-H8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    // ringTrue();
 
});
btn4.addEventListener("click", () => {
  key.classList.remove("btn3")
  key.classList.add("btn4")
  key.textContent = "Perdu il y'a  5 piliers dans l'islam et pas 7";
 
    video2.innerHTML = `<iframe class='video-size' src="https://www.youtube.com/embed/rjaPFjvi-H8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    // ringTrue();
 
});

///-------------------//

//scroll event

const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//-----------------------//

//form event//

const inputName = document.querySelector('input[type="text"]');

const select = document.querySelector("select");
const form = document.querySelector(".form");
const rsp = document.querySelector(".rsp");
const video3 = document.querySelector(".video3");

let name = "";
let mesager = "";
inputName.addEventListener("input", (e) => {
  name = e.target.value;
});

select.addEventListener("input", (e) => {
  mesager = e.target.value;
  console.log(mesager);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(cgv.checked) {
    if((name =="") ||(mesager=="")){alert("Veuillez remplir le formulaire")}else{
  if (mesager == "Mohammed") {
    rsp.textContent = ` Bravo ${name} ${mesager} est le dernier messager`;
    rsp.classList.remove("false");
    rsp.classList.add("true");
    video3.innerHTML= `<iframe class='video-size' src="https://www.youtube.com/embed/rdL41TkY21o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  } else {
    rsp.textContent = ` Désole ${name} ${mesager} n'est pas le dernier messager`;
    rsp.classList.remove("true");
    rsp.classList.add("false");
    video3.innerHTML=`<iframe class='video-size' src="https://www.youtube.com/embed/rdL41TkY21o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  }} }else{
    alert("veuillez accepter les cgv")
  }
});


// //load event
// window.addEventListener("load", () =>{
//   console.log('oui');
// })

///
 const bravo = document.querySelector(".form2") 
 const video4 = document.querySelector(".video4")
bravo.addEventListener("submit", (e) => {
  e.preventDefault()
 video4.innerHTML=`<a href="https://www.netflix.com/watch/70257295?trackId=14170076"> les schtroumph</a>`;
})
