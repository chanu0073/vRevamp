let captchaImg = document.querySelector("img.form-control")
let homePageNavbar = document.getElementById("stdForm");
let regCaptchaElement = document.getElementById("captcha_id") ||
                    document.querySelector('img[alt*="captcha" i]') ||
                    document.querySelector(".captcha-container");
let regForm = document.getElementById("studLogin");
let regInstructionForm = document.getElementById("checkRegistration");
let regPageWrapper = document.getElementById("page-wrapper");
if ((captchaImg == null && homePageNavbar == null) || (regCaptchaElement == null && regForm == null && regInstructionForm == null && regPageWrapper == null)) {
  window.location.reload()
}
