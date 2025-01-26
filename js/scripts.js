// Data for About Section
const aboutInfo = [
    { title: "Education", description: "Second-year CS major, minor in IR." },
    { title: "Interests", description: "ML, AI, computational social science." },
    { title: "Hobbies", description: "Reading, coding, and exploring societal challenges." },
  ];
  
  // Data for Projects Section
  const projectsInfo = [
    { title: "Reddit Mental Health Analysis", description: "Analyzing depression trends using topic modeling." },
    { title: "Media Bias in Hindi Media", description: "Using NER and graph theory to investigate bias." },
    { title: "Asthma Burden Model", description: "Integrated model to predict economic impact of pollution." },
  ];
  
  // Function to Render Cards
  function renderCards(containerId, data) {
    const container = document.getElementById(containerId);
    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
      container.appendChild(card);
    });
  }
  
  // Render About and Projects Sections
  document.addEventListener("DOMContentLoaded", () => {
    renderCards("about-info", aboutInfo);
    renderCards("projects-info", projectsInfo);
  });