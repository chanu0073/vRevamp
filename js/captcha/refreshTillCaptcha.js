if (document.URL.includes("registration.vitap.ac.in")) {
  return;
}

let captchaImg = document.querySelector("img.form-control")
let homePageNavbar = document.getElementById("stdForm");
if (captchaImg == null && homePageNavbar == null) {
  window.location.reload()
}
