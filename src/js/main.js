var check_ul_fl = true;
function date_today() {
  var d = new Date();
  var month = new Array ("января","февраля","марта","апреля","мая","июня",
    "июля","августа","сентября","октября","ноября","декабря");
  return `${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`;
}

function main_date() {
  let mdate = document.getElementById("main_date");
  mdate.value = date_today();
}

document.addEventListener("DOMContentLoaded", function()
 {
     main_date();
 }, false);

function for_print(evt) {
  evt.preventDefault();
    
  let formdt = new FormData(this);

  let data = Object.fromEntries(formdt.entries());
  let mass_1 = [ "ap", "dnr", "dt", "nt", "summa_mo" ];
  for (let item of mass_1) {
    document.getElementById(item).textContent = data[item];
  }

  let mass_2 = [ "mts_1", "sms", "mts_2", "ps", "v220", "wl", "gl", "so" ];
  for (let item of mass_2) {
    if (data[item]) {
      document.getElementById(item).textContent = "V";
    } else {
      document.getElementById(item).textContent = " ";
    }
  }

  let mass_3 = [ "do", "dm", "dm_summa", "gorod", "ulitsa", "dom", "main_date", "ob_number" ];
  for (let item of mass_3) {
    for (let spn of document.getElementsByClassName(item)) {
      spn.textContent = data[item];
    }
  }

  if (data.ts && data.vkts) {
      document.getElementById("vkts").textContent = "+ВКТС";
    } else if (data.vkts) {
      document.getElementById("vkts").textContent = "ВКТС";
    } else {
      document.getElementById("vkts").textContent = " ";
  }

  if (check_ul_fl) {
    let mass_4 = [ "ooo", "gendir", "inn", "ofis" ];
    for (let item of mass_4) {
      for (let spn of document.getElementsByClassName(item)) {
        spn.textContent = data[item];
      }
    }

    if (data.os && data.ts) {
      document.getElementById("os").textContent = "V";
      document.getElementById("ts").textContent = "V";
      document.getElementById("mes12").textContent = "V";
    } else if (data.os) {
      document.getElementById("os").textContent = "V";
      document.getElementById("mes9").textContent = "V";
    } else if (data.ts) {
      document.getElementById("ts").textContent = "V";
      document.getElementById("mes6").textContent = "V";
    } else {
      document.getElementById("os").textContent = " ";
      document.getElementById("ts").textContent = " ";
      document.getElementById("mes12").textContent = " ";
      document.getElementById("mes9").textContent = " ";
      document.getElementById("mes6").textContent = " ";
    }

    if ((data.ts) && (data.os)) {
      document.getElementById("mes12").textContent = "V";
    } else {
      document.getElementById("mes12").textContent = " ";
    }
  } else {
    let mass_5 = [ "os", "ts" ];
      for (let item of mass_5) {
        if (data[item]) {
          document.getElementById(item).textContent = "V";
        } else {
          document.getElementById(item).textContent = " ";
        }
      }
    let mass_6 = [ "fio", "bday", "pas_num", "pas_date", "pas_whoes", "pas_propis", "kvartira" ];
      for (let item of mass_6) {
        for (let spn of document.getElementsByClassName(item)) {
        spn.textContent = data[item];
        }
      }
  } 

  window.print();
}

let form = document.getElementById('printer');
form.addEventListener('submit', for_print);

function ShowFL() {
  let fl_array = document.getElementsByClassName("only_fl");
    for (let i = 0; i < fl_array.length; i ++) {
      fl_array[i].style.display = "block";
    }
  let ul_array = document.getElementsByClassName("only_ul");
    for (let i = 0; i < ul_array.length; i ++) {
      ul_array[i].style.display = "none";
    }
  check_ul_fl = false;
}
function ShowUL() {
  let fl_array = document.getElementsByClassName("only_fl");
    for (let i = 0; i < fl_array.length; i ++) {
      fl_array[i].style.display = "none";
    }
  let ul_array = document.getElementsByClassName("only_ul");
    for (let i = 0; i < ul_array.length; i ++) {
      ul_array[i].style.display = "block";
    }
  check_ul_fl = true;
}

function check() {
  let checked_box = document.getElementById("inviz");
    if (checked_box.checked) {
    document.getElementById("inviz_mts2").style.display="block";
    } else {
    document.getElementById("inviz_mts2").style.display="none";
 }
}
