const YesCheck = document.getElementById("YesCheck");
const NoCheck = document.getElementById("NoCheck");
const YesCheckGuests = document.getElementById("YesCheckGuests")

var GuestInputsLoaded = false
var GuestNameMax = 8

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
  if (YesCheckGuests.checked == true) {
    if (GuestInputsLoaded == false){
      GuestInputsLoaded = true
      Load_Guest_Inputs()
    }
  } else {
    if (GuestInputsLoaded == true){
      GuestInputsLoaded = false
      Unload_Guest_Inputs()
    }
  }
})

function Load_Guest_Inputs() {
  console.log("Loading guest")
  for (let Iteration = 1; Iteration <= GuestNameMax; Iteration++)
  {
    GuestElement = document.getElementById("GuestName"+Iteration)
    GuestElement.style.display = "inline";
    LineBreak = document.createElement('br')
    LineBreak.id = "Facade"
    if (Iteration % 2 == 0){
      GuestElement.insertAdjacentElement("afterend", LineBreak)
    }
  }
}

function Unload_Guest_Inputs() {
  console.log("Unloading guest")
  for (let Iteration = 1; Iteration <= GuestNameMax; Iteration++)
  {
    GuestElement = document.getElementById("GuestName"+Iteration)
    GuestElement.style.display = "none";
    if (Iteration % 2 == 0){
      document.getElementById("Facade").remove()
    }
  }
}