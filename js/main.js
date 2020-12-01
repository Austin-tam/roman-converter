document.getElementById("btn-1").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "1";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "1";
  };
});

document.getElementById("btn-2").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "2";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "2";
  };
});

document.getElementById("btn-3").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "3";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "3";
  };
});

document.getElementById("btn-4").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "4";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "4";
  };
});

document.getElementById("btn-5").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "5";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "5";
  };
});

document.getElementById("btn-6").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "6";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "6";
  };
});

document.getElementById("btn-7").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "7";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "7";
  };
});

document.getElementById("btn-8").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "8";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "8";
  };
});

document.getElementById("btn-9").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "9";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "9";
  };
});

document.getElementById("btn-0").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {

  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "0";
  };
});

document.getElementById("btn-clear").addEventListener("click", function() {
  document.getElementById("roman-input").value = "";
});

document.getElementById("btn-back").addEventListener("click", function() {
  document.getElementById("roman-input").value = document.getElementById("roman-input").value.substring(0, document.getElementById("roman-input").value.length - 1);
});
