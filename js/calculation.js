function grpSwitch() {
  grp = window.grpSelect;
  
  var result = document.getElementById("result");
  for (i = 0; i < grp.length; i++) {
    grpName = window.grpSelect[i].value;
    window[grpName].style.display = "none";
  }
  window[grp.value].style.display = "";
  result.style.display="none";
  document.getElementById(c+ "amt").value=1;
}

function addCommas(nStr) {
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}


function convUnits(c) {
  amt = document.getElementById(c+ "amt").value;
  var result = document.getElementById("result");

  frUnit = window[c + "fr"].value;
  frVal = units[frUnit];
  toUnit = window[c + "to"].value;
  toVal = units[toUnit];

  if (frVal == undefined || toVal == undefined) {
    result.style.display = "none";
    return;
  }

  frAbbrev = abbrev[frUnit];
  toAbbrev = abbrev[toUnit];

  result.style.display = "";
  result.innerHTML = amt + " " + frAbbrev + " = " + ((amt*frVal)/toVal).toFixed(4) + " " + toAbbrev + " <br>";
  /*document.getElementById(c+ "amt").value=1;*/
  return true;
}

function convTmp() {
  amt = document.getElementById("tmpamt").value;
  var result = document.getElementById("result");
  result.style.display = "";
  frUnit = window["tmpfr"].value;
  frVal = units[frUnit];
  toUnit = window["tmpto"].value;
  toVal = units[toUnit];

  frAbbrev = abbrev[frUnit];
  toAbbrev = abbrev[toUnit];

  if (frUnit == "uDegc" && toUnit == "uDegf") { var res = parseInt(amt) * (9/5) + 32; var res2 = (((parseInt(amt)) + 459.67) * (5/9)) - 273.15 }
  if (frUnit == "uDegc" && toUnit == "uDegk") { var res = parseInt(amt) + 273.15; res2 = parseInt(amt) - 273.15 }
  if (frUnit == "uDegc" && toUnit == "uDegn") { var res = parseInt(amt)/(100/33); res2 = parseInt(amt)*(100/33) }
  if (frUnit == "uDegc" && toUnit == "uDegc") { var res = parseInt(amt); var res2 = parseInt(amt) }

  if (frUnit == "uDegf" && toUnit == "uDegc") { var res = (((parseInt(amt)) + 459.67) * (5/9)) - 273.15; var res2 = parseInt(amt) * (9/5) + 32 }
  if (frUnit == "uDegf" && toUnit == "uDegk") { var res = ((parseInt(amt)) + 459.67) * (5/9); res2 = (parseInt(amt) - 273.15) * (9/5) + 32 }
  if (frUnit == "uDegf" && toUnit == "uDegn") { var res = ((parseInt(amt) - 32)/(9/5))/(100/33); res2 = (parseInt(amt)*(100/33)) * (9/5) + 32 }
  if (frUnit == "uDegf" && toUnit == "uDegf") { var res = parseInt(amt); var res2 = parseInt(amt) }

  if (frUnit == "uDegk" && toUnit == "uDegc") { var res = parseInt(amt) - 273.15; var res2 = parseInt(amt) + 273.15 }
  if (frUnit == "uDegk" && toUnit == "uDegf") { var res = (parseInt(amt) - 273.15) * (9/5) + 32; res2 = ((parseInt(amt)) + 459.67) * (5/9) }
  if (frUnit == "uDegk" && toUnit == "uDegn") { var res = (parseInt(amt) - 273.15)/(100/33); res2 = parseInt(amt) * (100/33) + 273.15 }
  if (frUnit == "uDegk" && toUnit == "uDegk") { var res = parseInt(amt); var res2 = parseInt(amt) }

  if (frUnit == "uDegn" && toUnit == "uDegc") { var res = parseInt(amt)*(100/33); var res2 = parseInt(amt)/(100/33) }
  if (frUnit == "uDegn" && toUnit == "uDegf") { var res = (parseInt(amt)*(100/33)) * (9/5) + 32; res2 = ((parseInt(amt) - 32)/(9/5))/(100/33) }
  if (frUnit == "uDegn" && toUnit == "uDegk") { var res = parseInt(amt) * (100/33) + 273.15; res2 = (parseInt(amt) - 273.15)/(100/33) }
  if (frUnit == "uDegn" && toUnit == "uDegn") { var res = parseInt(amt); var res2 = parseInt(amt) }

  ;
  
  
  result.innerHTML = amt + " " + frAbbrev + " = " + res.toFixed(1) + " " + toAbbrev + " <br>";
  
  return true;
}
