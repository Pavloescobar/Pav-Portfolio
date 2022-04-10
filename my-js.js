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
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}
