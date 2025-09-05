const sidebar = document.getElementById("sidebar");

const toggleBtn = document.getElementById("toggleBtn");

const toggleIcon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  
  sidebar.classList.toggle("active");


  if (sidebar.classList.contains("active")) {
    
    toggleIcon.classList.remove("fa-bars");
    
    toggleIcon.classList.add("fa-times"); 
  } 
  else {
    toggleIcon.classList.remove("fa-times");
    
    toggleIcon.classList.add("fa-bars"); 
  }
});

