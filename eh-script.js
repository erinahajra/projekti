function validateForm() {
  alert("Form sumbitted succesfully!");
  return true;
}
// DARK MODE TOGGLE
const toggleBtn = document.getElementById("eH-toggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("eH-dark");
  });
}