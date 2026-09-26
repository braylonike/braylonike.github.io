/* Add future projects as another object in this array. */
const projects = [
  {
    number: "01",
    title: "Lawn Edger Reverse Engineering",
    type: "Academic Engineering Project",
    summary:
      "Reverse-engineered a Briggs & Stratton combustion-powered lawn edger to understand component function, system interactions, and mechanical assembly.",
    details: [
      "Led an 8-person team through engine disassembly, measurement, component documentation, and assembly integration.",
      "Modeled components in SolidWorks and created assemblies, subassemblies, and engineering drawings using GD&T.",
      "Coordinated task assignments, scheduling, and quality reviews while adapting to project delays. The final project received a 100% evaluation."
    ],
    tools: [
      "SolidWorks",
      "GD&T",
      "Reverse engineering",
      "Assembly design"
    ],
    images: [
      {
        src: "images/lawn-edger-overview.png",
        alt: "SolidWorks rendering of the complete lawn edger"
      },
      {
        src: "images/lawn-edger-cad.png",
        alt: "Transparent SolidWorks rendering of the lawn edger engine"
      }
    ]
  },

  {
    number: "02",
    title: "Robotic Gripper Mechanism",
    type: "Prototype / In progress",
    summary:
      "Designed and built an early physical prototype of a worm-gear gripper mechanism for an introductory design project.",
    details: [
      "Developed the base mechanism in CAD and produced a physical prototype to explore synchronized gripper motion.",
      "The mechanism is being repurposed for a can-picking application in Introduction to Design.",
      "Future development will focus on integrating actuation, testing grip performance, and evaluating the mechanism with representative objects."
    ],
    tools: [
      "SolidWorks",
      "Worm gears",
      "3D printing",
      "Mechanical prototyping"
    ],
    images: [
      {
        src: "images/gripper-prototype.jpeg",
        alt: "Physical 3D-printed prototype of the robotic gripper mechanism"
      },
      {
        src: "images/gripper-cad.png",
        alt: "CAD rendering of the robotic gripper mechanism"
      }
    ]
  }
];

const projectList = document.querySelector("#projects-list");

if (projectList) {
  projectList.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-number">${project.number}</div>

          <div class="project-visuals">
            ${project.images
              .map(
                (image, index) => `
                  <img
                    class="project-image image-${index + 1}"
                    src="${image.src}"
                    alt="${image.alt}"
                    loading="lazy"
                  >
                `
              )
              .join("")}
          </div>

          <div class="project-content">
            <p class="project-type">${project.type}</p>

            <h2>${project.title}</h2>

            <p class="project-summary">${project.summary}</p>

            <div class="project-details">
              <h3>Contribution</h3>

              <ul>
                ${project.details
                  .map((detail) => `<li>${detail}</li>`)
                  .join("")}
              </ul>

              <div class="tag-list">
                ${project.tools
                  .map((tool) => `<span>${tool}</span>`)
                  .join("")}
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}