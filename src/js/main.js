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

function formattedDate(d=null) {
  d = d || new Date;
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());
  const year = String(d.getFullYear());

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return `${day}.${month}.${year}`;
}

function dnr_date() {
  document.getElementById("dnrdate").value = formattedDate();
}

document.addEventListener("DOMContentLoaded", function() {
  main_date();
  ShowUL();
  dnr_date();
 }, false);

function empty_ul() {
  let display_funk = "";
  if (document.getElementById("ofis_number").value === "") {
    display_funk = "none";
  } else {
    display_funk = "inline";
  }
  for (let item of document.getElementsByClassName("ofis_inviz")) {
    item.style.display = display_funk;
  }
}

function empty_fl () {
  if (document.getElementById("kvartira_number").value === "") {
    document.getElementById("kv_inviz_ank").style.display = "none";
  } else {
    document.getElementById("kv_inviz_ank").style.display = "inline";
  }
}

function for_print(evt) {

  for (let item of document.querySelectorAll("span")) {
    item.textContent = "";
  }
  
  evt.preventDefault();
    
  let formdt = new FormData(this);

  let data = Object.fromEntries(formdt.entries());
  let mass_1 = [ "ap", "dnr", "dt", "nt" ];
  for (let item of mass_1) {
    for (let cells of document.getElementsByClassName(item)) {
      cells.textContent = data[item];
    }
  }

  let mass_2 = [ "mts_1", "sms", "mts_2", "ps", "v220", "wl", "gl", "so" ];
  let jackdaw = "";
  for (let item of mass_2) {
    if (data[item]) {
      jackdaw = "V";
    } else {
      jackdaw = "";
    }
    for (let jacks of document.getElementsByClassName(item)) {
      jacks.textContent = jackdaw;
    }
  }

  let mass_3 = [ "do", "dm", "dm_summa", "gorod", "ulitsa", "dom", "main_date", "ob_number", "summa_mo" ];
  for (let item of mass_3) {
    for (let spn of document.getElementsByClassName(item)) {
      spn.textContent = data[item];
    }
  }

  let vkts = "";
  if (data.ts && data.vkts) {
    vkts = "+ВКТС";
  } else if (data.vkts) {
    vkts = "ВКТС";
  } else {
    vkts = "";
  }
  for (let item of document.getElementsByClassName("vkts")) {
      item.textContent = vkts;
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
    let os_ts = "";
      for (let item of mass_5) {
        if (data[item]) {
          os_ts = "V";
        } else {
          os_ts = " ";
        }
        for (let cell of document.getElementsByClassName(item)) {
          cell.textContent = os_ts;
        }
      }
    let mass_6 = [ "fio", "bday", "pas_num", "pas_date", "pas_whoes", "pas_propis", "kvartira" ];
      for (let item of mass_6) {
        for (let spn of document.getElementsByClassName(item)) {
        spn.textContent = data[item];
        }
      }
  }

  empty_fl();
  empty_ul();

  window.print();
}

let form = document.getElementById('printer');
form.addEventListener('submit', for_print);

function ShowFL() {
  let fl_array = document.getElementsByClassName("only_fl");
  for (let item of fl_array) {
    item.style.display = "block";
  }
  let ul_array = document.getElementsByClassName("only_ul");
  for (let item of ul_array) {
    item.style.display = "none";
  }
  check_ul_fl = false;
}
function ShowUL() {
  let fl_array = document.getElementsByClassName("only_fl");
  for (let item of fl_array) {
    item.style.display = "none";
  }
  let ul_array = document.getElementsByClassName("only_ul");
  for (let item of ul_array) {
    item.style.display = "block";
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
