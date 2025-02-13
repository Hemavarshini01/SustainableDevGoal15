// Theme Toggle
const themeRadios = document.querySelectorAll('input[name="theme"]');
themeRadios.forEach(radio => {
    radio.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode", this.value === "dark");
        document.body.classList.toggle("light-mode", this.value === "light");
    });
});

// Text Size Adjustment
document.querySelectorAll('input[name="textSize"]').forEach((radio) => {
    radio.addEventListener("change", function () {
        const size = this.value;
        document.body.style.fontSize = size === "small" ? "14px" : size === "large" ? "20px" : "16px";
    });
});

// Language Selection
const languageSelect = document.getElementById("languageSelect");
languageSelect.addEventListener("change", function () {
    alert("Language changed to: " + this.value);
});

// Search Functionality
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", function () {
    const query = this.value.toLowerCase();
    const mainContent = document.querySelector("main");
    const textContent = mainContent.innerText.toLowerCase();

    if (query && textContent.includes(query)) {
        mainContent.style.background = "#ffeb3b";
    } else {
        mainContent.style.background = "white";
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Form Handling
function openForm(formId) {
    document.getElementById(formId).style.display = 'block';
}

function closeForm(formId) {
    document.getElementById(formId).style.display = 'none';
}

// Add Pet Function
function addPet() {
    const petName = document.getElementById('petName').value;
    if (petName) {
        document.getElementById('addPetMessage').innerText = `${petName} added successfully!`;
        document.getElementById('addPetMessage').style.display = 'block';
        setTimeout(() => closeForm('addPetForm'), 2000);
    }
}

// Delete Pet Function
function deletePet() {
    const petName = document.getElementById('deletePetName').value;
    if (petName) {
        document.getElementById('deletePetMessage').innerText = `${petName} deleted successfully!`;
        document.getElementById('deletePetMessage').style.display = 'block';
        setTimeout(() => closeForm('deletePetForm'), 2000);
    }
}

// Add Success Story
function addSuccessStory() {
    const storyPetName = document.getElementById('storyPetName').value;
    if (storyPetName) {
        document.getElementById('successStoryMessage').innerText = `Story for ${storyPetName} added successfully!`;
        document.getElementById('successStoryMessage').style.display = 'block';
        setTimeout(() => closeForm('successStoryForm'), 2000);
    }
}

// Context Menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    const menu = document.getElementById('contextMenu');
    menu.style.top = `${e.clientY}px`;
    menu.style.left = `${e.clientX}px`;
    menu.style.display = 'block';
});

document.addEventListener('click', function () {
    const menu = document.getElementById('contextMenu');
    if (menu) {
        menu.style.display = 'none';
    }
});
//////////////////////////////////////////////////////////////
// Function to show form
function showForm(formId) {
    document.getElementById(formId).style.display = "block";
}

// Function to close form
function closeForm(formId) {
    document.getElementById(formId).style.display = "none";
}

// Function to add pet (Mock)
function addPet() {
    alert("Pet added successfully!");
    closeForm('adoptionForm');
}

// Function to add success story (Mock)
function addSuccessStory() {
    alert("Story added successfully!");
    closeForm('storyForm');
}

