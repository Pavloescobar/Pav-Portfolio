// popup

const the_button = document.querySelector(".js-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

document.addEventListener("DOMContentLoaded", () => {
  the_button.addEventListener("click", handleClick);
});

function handleClick(event) {
  modal.style.display = "block";
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// form validation

const form = document.getElementById("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const enquiry = document.getElementById("enquiries");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const enquiryValue = enquiry.value.trim();

  if (fullNameValue === "") {
    // show error
    //add class
    setErrorFor(fullName, "Name cannot be blank");
  } else {
    // add success
    setSuccessFor(fullName);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }
  if (enquiryValue.length <= 19) {
    setErrorFor(enquiry, "Min 20 characters");
  } else {
    setSuccessFor(enquiry);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector("small");
  //add error inside small
  small.innerText = message;
  // add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

const counter = document.getElementById("count");

function updateVisitCount() {
  fetch("https://api.countapi.xyz/update/Portfolio/pavfolio/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      counter.innerHTML = res.value;
    });
}
