const form = document.getElementById("form");
console.log(form);

const firstName = document.getElementById("f-name");
const lastName = document.getElementById("l-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
let firstTime = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  firstTime = true;
});

const formInputs = [firstName, lastName, email, password];

formInputs.forEach((input) => {
  input.addEventListener("keyup", () => {
    if (firstTime) {
      checkInputs();
    }
  });
});

function checkInputs() {
  //Get values from the inputs and remove all white space
  const firstnameValue = firstName.value.trim();
  const lastnameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstnameValue === "") {
    //add error class
    setErrorFor(firstName, "First name cannot be blank");
  } else {
    //add success class
    setSuccessFor(firstName);
  }

  if (lastnameValue === "") {
    //show error
    //add error class
    setErrorFor(lastName, "Last name cannot be blank");
  } else {
    //add success class
    setSuccessFor(lastName);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isMail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "Password is too short, minimum 7");
  } else {
    setSuccessFor(password);
  }
}

// creating the setErrorFor and setSuccessFor function
function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control div
  const small = formControl.querySelector("small");

  //Add error message inside the small tag
  small.innerText = message;

  //Add error class
  formControl.className = "child error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "child success";
}

function isMail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
}
