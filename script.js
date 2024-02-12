"use strict";
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const homev = document.querySelector(".homev");
const ye = document.querySelector(".ye");
console.log(yes);
no.addEventListener("click", function () {
  no.classList.add("hidden");
  console.log("click");
});
yes.addEventListener("click", function () {
  homev.classList.add("hidden");
  no.classList.add("hidden");
  yes.classList.add("hidden");
  ye.classList.remove("hidden");
  console.log("click");
});
