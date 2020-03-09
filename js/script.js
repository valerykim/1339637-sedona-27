var popup = document.querySelector(".form-wrap"); 
   
if (popup) {
  popup.classList.toggle("form-show");
}

var button = document.querySelector(".offers-button");

var checkin = popup.querySelector("[name=date-check-in]");
var checkout = popup.querySelector("[name=date-check-out]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");
var form = popup.querySelector("form");

button.addEventListener("click", function (evt) {
    
    evt.preventDefault();
    popup.classList.toggle("form-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!checkin.value || !checkout.value || !adults.value || !children.value) {
    evt.preventDefault();
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
    if (!checkout.value) {
      checkout.focus();
      if (!checkin.value) { 
        checkin.focus();
}
    } else if (!adults.value) { 
      adults.focus();
    } else children.focus();
  }
});