document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initTypingEffect();
  initFormHandling();
});

function initScrollAnimations() {
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        document.querySelectorAll("[data-aos]").forEach(element => {
          const position = element.getBoundingClientRect();
          if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add("aos-animate");
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  });
}

function openModal(projectId) {
  const descriptions = {
    1: { 
      title: "Age and Gender Prediction using Machine Learning", 
      desc: `This research explores the application of supervised machine learning techniques, specifically regression and classification, for age and gender prediction using the UTKFace facial recognition dataset. The study employs Convolutional Neural Networks (CNNs) to extract hierarchical features from facial images, evaluating the accuracy of age prediction through regression and gender prediction through classification. The results demonstrate high accuracy and low mean squared error, highlighting the effectiveness of CNNs in demographic prediction tasks.`, 
      github: "https://github.com/Vansh-Chawla/facialrec.git",
      download: "/Project reports/FINAL FINAL CS EE.pdf"
    },
    2: { 
      title: "Compiler: TurtleScript to TypeScript", 
      desc: "This project involved developing a compiler to translate TurtleScript programs into PostScript, focusing on key programming concepts like lexing, parsing, and code generation. My team (Ines de Gotari and I) implemented a lexer and parser to validate TurtleScript syntax and generate PostScript code, while also handling error detection and reporting. The project emphasized collaboration through pair programming and version control, ensuring the successful development of a functional compiler.", 
      github: "https://github.com/Vansh-Chawla/compiler",
      download: "Project reports/CS1006 P1 Group Report.pdf"
    },
    3: { 
      title: "Web Development: Portfolio Website", 
      desc: "This research focuses on creating a website to help parents understand teenage culture, addressing issues like peer pressure, self-esteem, and social media impact. The project involved designing an interactive and informative platform using tools like Adobe Photoshop, Illustrator, and Visual Studio Code. The website aims to bridge the gap between parents and teenagers by providing insights into youth culture and offering solutions to common challenges faced by teens.", 
      github: "https://github.com/Vansh-Chawla/bullyingwebsite",
      download: "/Project reports/DD PCUP Vansh Chawla 10.pdf"
    },
    4: { 
      title: "Tuck Shop App", 
      desc: "This research project focuses on developing a Java-based desktop application to streamline operations at Gupta’s Store, addressing issues like manual billing, stock management, and profit calculation errors. The proposed solution includes features such as inventory management, automated reporting, and secure data storage, aiming to improve efficiency and accuracy. The app will also incorporate user-friendly interfaces for both the admin and manager, ensuring ease of use and scalability for future needs.", 
      github: "https://github.com/Vansh-Chawla/TuckApp",
      download: "Project reports/Java App"
    },
    5: { 
      title: "Bash Command Replication: ps, top, htop", 
      desc: "This research project involved creating Bash scripts to mimic the functionalities of Unix commands ps, top, and htop, focusing on process management in Linux. The study included understanding and implementing various command flags, extracting process data from the /proc filesystem, and addressing limitations such as missing process details and performance delays. The practical experience enhanced the researcher's Bash scripting skills and deepened their knowledge of process monitoring and system resource management.", 
      github: "https://github.com/Vansh-Chawla/pstophtop",
      download: "Project reports/CS1007 final report.pdf"
    },
    6: { 
      title: "Robotic Hand with Glove", 
      desc: "For the 2020 VEX competition, I led the STEM project by creating a Robotic Hand controlled by a Glove using Arduino. This innovative project aimed to assist individuals with disabilities by enabling them to perform tasks that are challenging with one hand. The glove-based control system demonstrated the potential of Arduino in creating practical, real-world solutions, showcasing my skills in hardware integration and programming.", 
      github: "https://github.com/Vansh-Chawla/robohand",
    },
    7: { 
      title: "Blind Man Stick", 
      desc: "As part of the robotics club, I collaborated with David Abraham to create a Blind Man’s Stick, designed to enhance accessibility for visually impaired individuals. The stick incorporated sensors to detect obstacles and provide auditory feedback, helping users navigate their surroundings safely. This project highlighted our commitment to using technology to solve real-world challenges and improve quality of life.", 
      github: "https://github.com/Vansh-Chawla/blindmanstick",
    },
    8: { 
      title: "Home Security System", 
      desc: "This project focused on creating a home security system using Arduino, aiming to enhance safety by developing a prototype with features like password-based access, LCD display, and a buzzer for incorrect attempts. The study involved learning Arduino programming, designing circuits, and integrating various sensors, while addressing challenges like time management and debugging. The project successfully demonstrated the potential of Arduino in creating functional and user-friendly security solutions.", 
      github: "https://github.com/Vansh-Chawla/homesecsystem",
      download: "Project reports/MYP PERSONAL PROJECT FINAL.pdf"
    },
    9: { 
      title: "Brick Breaker Game", 
      desc: "I am currently working on a collaborative project with Julija Hoyer and Sam Stranding, where we are developing a Java-based Breakout-inspired game using the Processing environment. The project involves recreating classic Breakout features like paddle movement, ball physics, and brick-breaking mechanics, while also implementing additional features such as power-ups, multiple levels, and a leaderboard.", 
      github: "https://github.com/Vansh-Chawla/BrickBreaker",
    },
    10: { 
      title: "Remulate", 
      desc: "Remulate, developed in collaboration with David Abraham and Kshitij Bhatia for the WaffleHacks Hackathon, is an innovative app designed to assist the visually impaired by describing their surroundings using AI. Built with React Native, Expo, and integrated with Imagga and OpenAI’s GPT-3 APIs, the app captures images, generates descriptive tags, and converts them into audio descriptions. Our creative use of AI earned us the 'Best Use of AI' award, and we aim to further enhance the app with features like panorama detection and reduced latency.", 
      github: "https://github.com/Vansh-Chawla/Remulate/",
    },
    11: { 
      title: "Teacher's Discord Bot", 
      desc: "This project, developed in collaboration with David Abraham, Kshitij Bhatia, and Avyukt Chamria for the PSN Hackathon 2020, aimed to simplify classroom management for teachers by automating attendance and other administrative tasks using a Discord bot. Built with the Discord bot API and Node.js, the bot faced challenges like bugs in the attendance system but successfully streamlined processes, saving valuable class time. Through this project, we gained extensive knowledge of the Discord.js API and its functionalities.", 
      github: "https://github.com/Vansh-Chawla/discordteacher",
    },
    12: { 
      title: "Resolu - Short-form Petitions", 
      desc: "Resolu, developed in collaboration with Dhruman Gupta and Kshitij Bhatia for the EkPehchaan Hackathon, is a global platform that revolutionizes petition creation by leveraging short-form content. It simplifies the process of recording, uploading, and sharing petitions, making it easier to amplify their reach and impact. Our innovative solution was recognized as the second-best in the hackathon, showcasing its potential to transform how petitions are made and shared globally.", 
      github: "https://github.com/Vansh-Chawla/Resolu",
    }
  };

  // Get the project details or default to "No description available"
  const project = descriptions[projectId] || { title: "No description available", desc: "", github: "", download: "" };

  // Update the modal content
  document.getElementById("project-description").innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
    ${project.github ? `<a href="${project.github}" target="_blank">GitHub Repository</a>` : ""}
  `;

  // Update the download link (if available)
  document.getElementById("download-link").innerHTML = project.download 
    ? `<a href="${project.download}" download>Download Project Files</a>` 
    : "";

  // Display the modal
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function initTypingEffect() {
  const typedText = document.getElementById("typed-text");
  const textToType = "Hi, I’m Vansh Chawla! 👋";
  let i = 0;
  function typeWriter() {
    typedText.innerHTML = "";
    function typing() {
      if (i < textToType.length) {
        typedText.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typing, 100);
      }
    }
    typing();
  }
  typeWriter();
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideshow = document.querySelector(".slideshow");
const dots = document.querySelectorAll(".dot");

// Show the current slide
function showSlide(index) {
  if (index < 0) {
    slideIndex = totalSlides - 1; // Wrap around to last slide
  } else if (index >= totalSlides) {
    slideIndex = 0; // Wrap around to first slide
  } else {
    slideIndex = index;
  }
  const offset = -slideIndex * 100;
  slideshow.style.transform = `translateX(${offset}%)`;
  updateDots();
}

// Next Slide
function nextSlide() {
  showSlide(slideIndex + 1);
}

// Previous Slide
function prevSlide() {
  showSlide(slideIndex - 1);
}

// Navigate to a specific slide via dots
function goToSlide(index) {
  showSlide(index);
}

// Update active dot
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === slideIndex);
  });
}

// Add event listeners for buttons
document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);

// Add event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => goToSlide(index));
});

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Show the initial slide
showSlide(slideIndex);

function initFormHandling() {
  emailjs.init("F8oVcTWCrpyWsF32-"); // Ensure this is your correct User ID

  document.getElementById("contact-form").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const templateParams = {
      name: name,
      email: email,
      message: message
    };

    emailjs.send("service_1r56yy9", "template_rxzdhth", templateParams) // Check Service ID and Template ID
      .then(response => {
        console.log("Email sent successfully!", response);
        const successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";
        setTimeout(() => successMessage.style.display = "none", 3000);
        document.getElementById("contact-form").reset();
      })
      .catch(error => {
        console.error("Failed to send email:", error);
        alert("Error sending message.");
      });
  });
}

const successMessage = document.getElementById("success-message");
successMessage.style.display = "block";
setTimeout(() => successMessage.style.display = "none", 3000);

// Function to open the resume modal
function openResumeModal() {
  const modal = document.getElementById("resumeModal");
  modal.style.display = "flex"; // Show the modal
}

// Function to close the resume modal
function closeResumeModal() {
  const modal = document.getElementById("resumeModal");
  modal.style.display = "none"; // Hide the modal
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  const modal = document.getElementById("resumeModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}
