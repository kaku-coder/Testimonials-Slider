let testmonalquest = [
  "Traveling, you realize that differences are lost: each city takes to resembling all cities, places exchange their form, order, distances, a shapeless dust cloud invades the continents.",
  "A human being becomes human not through the casual convergence of certain biological conditions, but through an act of will and love on the part of other people.",
  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
];
const authors = ["Lao Tzu", "Italo Calvino", "Orson Welles"];
const randomimage = [
  "https://c4.wallpaperflare.com/wallpaper/760/459/710/aoi-ogata-anime-girls-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/737/517/212/anime-girls-anime-aoi-ogata-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/938/832/1004/glasses-minimalism-monochrome-mask-wallpaper-preview.jpg",
];

const author = document.querySelector(".author");
const quest = document.querySelector(".quet");
let count = 0;
const img =document.querySelector(".imgclass")

setInterval(() => {
  quest.textContent = testmonalquest[count];
  author.textContent = authors[count];
  img.src = randomimage[count];
  count++;
  if (count >= testmonalquest.length) {
    count = 0;
  }
}, 2000);