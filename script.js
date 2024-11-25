function clearDisplay() {
  document.getElementById("screen").value = "";
}

function operator2() {
  document.getElementById("screen").value += "+";
}


function operator7() {
    document.getElementById("screen").value = eval(
      document.getElementById("screen").value
    );
  }
  
function operator4() {
  document.getElementById("screen").value += "-";
}

function operator5() {
  document.getElementById("screen").value += "%";
}

function operator1() {
  document.getElementById("screen").value += "*";
}

function operator3() {
  document.getElementById("screen").value += "/";
}

function number7() {
  document.getElementById("screen").value += "7";
}

function number8() {
  document.getElementById("screen").value += "8";
}

function number9() {
  document.getElementById("screen").value += "9";
}

function number6() {
  document.getElementById("screen").value += "6";
}

function number5() {
  document.getElementById("screen").value += "5";
}

function number4() {
  document.getElementById("screen").value += "4";
}

function number3() {
  document.getElementById("screen").value += "3";
}

function number2() {
  document.getElementById("screen").value += "2";
}

function number1() {
  document.getElementById("screen").value += "1";
}

function number0() {
  document.getElementById("screen").value += "0";
}

function operator8() {
  document.getElementById("screen").value += ".";
}
