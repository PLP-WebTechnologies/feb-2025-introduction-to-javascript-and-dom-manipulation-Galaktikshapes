// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Button to change text content dynamically
    const changeTextButton = document.getElementById("changeTextBtn");
    const introParagraph = document.querySelector(".intro p");
  
    changeTextButton.addEventListener("click", function() {
      introParagraph.textContent = "Thapelo is currently working on various exciting projects like Liftly, Cheaply, and Weatherly!";
    });
  
    // Button to remove a project when clicked
    const removeButtons = document.querySelectorAll(".remove-btn");
  
    removeButtons.forEach(button => {
      button.addEventListener("click", function() {
        const project = button.parentElement;
        project.remove();
      });
    });
  
    // Button to add projects back after they were deleted
    const addProjectsButton = document.getElementById("addProjectsBtn");
  
    addProjectsButton.addEventListener("click", function() {
      // Check if the projects already exist, if not, add them back
      if (!document.getElementById("project-liftly")) {
        const projectsSection = document.querySelector(".projects");
  
        const liftlyProject = document.createElement("div");
        liftlyProject.classList.add("project");
        liftlyProject.id = "project-liftly";
        liftlyProject.innerHTML = `
          <h3>Liftly - Carpool App</h3>
          <p>Empowering local drivers with better earnings and safer rides.</p>
          <button class="remove-btn">Remove This Project</button>
        `;
        projectsSection.appendChild(liftlyProject);
  
        const cheaplyProject = document.createElement("div");
        cheaplyProject.classList.add("project");
        cheaplyProject.id = "project-cheaply";
        cheaplyProject.innerHTML = `
          <h3>Cheaply - Price-Checking Tool</h3>
          <p>Helping South Africans save money by comparing prices across stores.</p>
          <button class="remove-btn">Remove This Project</button>
        `;
        projectsSection.appendChild(cheaplyProject);
  
        const weatherlyProject = document.createElement("div");
        weatherlyProject.classList.add("project");
        weatherlyProject.id = "project-weatherly";
        weatherlyProject.innerHTML = `
          <h3>Weatherly - Weather App</h3>
          <p>A weather app designed with dynamic, real-time forecasts.</p>
          <button class="remove-btn">Remove This Project</button>
        `;
        projectsSection.appendChild(weatherlyProject);
  
        // Reattach the event listener to the new remove buttons
        const newRemoveButtons = document.querySelectorAll(".remove-btn");
        newRemoveButtons.forEach(button => {
          button.addEventListener("click", function() {
            const project = button.parentElement;
            project.remove();
          });
        });
      }
    });
  });
  