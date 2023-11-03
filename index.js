
const partyForm = document.getElementById("partyForm");
const partyList = document.getElementById("partyList");


// Function to add a new party to the list
function addPartyToUI(party) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${party.name}</strong> - Date: ${party.date}, Time: ${party.time}, Location: ${party.location}, Description: ${party.description} <button class="delete">Delete</button>`;
    partyList.appendChild(li);

    // Attach a click event to the delete button
    const deleteButton = li.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        deleteParty(party.id); // Call the function to delete the party from the API
        partyList.removeChild(li);
    });
}

// Function to fetch parties from the API and render them on the page
function fetchParties() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((party) => {
                addPartyToUI(party);
            });
        })
        .catch((error) => {
            console.error("Error fetching parties:", error);
        });
}

// Event handler for form submission
partyForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;

    // Create a new party object
    const newParty = {
        name,
        date,
        time,
        location,
        description,
    };

    // Call the function to add the party to the API
    createParty(newParty);

    // Clear the form fields
    partyForm.reset();
});

// Function to create a new party and add it to the API
function createParty(party) {
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(party),
    })
        .then((response) => response.json())
        .then((newParty) => {
            addPartyToUI(newParty);
        })
        .catch((error) => {
            console.error("Error creating party:", error);
        });
}

// Function to delete a party from the API
function deleteParty(partyId) {
    fetch(`${apiUrl}/${partyId}`, {
        method: "DELETE",
    })
        .then((response) => {
            if (response.status === 204) {
                console.log("Party deleted successfully.");
            } else {
                console.error("Error deleting party.");
            }
        })
        .catch((error) => {
            console.error("Error deleting party:", error);
        });
}

// Fetch and render parties when the page loads
fetchParties();





function addParty(name, date, time, location, description) {
    const partyList = document.getElementById("partyList");
    const li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong> - Date: ${date}, Time: ${time}, Location: ${location}, Description: ${description} <button class="delete">Delete</button>`;
    partyList.appendChild(li);

    // Attach a click event to the delete button
    const deleteButton = li.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
        partyList.removeChild(li);
    });
}

// Handle form submission


function underlineParent(event){
	event.target.parentNode.classList.toggle("done");
}
function removeParent(evt){
	evt.target.parentNode.remove();
} 

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    addParty(name, date, time, location, description);
    partyList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            const partyIndex = // Get the index of the party to delete;
            removePartyFromState(partyIndex);
        }
    });
    // Clear the form fields
    partyForm.reset();
