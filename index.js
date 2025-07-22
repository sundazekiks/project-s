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

const ps = [
  "Whaa! the first date I got to see you in person, I remember this time. I told you i arrive na sa terminal well when I texted you that naa nakos geegee hehe at first it hit me nervousness so I went to oxygen first pretend to stroll around ba the bag was just an excuse so I can ge rid of my nervousness but when I saw you it just all went away, you don't know how I was just starstrucked at that time. Like Whoaa! you're just so pretty. I could just stare at you all day haha, but that'd be wierd so I just played it cool. That time was fun we strolled around geegee, the bookstore, oh yeah I forgot about the book I saw last time. But that's fine.and I didn't really wanna end our date at that time but some things happened I really wanted to spend more time with you but yeah I think that was enough. You are so welcoming too",
  "Our last night at fsy where we just sat down in the lobby with your white dress which was like beautiful on you, you were tired at that time because you were one of the mcees. I wanted to dance with you during the social night because I saw some counselors dancing with with other counselors too but I just stayed put but thanks you always approach me to when we get a picture, when you wanted to talk those things I really do appreciate those I feel butterflies in my stomach when you we talk at that time haha",
  "Our date at Global Gardens, the first time we held hands and hugged every time you do that I felt like how Zenitsu nga gikilig ba haha. Thank you for holding my hand I mean it was struggle up to the top but it was fun, kapoy but I don't really felt "
]
imgs.forEach(function(img, index) {
  img.addEventListener('click', () => {
    console.log("Hello World", index);
    mainText.innerHTML = txts[index]
    specialMsg.innerHTML = ps[index];
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