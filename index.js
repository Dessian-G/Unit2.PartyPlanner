
// Define an array to store party data
const parties = [];

// Function to add a new party to the list
function addPartyToList(party) {
  const partyList = document.getElementById("partyList");
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${party.name}</strong> - Date: ${party.date}, Time: ${party.time}, Location: ${party.location}, Description: ${party.description}
    <button class="delete">Delete</button>`;
  partyList.appendChild(li);

  // Attach a click event to the delete button
  const deleteButton = li.querySelector(".delete");
  deleteButton.addEventListener("click", () => {
    removeParty(party);
  });
}

// Function to remove a party from the list
function removeParty(party) {
  const partyList = document.getElementById("partyList");
  const partyIndex = parties.indexOf(party);

  if (partyIndex !== -1) {
    parties.splice(partyIndex, 1);
    partyList.removeChild(partyList.children[partyIndex]);
  }
}

// Function to handle the party form submission
function handlePartyFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const location = document.getElementById("location").value;
  const description = document.getElementById("description").value;

  const party = {
    name,
    date,
    time,
    location,
    description,
  };

  // Add the party to the array and list
  parties.push(party);
  addPartyToList(party);

  // Clear the form fields
  document.getElementById("partyForm").reset();
}

// Attach the form submission event
const partyForm = document.getElementById("partyForm");
partyForm.addEventListener("submit", handlePartyFormSubmit);
