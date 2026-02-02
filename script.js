const heroImages = [
  "https://picsum.photos/1200/700?random=1",
  "https://picsum.photos/1200/700?random=2",
  "https://picsum.photos/1200/700?random=3",
  "https://picsum.photos/1200/700?random=4",
  "https://picsum.photos/1200/700?random=5",
  "https://picsum.photos/1200/700?random=6",
  "https://picsum.photos/1200/700?random=7",
  "https://picsum.photos/1200/700?random=8",
  "https://picsum.photos/1200/700?random=9",
  "https://picsum.photos/1200/700?random=10"
];

let index = 0;
const heroImg = document.getElementById("heroImg");

function heroSlider() {
  heroImg.src = heroImages[index];
  index = (index + 1) % heroImages.length;
}

setInterval(heroSlider, 2500);
heroSlider();
