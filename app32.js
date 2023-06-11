var isSirenPlaying = false; // Variable to track if the siren is currently playing

function navigateToPage(pageId) {
  // Hide all pages
  const pages = document.getElementsByTagName("div");
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }

  // Show the selected page
  const selectedPage = document.getElementById(pageId);
  selectedPage.style.display = "block";
}

function toggleMenu() {
  const menuItems = document.getElementById("menu-items");
  menuItems.style.display = menuItems.style.display === "none" ? "block" : "none";
}

function confirmHelp() {
  if (!isSirenPlaying) {
    // Play the siren sound
    var sirenSound = document.getElementById("siren-sound");
    sirenSound.play();

    // Update the state variable
    isSirenPlaying = true;

    // Show the alert message
    alert("Help is on the way!");
  } else {
    // Pause the siren sound
    var sirenSound = document.getElementById("siren-sound");
    sirenSound.pause();
    sirenSound.currentTime = 0; // Reset the audio playback to the beginning

    // Update the state variable
    isSirenPlaying = false;
  }
}

function validateForm() {
  var passwordInput = document.getElementById("password");
  var password = passwordInput.value;

  if (password.length < 8 || password.length > 16) {
    alert("Password should be between 8 and 16 characters long.");
    return false; // Prevent form submission
  }

  // Form validation passed, allow form submission
  alert("Save successful!");
  return true;
}
