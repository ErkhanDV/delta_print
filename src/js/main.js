  function for_print(evt) {
  	evt.preventDefault();
  	
  	let formdt = new FormData(this);
  	
  	let data = Object.fromEntries(formdt.entries());
  	document.getElementById("ooo").textContent = data.ooo;
  	document.getElementById("gendir").textContent = data.gendir;
  	document.getElementById("inn").textContent = data.inn;
  	document.getElementById("do").textContent = data.do;
  	document.getElementById("dm").textContent = data.dm;
  	document.getElementById("dm_summa").textContent = data.dm_summa;
  	document.getElementById("ap").textContent = data.ap;
  	document.getElementById("dnr").textContent = data.dnr;
  	document.getElementById("summa_mo").textContent = data.summa_mo;
  	document.getElementById("dt").textContent = data.dt;
  	document.getElementById("nt").textContent = data.nt;
  	document.getElementById("gorod").textContent = data.gorod;
  	document.getElementById("ulitsa").textContent = data.ulitsa;
  	document.getElementById("dom").textContent = data.dom;
  	document.getElementById("ofis").textContent = data.ofis;
		
		
		if (data.mts_1) {
			document.getElementById("mts_1").textContent = "V";
		}	else {
			document.getElementById("mts_1").textContent = " ";
		}
		if (data.os && data.ts) {
			document.getElementById("os").textContent = "V";
			document.getElementById("ts").textContent = "V";
			document.getElementById("12mes").textContent = "V";
		}	else if (data.os) {
			document.getElementById("os").textContent = "V";
			document.getElementById("9mes").textContent = "V";
		} else if (data.ts) {
			document.getElementById("ts").textContent = "V";
			document.getElementById("6mes").textContent = "V";
		} else {
			document.getElementById("os").textContent = " ";
			document.getElementById("ts").textContent = " ";
			document.getElementById("12mes").textContent = " ";
			document.getElementById("9mes").textContent = " ";
			document.getElementById("6mes").textContent = " ";
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
		if (data[220]) {
			document.getElementById("220").textContent = "V";
		}	else {
			document.getElementById("220").textContent = " ";
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
			document.getElementById("12mes").textContent = "V";
		}	else {
			document.getElementById("12mes").textContent = " ";
		}
		window.print();

  }


let form = document.getElementById('printer');
form.addEventListener('submit', for_print);	

  