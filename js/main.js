//Event listener for when button "1" is clicked
document.getElementById("btn-1").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "1";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "1";
  };
});

//Event listener for when button "2" is clicked
document.getElementById("btn-2").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "2";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "2";
  };
});

//Event listener for when button "3" is clicked
document.getElementById("btn-3").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "3";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "3";
  };
});

//Event listener for when button "4" is clicked
document.getElementById("btn-4").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "4";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "4";
  };
});

//Event listener for when button "5" is clicked
document.getElementById("btn-5").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "5";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "5";
  };
});

//Event listener for when button "6" is clicked
document.getElementById("btn-6").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "6";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "6";
  };
});

//Event listener for when button "7" is clicked
document.getElementById("btn-7").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "7";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "7";
  };
});

//Event listener for when button "8" is clicked
document.getElementById("btn-8").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "8";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "8";
  };
});

//Event listener for when button "9" is clicked
document.getElementById("btn-9").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {
    document.getElementById("roman-input").value = "9";
  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "9";
  };
});

//Event listener for when button "0" is clicked
document.getElementById("btn-0").addEventListener("click", function() {
  if (document.getElementById("roman-input").value === "") {

  } else {
    document.getElementById("roman-input").value = document.getElementById("roman-input").value + "0";
  };
});

//Event listener for when the clear button, "C", is clicked
document.getElementById("btn-clear").addEventListener("click", function() {
  document.getElementById("roman-input").value = "";
  document.getElementById("roman-desc").innerText = "";
  document.getElementById("roman-number").innerText = "";
});

//Event listener for when the back button, "BACK", is clicked
document.getElementById("btn-back").addEventListener("click", function() {
  document.getElementById("roman-input").value = document.getElementById("roman-input").value.substring(0, document.getElementById("roman-input").value.length - 1);
  document.getElementById("roman-desc").innerText = "";
  document.getElementById("roman-number").innerText = "";
});

//Event listener for when the enter button, "ENTER", is clicked
document.getElementById("btn-enter").addEventListener("click", function() {
  let num = parseInt(document.getElementById("roman-input").value);
  if (num >= 1 && num <= 3999) {
    let answer = convertToRoman(num);
    document.getElementById("roman-desc").innerText = "The Roman numeral equivalent of the decimal number " + num + " is:";
    document.getElementById("roman-number").innerText = answer;
  } else {
    document.getElementById("roman-desc").innerText = "ERROR: The decimal number you selected is not within the range of 1-3999!";
    document.getElementById("roman-number").innerText = "";
  }
});

//Event listener for when the enter key on the keyboard is pressed
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn-enter").click();
  }
});

//Recursive function that converts decimal numbers into it's Roman numeral equivalent.
//@param {number} num
//@return {string}
function convertToRoman(num) {
  if (num == 0) {
      return "";
  }

  let ans = "";

  switch (num.toString().length) {
    case 4:
      ans += "M";
      num -= 1000;
      return ans + convertToRoman(num)
    case 3:
      if (num >= 900) {
        ans += "CM";
        num -= 900;
      } else if (num >= 500) {
        ans += "D";
        num -= 500;
      } else if (num >= 400) {
        ans += "CD";
        num -= 400;
      } else {
        ans += "C";
        num -= 100;
      }

      return ans + convertToRoman(num)
    case 2:
      if (num >= 90) {
        ans += "XC";
        num -= 90;
      } else if (num >= 50) {
        ans += "L";
        num -= 50;
      } else if (num >= 40) {
        ans += "XL";
        num -= 40;
      } else {
        ans += "X";
        num -= 10;
      }
      return ans + convertToRoman(num)
    case 1:
      if (num == 9) {
        ans += "IX";
        num -= 9;
      } else if (num >= 5) {
        ans += "V"
        num -= 5;
      } else if (num == 4) {
        ans += "IV";
        num -= 4;
      } else {
        ans += "I";
        num -= 1;
      }
      return ans + convertToRoman(num)
  }
}
