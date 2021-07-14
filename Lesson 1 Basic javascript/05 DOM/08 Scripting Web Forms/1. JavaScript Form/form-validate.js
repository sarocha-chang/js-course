function validateFormOnSubmit(contact) {
  console.log(`contact`, contact);
  reason = "";
  reason += validateEmpty(contact.name);
  reason += validateEmail(contact.email);
  reason += validatePhone(contact.phone);

  console.log(reason);
  if (reason.length > 0) {
    return false;
  } else {
    return false;
  }
}

// validate required fields
function validateEmpty(name) {
  var error = "";

  if (name.value.length == 0) {
    name.style.background = "Yellow";
    document.getElementById("name-error").innerHTML =
      "The required field has not been filled in";
    var error = "1";
  } else {
    name.style.background = "White";
    document.getElementById("name-error").innerHTML = "";
  }
  return error;
}

// validate email as required field and format
function trim(s) {
  return s.replace(/^\s+|\s+$/, "");
}

function validateEmail(email) {
  var error = "";
  var temail = trim(email.value); // value of field with whitespace trimmed off
  var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
  var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

  if (email.value == "") {
    email.style.background = "Yellow";
    document.getElementById("email-error").innerHTML =
      "Please enter an email address.";
    var error = "2";
  } else if (!emailFilter.test(temail)) {
    //test email for illegal characters
    email.style.background = "Yellow";
    document.getElementById("email-error").innerHTML =
      "Please enter a valid email address.";
    var error = "3";
  } else if (email.value.match(illegalChars)) {
    email.style.background = "Yellow";
    var error = "4";
    document.getElementById("email-error").innerHTML =
      "Email contains invalid characters.";
  } else {
    email.style.background = "White";
    document.getElementById("email-error").innerHTML = "";
  }
  return error;
}

// validate phone for required and format
function validatePhone(phone) {
  var error = "";
  var stripped = phone.value.replace(/[\(\)\.\-\ ]/g, "");

  if (phone.value == "") {
    document.getElementById("test").innerHTML = "Please enter a phone number";
    phone.style.background = "Yellow";
    var error = "6";
  } else if (isNaN(parseInt(stripped))) {
    var error = "5";
    document.getElementById("test").innerHTML =
      "The phone number contains illegal characters.";
    phone.style.background = "Yellow";
  } else if (stripped.length < 10) {
    var error = "6";
    document.getElementById("test").innerHTML =
      "The phone number is too short.";
    phone.style.background = "Yellow";
  } else {
    phone.style.background = "White";
    document.getElementById("test").innerHTML = "";
  }
  return error;
}
