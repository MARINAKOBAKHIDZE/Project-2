$(document).ready(function () {

  // Get references to page elements
  var firstNameInput = $("#firstNameInput");
  var lastNameInput = $("#lastNameInput");
  var emailInput = $("#emailInput");
  var usernameInput = $("#validationCustomUsername");
  var addressLine1Input = $("#addressLine1");
  var addressLine2Input = $("#addressLine2");
  var cityInput = $("#cityInput");
  var stateInput = $("#stateInput");
  var zipCodeInput = $("#zipCodeInput");
  var SSNinput = $("#SSNinput");
  var DOBinput = $("#datePicker");
  var initialDepositInput = $("#initialDeposit");
  var CHKcheckbox = $("#checking-checkbox");
  var SAVcheckbox = $("#savings-checkbox");

  // Declaring a create user function
  function createUser(userData){
    $.post("/api/users", userData).then(getUsers);
  }
  
  function getUsers() {
    $.get("/api/users", function(data) {
      console.log(data)
    });
  }
  // Calling the createUser function
  

  function handleFormSubmit(event){
    event.preventDefault();

    createUser({
      firstName: firstNameInput.val(),
      lastName: lastNameInput.val(),
      email: emailInput.val(),
      username: usernameInput.val(),
      addressLine1: addressLine1Input.val(),
      addressLine2: addressLine2Input.val(),
      city: cityInput.val(),
      state: stateInput.val(),
      zip: zipCodeInput.val(),
      SSN: SSNinput.val(),
      DOB: DOBinput.val(),
    });
  }

  // Add event listeners to the submit and delete buttons

  $(document).on("click", "#createAcctButton", handleFormSubmit);

}); // end of document.ready