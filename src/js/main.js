  function for_print(evt) {
  	evt.preventDefault();
  	
  	let formdt = new FormData(this);
  	
  	let data = Object.fromEntries(formdt.entries());
  	document.getElementsByClassName("ooo").textContent = data.ooo;
  	document.getElementsByClassName("gendir").textContent = data.gendir;
  	document.getElementsByClassName("inn").textContent = data.inn;
  	document.getElementsByClassName("do").textContent = data.do;
  	document.getElementsByClassName("dm").textContent = data.dm;
  	document.getElementsByClassName("dm_summa").textContent = data.dm_summa;
  	document.getElementsByClassName("ap").textContent = data.ap;
  	document.getElementsByClassName("dnr").textContent = data.dnr;
  	document.getElementsByClassName("summa_mo").textContent = data.summa_mo;
  	document.getElementsByClassName("dt").textContent = data.dt;
  	document.getElementsByClassName("nt").textContent = data.nt;
  	document.getElementsByClassName("gorod").textContent = data.gorod;
  	document.getElementsByClassName("ulitsa").textContent = data.ulitsa;
  	document.getElementsByClassName("dom").textContent = data.dom;
  	document.getElementsByClassName("ofis").textContent = data.ofis;
		
		
		if (data.mts_1) {
			document.getElementsByClassName("mts_1").textContent = "V";
		}	else {
			document.getElementsByClassName("mts_1").textContent = " ";
		}
		if (data.os && data.ts) {
			document.getElementsByClassName("os").textContent = "V";
			document.getElementsByClassName("ts").textContent = "V";
			document.getElementsByClassName("12mes").textContent = "V";
		}	else if (data.os) {
			document.getElementsByClassName("os").textContent = "V";
			document.getElementsByClassName("9mes").textContent = "V";
		} else if (data.ts) {
			document.getElementsByClassName("ts").textContent = "V";
			document.getElementsByClassName("6mes").textContent = "V";
		} else {
			document.getElementsByClassName("os").textContent = " ";
			document.getElementsByClassName("ts").textContent = " ";
			document.getElementsByClassName("12mes").textContent = " ";
			document.getElementsByClassName("9mes").textContent = " ";
			document.getElementsByClassName("6mes").textContent = " ";
		}
		if (data.vkts) {
			document.getElementsByClassName("vkts").textContent = "+ВКТС";
		}	else {
			document.getElementsByClassName("vkts").textContent = " ";
		}
		if (data.sms) {
			document.getElementsByClassName("sms").textContent = "V";
		}	else {
			document.getElementsByClassName("sms").textContent = " ";
		}
		if (data.mts_2) {
			document.getElementsByClassName("mts_2").textContent = "V";
		}	else {
			document.getElementsByClassName("mts_2").textContent = " ";
		}
		if (data.ps) {
			document.getElementsByClassName("ps").textContent = "V";
		}	else {
			document.getElementsByClassName("ps").textContent = " ";
		}
		if (data[220]) {
			document.getElementsByClassName("220").textContent = "V";
		}	else {
			document.getElementsByClassName("220").textContent = " ";
		}
		if (data.wl) {
			document.getElementsByClassName("wl").textContent = "V";
		}	else {
			document.getElementsByClassName("wl").textContent = " ";
		}
		if (data.gl) {
			document.getElementsByClassName("gl").textContent = "V";
		}	else {
			document.getElementsByClassName("gl").textContent = " ";
		}
		if (data.so) {
			document.getElementsByClassName("so").textContent = "V";
		}	else {
			document.getElementsByClassName("so").textContent = " ";
		}
		window.print();

  }


var form = document.getElementById('printer');
form.addEventListener('submit', for_print);	
