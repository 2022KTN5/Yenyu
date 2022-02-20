const counters = document.querySelectorAll('.counter');
const speed = 600;

counters.forEach(function (counter) {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});



// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }

  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}



function myFunction() {
    var z = document.getElementById("pwd-0");
    if (z.type === "password") {
        z.type = "text";
    } else {
        z.type = "password";
    }

    var x = document.getElementById("pwd-1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    
    var y = document.getElementById("pwd-2");
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }

    var xx = document.getElementById("pwd-3");
    if (xx.type === "password") {
        xx.type = "text";
    } else {
        xx.type = "password";
    }
    
    var yy = document.getElementById("pwd-4");
    if (yy.type === "password") {
        yy.type = "text";
    } else {
        yy.type = "password";
    }

    var a = document.getElementById("pwd-5");
        if (a.type === "password") {
            a.type = "text";
        } else {
            a.type = "password";
        }
}
