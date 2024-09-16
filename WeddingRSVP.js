const YesCheck = document.getElementById("YesCheck");
const NoCheck = document.getElementById("NoCheck");
const YesCheckGuests = document.getElementById("YesCheckGuests")


var GuestInputsLoaded = false
var GuestNameMax = 8

// for (let Iteration = 0; Iteration < GuestNameMax; Iteration++){
//   document.getElementById("GuestName" + Iteration).style.display = none
// }

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

YesCheckGuests.addEventListener("change", function() {
  if (YesCheckGuests) {
    if (GuestInputsLoaded == false){
      GuestInputsLoaded = true
      Load_Guest_Inputs()
    }
  }
})

function Load_Guest_Inputs() {
  console.log("Loading guest")
  for (let Iteration = 1; Iteration <= GuestNameMax; Iteration++)
  {
    GuestElement = document.getElementById("GuestName"+Iteration)
    GuestElement.style.display = "inline";
    if (Iteration % 2 == 0){
      GuestElement.insertAdjacentElement("afterend", document.createElement('br'))
    }
  }
}