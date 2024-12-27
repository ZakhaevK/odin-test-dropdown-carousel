export { initialiseDropdown };

function toggleVisibility(element) {
  element.classList.toggle("visible");
}

// Requires a div containing elements of class "drop-btn" and "drop-content"
// as well as a class called "visible" containing display: flex or block.
function initialiseDropdown(dropdownDiv) {
  const dropBtn = dropdownDiv.getElementsByClassName("drop-btn")[0];
  const dropContent = dropdownDiv.getElementsByClassName("drop-content")[0];
  console.log(dropBtn, dropContent);

  dropBtn.onclick = () => {
    toggleVisibility(dropContent);
  };

  // Closes dropdown when clicking elsewhere
  window.onclick = function(e) {
    if (!e.target.matches('.drop-btn')) {
      if (dropContent.classList.contains('visible')) {
        dropContent.classList.remove('visible');
      }
    }
  }
}
