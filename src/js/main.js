  function for_print(evt) {
  	evt.preventDefault();
  	
  	let formdt = new FormData(this);
  	
  	let data = Object.fromEntries(formdt.entries());
  	document.getElementById("ap").textContent = data.ap;
  	document.getElementById("dnr").textContent = data.dnr;
  	document.getElementById("dt").textContent = data.dt;
  	document.getElementById("nt").textContent = data.nt;
  	document.getElementById("summa_mo").textContent = data.summa_mo;
  	  	
		if (data.mts_1) {
			document.getElementById("mts_1").textContent = "V";
		}	else {
			document.getElementById("mts_1").textContent = " ";
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
		if (data.sms) {
			document.getElementById("sms").textContent = "V";
		}	else {
			document.getElementById("sms").textContent = " ";
		}
		if (data.mts_2) {
			document.getElementById("mts_2").textContent = "V";
		}	else {
			document.getElementById("mts_2").textContent = " ";
		}
		if (data.ps) {
			document.getElementById("ps").textContent = "V";
		}	else {
			document.getElementById("ps").textContent = " ";
		}
		if (data.v220) {
			document.getElementById("v220").textContent = "V";
		}	else {
			document.getElementById("v220").textContent = " ";
		}
		if (data.wl) {
			document.getElementById("wl").textContent = "V";
		}	else {
			document.getElementById("wl").textContent = " ";
		}
		if (data.gl) {
			document.getElementById("gl").textContent = "V";
		}	else {
			document.getElementById("gl").textContent = " ";
		}
		if (data.so) {
			document.getElementById("so").textContent = "V";
		}	else {
			document.getElementById("so").textContent = " ";
		}
		if ((data.ts) && (data.os)) {
			document.getElementById("mes12").textContent = "V";
		}	else {
			document.getElementById("mes12").textContent = " ";
		}

		for (let spn of document.getElementsByClassName("ooo")) {
  	spn.textContent = data.ooo;
  	}
  	for (let spn of document.getElementsByClassName("gendir")) {
  	spn.textContent = data.gendir;
  	}
		for (let spn of document.getElementsByClassName("inn")) {
  	spn.textContent = data.inn;
  	}
  	for (let spn of document.getElementsByClassName("do")) {
  	spn.textContent = data.do;
  	}
  	for (let spn of document.getElementsByClassName("dm")) {
  	spn.textContent = data.dm;
  	}
  	for (let spn of document.getElementsByClassName("dm_summa")) {
  	spn.textContent = data.dm_summa;
  	}
  	for (let spn of document.getElementsByClassName("gorod")) {
  	spn.textContent = data.gorod;
  	}
  	for (let spn of document.getElementsByClassName("ulitsa")) {
  	spn.textContent = data.ulitsa;
  	}
  	for (let spn of document.getElementsByClassName("dom")) {
  	spn.textContent = data.dom;
  	}
  	for (let spn of document.getElementsByClassName("ofis")) {
  	spn.textContent = data.ofis;
  	}
  	
		window.print();

  }


let form = document.getElementById('printer');
form.addEventListener('submit', for_print);	

  