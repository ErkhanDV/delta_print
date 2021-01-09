function for_print(evt) {
  evt.preventDefault();
  	
  let formdt = new FormData(this);

  let data = Object.fromEntries(formdt.entries());
  let mass_1 = ["ap", "dnr", "dt", "nt", "summa_mo"];
  for (let item of mass_1) {
  	document.getElementById(item).textContent = data[item];
	}

	let mass_2 = ["mts_1", "sms", "mts_2", "ps", "v220", "wl", "gl", "so" ];
	for (let item of mass_2) {
		if (data[item]) {
			document.getElementById(item).textContent = "V";
		}	else {
			document.getElementById(item).textContent = " ";
		}
	}

	let mass_3 = ["ooo", "gendir", "inn", "do", "dm", "dm_summa", "gorod", "ulitsa", "dom", "ofis"];
	for (let item of mass_3) {
		for (let spn of document.getElementsByClassName(item)) {
  		spn.textContent = data[item];
  	}
  }

	if (data.os && data.ts) {
		document.getElementById("os").textContent = "V";
		document.getElementById("ts").textContent = "V";
		document.getElementById("mes12").textContent = "V";
	}	else if (data.os) {
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
	}	else {
		document.getElementById("mes12").textContent = " ";
	}

  	
	window.print();

  }


let form = document.getElementById('printer');
form.addEventListener('submit', for_print);
  