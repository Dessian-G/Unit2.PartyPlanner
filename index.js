// Function to add a new party to the list
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

document.getElementById('party-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    addParty(name, date, time, location, description);

    // Clear the form fields
    partyForm.reset();
});