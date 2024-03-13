console.log("Script funcionando");

// Vlidating the forms
const form = document.getElementById("form");
const day = document.getElementById("fday");
const month = document.getElementById("fmonth");
const year = document.getElementById("fyear");
const button = document.getElementById("submitBtn");

//Adding Limits to the Character on th input forms
day.addEventListener("input", function () {
  const textLength = day.value.length;
});

button.addEventListener("click", (e) => {
  e.preventDefault();

  validateInput();
});

const setError = (element, message) => {
  const inputForm = element.parentElement;
  const errorDisplay = inputForm.querySelector(".error");

  errorDisplay.innerText = message;
  inputForm.classList.add("error");
  inputForm.classList.remove("success");
};

const setSuccess = (element) => {
  const inputForm = element.parentElement;
  const errorDisplay = inputForm.querySelector(".error");

  errorDisplay.innerText = "";
  inputForm.classList.add("success");
  inputForm.classList.remove("error");
};

function validateInput() {
  const dayValue = day.value.trim();
  const monthValue = month.value.trim();
  const yearValue = year.value.trim();

  // DAY
  if (dayValue === "") {
    setError(day, "This field is required");
  } else {
    setSuccess(day);
    if (dayValue < 1 || dayValue > 31) {
      setError(day, "Must be a valid day");
    } else {
      setSuccess(day);
    }
  }

  //MONTH
  if (monthValue === "") {
    setError(month, "This field is required");
  } else {
    setSuccess(month);
    if (monthValue < 1 || monthValue > 12) {
      setError(month, "Must be a valid month");
    } else {
      setSuccess(month);
    }
  }

  //YEAR
  if (yearValue === "") {
    setError(year, "This field is required");
  } else {
    setSuccess(year);
    if (yearValue > 2024) {
      setError(year, "Must be in the past");
    }
  }
}
