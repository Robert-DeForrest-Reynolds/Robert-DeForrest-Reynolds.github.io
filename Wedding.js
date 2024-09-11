const YesCheck = document.getElementById("YesCheck");
const NoCheck = document.getElementById("NoCheck");

YesCheck.addEventListener("change", function() {
  if (YesCheck.checked) {
    if (NoCheck.checked){
        NoCheck.checked = false
    }
  }
});

NoCheck.addEventListener("change", function() {
  if (NoCheck.checked) {
    if (YesCheck.checked){
        YesCheck.checked = false
    }
  }
});