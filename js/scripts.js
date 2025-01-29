const aboutInfo = [
    {
        title: "Education", 
        description: [
            "Computer Science and Maths major (Data Science and Machine Learning)", 
            "Minor in Economics and Political Science"
        ]
    },
    { 
        title: "Interests", 
        description: "ML, AI, computational social science." 
    },
    { 
        title: "Hobbies", 
        description: "Reading, coding, and exploring societal challenges." 
    },
];

const projectsInfo = [
    {
        title: "Reddit Mental Health Analysis",
        description: [
            "Analyzing depression trends using topic modeling over 5 lakh+ posts.",
            "Leveraged scikit-learn to form clusters of 1 lakh+ users using KNN.",
            "Deployed BERTopic with efficient parameter optimization to obtain 800+ topics."
        ],
        githubLink: "https://github.com/anand-agarwal/Reddit-mental-health-analysis",

    },
    {
        title: "Media Bias in RG Kar",
        description: [
            "Collected 10000+ articles from MediaCloud.",
            "Optimized DsPy Classify and Predict to build a Llama prompt framework.",
            "Performed sentiment analysis and topic modeling using Llama on the clusters."
        ],
        githubLink: "https://github.com/anand-agarwal/RG-Kar-Media-Analysis",
        
    },
    {
        title: "Ashoka Datalake",
        description: [
            "Building the text upload pipeline for the project under Centre for Data Science, Ashoka University",
        ],
        githubLink: "https://cdsa.ashoka.edu.in/hello/datalake/",
    }
];

// Function to Render Cards
function renderCards(containerId, data, isProject = false) {
    const container = document.getElementById(containerId);
    
    // Clear existing content
    container.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.marginBottom = "36px";

        // Create title container with flex display
        const titleContainer = document.createElement("div");
        titleContainer.className = "title-container";
        titleContainer.style.display = "flex";
        titleContainer.style.alignItems = "center";
        titleContainer.style.justifyContent = "space-between";  // Added this line
        titleContainer.style.gap = "8px";
        
        // Create title element
        const title = document.createElement("h3");
        title.textContent = item.title;
        titleContainer.appendChild(title);

        // Add GitHub icon beside title if applicable
        if (isProject && item.githubLink) {
            const githubIcon = document.createElement("a");
            githubIcon.href = item.githubLink;
            githubIcon.target = "_blank";
            githubIcon.innerHTML = `<i class="devicon-github-original white-icon" "font-size"=40></i>`;
            githubIcon.className = "github-icon";
            githubIcon.ariaSetSize=40;
            titleContainer.appendChild(githubIcon);
        }

        card.appendChild(titleContainer);

        // Create description
        if (Array.isArray(item.description)) {
            const ul = document.createElement("ul");
            item.description.forEach(point => {
                const li = document.createElement("li");
                li.textContent = point;
                ul.appendChild(li);
            });
            card.appendChild(ul);
        } else {
            const description = document.createElement("p");
            description.textContent = item.description;
            card.appendChild(description);
        }

        container.appendChild(card);
    });
}

// Render About and Projects Sections
document.addEventListener("DOMContentLoaded", () => {  // About section
    renderCards("projects-info", projectsInfo, true);  // Projects section
});
