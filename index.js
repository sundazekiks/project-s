let mainBg = document.querySelector(".main");
let mainText = document.querySelector(".main-text");
let specialMsg = document.querySelector(".special-msg");

const imgs = document.querySelectorAll("img");

const imgLinks = [
    "images//1p.jpg",
    "images//2p.jpg",
    "images//3p.jpg",
    "images//4p.jpg",
    "images//5p.jpg"
]

imgs.forEach(function(img, index) {
  img.addEventListener('click', () => {
    console.log("Hello World", index);

    mainBg.style.backgroundImage = `url(${imgLinks[index]})`;
    mainBg.style.backgroundSize = "contain";
    
  });
  

});