function toggleModal() {
    const guestModal = document.getElementById("guest-modal");
    guestModal.style.display = guestModal.style.display === "block" ? "none" : "block";
  }
  

 
    function updateGuest() {
        const id = document.getElementById("id").value;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const mobile = document.getElementById("mobile").value;
        const notes = document.getElementById("notes").value;
        const building = document.getElementById("building").value;
        const floor = document.getElementById("floor").value;
        const host = document.getElementById("host").value;
    
        var tableBody = document.getElementById("guest-table");
        var detailsRow = document.getElementById("detailsRow");
    
        // If detailsRow already exists, remove it
        if(id.length == 9 && mobile.length == 10) {
   
            var existingGuests = JSON.parse(localStorage.getItem("guests")) || [];

        // Add the new guest details
            existingGuests.push({
                id: id,
                firstName: firstName,
                lastName: lastName,
                mobile: mobile
            });
            
            localStorage.setItem("guests", JSON.stringify(existingGuests));

            var newMeeting = {
                meetingId : "1",
                building: building,
                floor: floor,
                host: host,
                guests: existingGuests
            }

            console.log(newMeeting);

            // Get existing meetings or initialize an empty array
            var existingMeetings = JSON.parse(localStorage.getItem("meetings")) || [];

            // Add the new meeting details
            existingMeetings.push(newMeeting);

            // Save the updated meetings array to local storage
            localStorage.setItem("meetings", JSON.stringify(existingMeetings));


            var detailsRow = document.getElementById("detailsRow");
            if (detailsRow) {
                detailsRow.remove();
            }

            var existingGuests = JSON.parse(localStorage.getItem("guests")) || [];
            var tableBody = document.getElementById("guest-table");
        
    
                var row = tableBody.insertRow();
                var cell0 = row.insertCell(0);
                var cell1 = row.insertCell(1);
                var cell2 = row.insertCell(2);
                var cell3 = row.insertCell(3);
                var cell4 = row.insertCell(4);

                cell0.textContent ="";
                cell1.textContent = id;
                cell2.textContent = firstName;
                cell3.textContent = lastName;
                cell4.textContent = mobile;
            // Clear input fields
    }
    else 
    {
        if(id.length != 9 && mobile.length != 10)
        {
            alert("מספר ת.ז ומספר טלפון אינם חוקיים")
        }
        else if(id.length != 9)
        {
            alert("מספר תז אינו חוקי")
        }
        else{
            alert("מספר טלפון אינו חוקי")
        }
    }
        

    document.getElementById("id").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("notes").value = "";
    }
 

  
function cancelUpdate() {
    // סגור את חלונית ההוספה
    toggleModal();
}


function notifyUser() {
    alert("הפגישה הוזמנה בהצלחה!");
}

window.addEventListener('beforeunload', function () {
    // Clear the data from the "guests" and "meetings" databases in local storage
    localStorage.removeItem("guests");
    //localStorage.removeItem("meetings");
});

function validateIdInput(input) {
    // Remove non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, '');
    // Ensure the length does not exceed 9 characters
    if (input.value.length > 9) {
        input.value = input.value.slice(0, 9);
    }
}

function validatePhoneInput(input){
    input.value = input.value.replace(/[^0-9]/g, '');
    if(input.value.length > 10){
        input.value = input.value.slice(0,10);
    }
}


  

  