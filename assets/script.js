var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// set item method
// give it a name and item

// localStorage.setItem("name", "austin engle");

// localStorage.getItem("name ")

// .val is pulling value of what user input
// function getLocalStorage(){
//     var v = localStorage.getItem(entryTime)
//     console.log(v)
// }

function save() {
  $("#btn1").on("click", function () {
    var entry = $("#time9").val();

    localStorage.setItem("9oclock", JSON.stringify(entry));
  });
}

function getLocalStorage() {
  var v = JSON.parse(localStorage.getItem("9oclock"));
  console.log(v);
  if (v !== null) {
    $("#time9").html(v);
  }
}
save();
getLocalStorage();

function save1() {
  $("#btn2").on("click", function () {
    var entry = $("#time10").val();

    localStorage.setItem("10oclock", JSON.stringify(entry));
  });
}

function getLocalStorage1() {
  var a = JSON.parse(localStorage.getItem("10oclock"));
  console.log(a);
  if (a !== null) {
    $("#time10").html(a);
  }
}
save1();
getLocalStorage1();

function save2() {
  $("#btn3").on("click", function () {
    var entry = $("#time11").val();

    localStorage.setItem("11oclock", JSON.stringify(entry));
  });
}

function getLocalStorage2() {
  var b = JSON.parse(localStorage.getItem("11oclock"));
  console.log(b);
  if (b !== null) {
    $("#time11").html(b);
  }
}
save2();
getLocalStorage2();

function save3() {
  $("#btn4").on("click", function () {
    var entry = $("#time12").val();

    localStorage.setItem("12oclock", JSON.stringify(entry));
  });
}

function getLocalStorage3() {
  var c = JSON.parse(localStorage.getItem("12oclock"));
  console.log(c);
  if (c !== null) {
    $("#time12").html(c);
  }
}
save3();
getLocalStorage3();

function save4() {
  $("#btn5").on("click", function () {
    var entry = $("#time13").val();

    localStorage.setItem("1oclock", JSON.stringify(entry));
  });
}

function getLocalStorage4() {
  var d = JSON.parse(localStorage.getItem("1oclock"));
  console.log(d);
  if (d !== null) {
    $("#time13").html(d);
  }
}
save4();
getLocalStorage4();

function save5() {
  $("#btn6").on("click", function () {
    var entry = $("#time14").val();

    localStorage.setItem("2oclock", JSON.stringify(entry));
  });
}

function getLocalStorage5() {
  var e = JSON.parse(localStorage.getItem("2oclock"));
  console.log(e);
  if (e !== null) {
    $("#time14").html(e);
  }
}
save5();
getLocalStorage5();

function save6() {
  $("#btn7").on("click", function () {
    var entry = $("#time15").val();

    localStorage.setItem("3oclock", JSON.stringify(entry));
  });
}

function getLocalStorage6() {
  var f = JSON.parse(localStorage.getItem("3oclock"));
  console.log(f);
  if (f !== null) {
    $("#time15").html(f);
  }
}
save6();
getLocalStorage6();

function save7() {
  $("#btn8").on("click", function () {
    var entry = $("#time16").val();

    localStorage.setItem("4oclock", JSON.stringify(entry));
  });
}

function getLocalStorage7() {
  var g = JSON.parse(localStorage.getItem("4oclock"));
  console.log(g);
  if (g !== null) {
    $("#time16").html(g);
  }
}
save7();
getLocalStorage7();

function save8() {
  $("#btn9").on("click", function () {
    var entry = $("#time17").val();

    localStorage.setItem("5oclock", JSON.stringify(entry));
  });
}

function getLocalStorage8() {
  var h = JSON.parse(localStorage.getItem("5oclock"));
  console.log(h);
  if (h !== null) {
    $("#time17").html(h);
  }
}
save8();
getLocalStorage8();
