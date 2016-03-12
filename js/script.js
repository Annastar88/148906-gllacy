var feedback_btn = document.querySelector(".feedback-btn");
var feedback_box = document.querySelector(".feedback-box");
var feedback_box_close = feedback_box.querySelector(".feedback-box-close");
var feedback_box_overlay = document.querySelector(".feedback-box-overlay")
var feedback_form = feedback_box.querySelector("form");
var feedback_name = feedback_box.querySelector("[name=feedback-name]");
var feedback_mail = feedback_box.querySelector("[name=feedback-mail]");
var feedback_textarea = feedback_box.querySelector("[name=feedback-textarea]");
var storage_name = localStorage.getItem("name");
var storage_mail = localStorage.getItem("mail");
    
feedback_btn.addEventListener("click", function(event) {
  event.preventDefault();
  feedback_box.classList.add("feedback-box-show");
  feedback_name.focus();
  if (storage_name) {
  feedback_name.value = storage_name;
  feedback_mail.focus();
  } else {
  feedback_name.focus();};
  if (storage_mail) {
  feedback_mail.value = storage_mail;
  feedback_textarea.focus();
  } else {
  feedback_mail.focus();};
});

feedback_btn.addEventListener("click", function(event) {
  event.preventDefault();
  feedback_box_overlay.classList.add("feedback-box-overlay-show");
});

feedback_form.addEventListener("submit", function(event) {
  if (!feedback_name.value || !feedback_mail.value || !feedback_textarea.value) {
  event.preventDefault();
  feedback_box.classList.add("feedback-error");} else {
  localStorage.setItem("name", feedback_name.value);
  localStorage.setItem("mail", feedback_mail.value);
}
});

feedback_box_close.addEventListener("click", function(event) {
  event.preventDefault();
  feedback_box.classList.remove("feedback-box-show");
  feedback_box.classList.remove("feedback-error");
  feedback_box_overlay.classList.remove("feedback-box-overlay-show");
});

feedback_box_overlay.addEventListener("click", function(event) {
  event.preventDefault();
  feedback_box.classList.remove("feedback-box-show");
  feedback_box.classList.remove("feedback-error");
  feedback_box_overlay.classList.remove("feedback-box-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
  if (feedback_box.classList.contains("feedback-box-show")) {
  feedback_box.classList.remove("feedback-box-show");
  feedback_box.classList.remove("feedback-error");
  feedback_box_overlay.classList.remove("feedback-box-overlay-show");
  }
  }
});
