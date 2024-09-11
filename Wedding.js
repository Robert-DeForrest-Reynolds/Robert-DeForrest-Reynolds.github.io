const YesCheck = document.getElementById("YesCheck");
const NoCheck = document.getElementById("NoCheck");

YesCheck.addEventListener("change", function() {
  if (this.checked) {
    if (NoCheck.checked){
        NoCheck.checked = false
    }
  }
});

NoCheck.addEventListener("change", function() {
  if (this.checked) {
    if (YesCheck.checked){
        YesCheck.checked = false
    }
  }
});