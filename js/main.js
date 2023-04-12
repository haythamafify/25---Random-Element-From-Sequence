let arr = ["haytham", "gamal", "elsyaed", "afify"];
let rand = document.querySelector(".rand");
let randomexample = Math.floor(Math.random() * arr.length);
setInterval(() => {
  rand.innerHTML=arr[randomexample]
}, 3000);
