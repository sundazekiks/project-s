let mainBg = document.querySelector(".main");
let mainText = document.querySelector(".main-text");
let specialMsg = document.querySelector(".special-msg");

const imgs = document.querySelectorAll("img");

const imgLinks = [
    "image//1.jpg",
    "image//2.jpg",
    "image//3.jpg",
    "image//4.jpg",
    "image//5.jpg"
]

imgs.forEach(function(img, index) {
  img.addEventListener('click', () => {
    console.log("Hello World", index);

    mainBg.style.backgroundImage = `url(${imgLinks[index]})`;
    
    
    
  });
  

});