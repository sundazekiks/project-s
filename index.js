let mainBg = document.querySelector(".main");
let mainText = document.querySelector(".main-text");
let specialMsg = document.querySelector(".special-msg");

const imgs = document.querySelectorAll("img");

const imgLinks = [
    "images//4p.jpg",
    "images//2p.jpg",
    "images//1p.jpg",
    "images//3p.jpg",
    "images//5p.jpg"
]

const txts = [
  "Our first date",
  "FSY Last Day",
  "Our Struggle up to the top",
  "We talked about having a business",
  "Our Temple Date"
]

imgs.forEach(function(img, index) {
  img.addEventListener('click', () => {
    console.log("Hello World", index);
    mainText.innerHTML = txts[index]
    mainBg.style.backgroundImage = `url(${imgLinks[index]})`;
    console.log(index)
    if (index == 0) {
      mainBg.style.backgroundSize = "380px 300px";
    }
    else {
      mainBg.style.backgroundSize = "420px 920px ";
    }

  });
  

});