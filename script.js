"use strict";

// hamr_turi*****************************
let noni = document.querySelector("select");
let massage_non = document.querySelector(".massage_non");

const array = [];

noni.addEventListener("change", function (e) {
  e.preventDefault();

  massage_non.textContent = noni.value;
  array.push(e.target.value);
  console.log(array);
});
// hamr_turi*****************************

// razmer***************************************************

let button = document.querySelectorAll("button");

let massage_razmer = document.querySelector(".massage_razmer");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", (e) => {
    massage_razmer.textContent = button[i].value;
    array.push(e.target.value);
    console.log(e.target.value);
  });
}
// razmer***************************************************

// pomidor**************************************************
let pomidor_span = document.querySelector(".pomidor_span");
let pomidor_input = document.querySelector(".pomidor_input");
let pomidor_label = document.querySelector(".pomidor_label");
let pomidor_joyi = document.querySelector(".pomildori_joyi");

pomidor_span.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    pomidor_joyi.textContent = pomidor_input.value;
    array.push(e.target.value);
  } else {
    pomidor_joyi.textContent = "";
    array.pop();
  }
});
// pomidor**************************************************

// kurka*****************************************************

let kurka_span = document.querySelector(".kurka_span");
let kurka_input = document.querySelector(".kurka_input");
let kurka_joyi = document.querySelector(".kurka_joyi");

kurka_span.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    kurka_joyi.textContent = kurka_input.value;
    array.push(e.target.value);
  } else {
    kurka_joyi.textContent = "";
    array.pop();
  }
});
// kurka*****************************************************

// zaytun************************************************************

let zaytun_span = document.querySelector(".zaytun_span");
let zaytun_input = document.querySelector(".zaytun_input");
let zaytun_joyi = document.querySelector(".zaytun_joyi");

zaytun_span.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    zaytun_joyi.textContent = zaytun_input.value;
    array.push(e.target.value);
  } else {
    zaytun_joyi.textContent = "";
    array.pop();
  }
});
// zaytun************************************************************

//qoziqorin**********************************************************

let qoziqorin_span = document.querySelector(".qoziqorin_span");
let qoziqorin_input = document.querySelector(".qoziqorin_input");
let qoziqorin_joyi = document.querySelector(".qoziqorin_joyi");

qoziqorin_span.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    qoziqorin_joyi.textContent = qoziqorin_input.value;
    array.push(e.target.value);
  } else {
    qoziqorin_joyi.textContent = "";
    array.pop();
  }
});
//qoziqorin**********************************************************

//bodring*****************************************************8*****

let bodring_span = document.querySelector(".bodring_span");
let bodring_input = document.querySelector(".bodring_input");
let bodring_joyi = document.querySelector(".bodiring_joyi");

bodring_span.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    bodring_joyi.textContent = bodring_input.value;
    array.push(e.target.value);
  } else {
    bodring_joyi.textContent = "";
    array.pop();
  }
});
//bodring*****************************************************8*****

// qazi*********************************************************************8
let qazi_span = document.querySelector(".qazi_span");
let qazi_input = document.querySelector(".qazi_input");
let qazi_joyi = document.querySelector(".qazi_joyi");

qazi_span.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    qazi_joyi.textContent = qazi_input.value;
    array.push(e.target.value);
  } else {
    qazi_joyi.textContent = "";
    array.pop();
  }
});
// qazi*********************************************************************8

// achchiq888888****************************************8888*******************
let achchiq_span = document.querySelector(".achchiq_span");
let achchiq_input = document.querySelector(".achchiq_input");
let achchiq_joyi = document.querySelector(".achchiq_joyi");

achchiq_span.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    achchiq_joyi.textContent = achchiq_input.value;
    array.push(e.target.value);
  } else {
    achchiq_joyi.textContent = "";
    array.pop();
  }
});
// achchiq888888****************************************8888*******************

//Sosiskali********************************************************8

let sosiska_span = document.querySelector(".sosiska_span");
let sosiska_input = document.querySelector(".sosiska_input");
let sosiska_joyi = document.querySelector(".sosiska_joyi");

sosiska_span.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    sosiska_joyi.textContent = sosiska_input.value;
    array.push(e.target.value);
  } else {
    sosiska_joyi.textContent = "";
    array.pop();
  }
});
//Sosiskali********************************************************8

//ketchup8**********************************************************88

let ketchup_span = document.querySelector(".ketchup_span");
let ketchup_input = document.querySelector(".ketchup_input");
let ketchup_joyi = document.querySelector(".ketchup_joyi");

ketchup_span.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    ketchup_joyi.textContent = ketchup_input.value;
    array.push(e.target.value);
  } else {
    ketchup_joyi.textContent = "";
    array.pop();
  }
});
//ketchup8**********************************************************88

//Sir************************************************************************

let sir_span = document.querySelector(".sir_span");
let sir_input = document.querySelector(".sir_input");
let sir_joyi = document.querySelector(".sir_joyi");

sir_span.addEventListener("click", (e) => {
  if (e.target.checked == true) {
    sir_joyi.textContent = sir_input.value;
    array.push(e.target.value);
  } else {
    sir_joyi.textContent = "";
    array.pop();
  }
});
//Sir************************************************************************

// Modal************************************************************************

function hideTabFunction() {
  $$(".birinchi").forEach((item) => {
    item.classList.remove("active");
  });
}

function showTabFunction(i = 0) {
  $$(".birinchi")[i].classList.add("active");
}

hideTabFunction();
showTabFunction();

$(".kattaligi").addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.classList.contains("birinchi")) {
    $$(".birinchi").forEach((item, index) => {
      if (item == target) {
        hideTabFunction();
        showTabFunction(index);
      }
    });
  }
});

$(".btn_title").addEventListener("click", (e) => {
  if (array.length <= 4) {
    $("#check").setAttribute("class", "fa fa-x");
    $(".modal").setAttribute("class", "modal active");
    $(".modal__container-title").innerHTML = "Buyurtmangiz qabul qilinmadi";
    console.log("Ichi bosh");
  } else {
    $("#check").setAttribute("class", "fa fa-check");
    $(".modal").setAttribute("class", "modal active");
    $(".modal__container-title").innerHTML = "Buyurtmangiz qabul qilindi";
    $(".modal__container-title").style.color = "green";
  }
});

$(".modal__container_x").addEventListener("click", () => {
  $(".modal").classList.remove("active");
});

$(".modal").addEventListener("click", () => {
  if ($(".modal")) {
    $(".modal").classList.remove("active");
  }
});

this.addEventListener("keydown", (e) => {
  if (e.code == "Escape") {
    $(".modal").classList.remove("active");
  }
});
