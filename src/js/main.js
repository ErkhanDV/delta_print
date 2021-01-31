function date_today() {
  var d = new Date();
  var month = new Array ("января","февраля","марта","апреля","мая","июня",
    "июля","августа","сентября","октября","ноября","декабря");
  return `${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`;
}

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

  let mass_3 = [ "ooo", "gendir", "inn", "do", "dm", "dm_summa", "gorod", "ulitsa", "dom", "ofis" ];
  for (let item of mass_3) {
    for (let spn of document.getElementsByClassName(item)) {
      spn.textContent = data[item];
    }
  }

  let new_date = date_today();
    for (let spn of document.getElementsByClassName("date_today")) {
      spn.textContent = new_date;
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
  if (data.ts && data.vkts) {
    document.getElementById("vkts").textContent = "+ВКТС";
  } else if (data.vkts) {
    document.getElementById("vkts").textContent = "ВКТС";
  } else {
    document.getElementById("vkts").textContent = " ";
  }
  if ((data.ts) && (data.os)) {
    document.getElementById("mes12").textContent = "V";
  } else {
    document.getElementById("mes12").textContent = " ";
  }

  window.print();

  }

let form = document.getElementById('printer');
form.addEventListener('submit', for_print);

function for_print_fl(evt) {
  evt.preventDefault();
    
  let formdt = new FormData(this);

  let data = Object.fromEntries(formdt.entries());
  let mass_1 = [ "ap", "dnr", "dt", "nt", "summa_mo" ];
  for (let item of mass_1) {
    document.getElementById(item).textContent = data[item];
  }

  let mass_2 = [ "mts_1", "sms", "mts_2", "ps", "v220", "wl", "gl", "so", "os", "ts" ];
  for (let item of mass_2) {
    if (data[item]) {
      document.getElementById(item).textContent = "V";
    } else {
      document.getElementById(item).textContent = " ";
    }
  }


  let mass_3 = [ "fio", "bday", "pas_num", "pas_date", "pas_whoes", "pas_propis", "do", "dm", "dm_summa", "gorod", "ulitsa", "dom", "kvartira" ];
  for (let item of mass_3) {
    for (let spn of document.getElementsByClassName(item)) {
      spn.textContent = data[item];
    }
  }

  let new_date = date_today();
    for (let spn of document.getElementsByClassName("date_today")) {
      spn.textContent = new_date;
    }

  window.print();

  }

let form_fl = document.getElementById('printer_fl');
form_fl.addEventListener('submit', for_print_fl);

function ShowFL() {
  document.getElementById("fiz_l_form").style.display="block"
  document.getElementById("ur_l_form").style.display="none"
}
function ShowUL() {
  document.getElementById("fiz_l_form").style.display="none"
  document.getElementById("ur_l_form").style.display="block"
}

function check() {
  let checked_box = document.getElementById("inviz");
    if (checked_box.checked) {
    document.getElementById("inviz_mts2").style.display="block"
    } else {
    document.getElementById("inviz_mts2").style.display="none"
 }
}

function check_fl() {
  let checked_box = document.getElementById("inviz_fl");
    if (checked_box.checked) {
    document.getElementById("inviz_mts2_fl").style.display="block"
    } else {
    document.getElementById("inviz_mts2_fl").style.display="none"
    }
}
