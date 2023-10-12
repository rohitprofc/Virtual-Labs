var res1 = document.getElementById("result1");
var res2 = document.getElementById("result2");
var as = document.getElementById("areaSpace");
var ps = document.getElementById("perimetreSpace");
var s = document.getElementById("sideLength");

function calcArea() {
  if (res1.style.display == "none") {
    res1.style.display = "block";
    as.setAttribute("class", "animate__animated animate__flipInX col mt-4");
    var sideLength = parseFloat(s.value);
    if (sideLength > 10000) {
      alert("Please enter smaller number");
    } else if (sideLength < 0) {
      alert("Please enter bigger number");
    } else {
      var result1 = sideLength * sideLength;
      res1.innerHTML = "Area: " + result1;
    }
  } else {
    res1.style.display = "none";
  }
}
function calcPerimetre() {
  if (res2.style.display == "none") {
    res2.style.display = "block";
    ps.setAttribute("class", "animate__animated animate__flipInX col mt-4");

    var sideLength = parseFloat(s.value);
    if (sideLength > 10000) {
      alert("Please enter smaller number");
    } else if (sideLength < 0) {
      alert("Please enter bigger number");
    } else {
      var result2 = 4 * sideLength;
      res2.innerHTML = "Perimetre: " + result2;
    }
    res1res2.style.display = "none";
  }
}

function clearAll() {
  res1.innerHTML = "";
  res2.innerHTML = "";
  s.value = "";

  if (res1.style.display == "none") {
    res1.style.display = "inline";
  } else {
    as.setAttribute("class", "animate__animated animate__flipOutX col mt-4");
    res1.style.display = "none";
  }
  if (res2.style.display == "none") {
    res2.style.display = "inline";
  } else {
    ps.setAttribute("class", "animate__animated animate__flipOutX col mt-4");
    res2.style.display = "none";
  }
}
