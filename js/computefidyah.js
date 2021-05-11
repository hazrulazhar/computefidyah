// Browser detect code
var ie4=document.all
var ns4=document.layers
var ns6=document.getElementById&&!document.all

var priceofriceperkati="1.40";

function writeKati() {
	if(document.getElementById("priceofriceperkati1")) {
		document.getElementById("priceofriceperkati1").innerHTML = priceofriceperkati;
	}
}

function changeYears() {
	if (ns4) {
	ns4.totalnumofyears2.document.write(frmFid.totalnumofyears.value);
	ns4.totalnumofyears2.document.close();
	}
	else if (ie4) {
	ie4.totalnumofyears2.innerHTML=frmFid.totalnumofyears.value
	}
	else if (ns6) {
	document.getElementById("totalnumofyears2").innerHTML = document.frmFid.totalnumofyears.value;
	}
}

function computeFidyah() {
var totalnumofyears=document.frmFid.totalnumofyears.value;
var numofdaysperramadan=document.frmFid.numofdaysperramadan.value;
var totalnumoframadandays;
var adddays=document.frmFid.adddays.value;
var totalfidyahdays;
var totalfidyahpayable;
var y;
var lasty;
var midy=0;

//Check for zeros
	if (totalnumofyears=="") {
		totalnumofyears=0;
	}

	if (numofdaysperramadan=="") {
		numofdaysperramadan=0;
	}

	if (adddays=="") {
		adddays=0;
	}

for (i=0; i < totalnumofyears; i++) {
y=parseInt(numofdaysperramadan)*i;
midy=midy+y;
}

lasty=parseInt(numofdaysperramadan)*parseInt(totalnumofyears);

totalnumoframadandays=parseInt(midy)+parseInt(lasty);
totalfidyahdays=parseInt(totalnumoframadandays)+parseInt(adddays);

totalfidyahpayable=parseInt(totalfidyahdays)*parseFloat(priceofriceperkati);
totalfidyahpayable=totalfidyahpayable.toFixed(2) //Rounds off to 2 decimal place

	if (ns4) {
	ns4.totalnumoframadandays.document.write(totalnumoframadandays);
	ns4.totalnumoframadandays.document.close();
	ns4.totalfidyahdays.document.write(totalfidyahdays);
	ns4.totalfidyahdays.document.close();
	ns4.totalfidyahpayable.document.write(totalfidyahpayable);
	ns4.totalfidyahpayable.document.close();
	}
	else if (ie4) {
	ie4.totalnumoframadandays.innerHTML=totalnumoframadandays, ie4.totalfidyahdays.innerHTML=totalfidyahdays, ie4.totalfidyahpayable.innerHTML=totalfidyahpayable;
	}
	else if (ns6) {
	document.getElementById("totalnumoframadandays").innerHTML = totalnumoframadandays, document.getElementById("totalfidyahdays").innerHTML=totalfidyahdays, document.getElementById("totalfidyahpayable").innerHTML=totalfidyahpayable;
	}
}

window.onload = writeKati;
