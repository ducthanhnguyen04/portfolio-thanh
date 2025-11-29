import "./work.modal.css";

function WorkModal() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "TechVision",
      time: "2023 - Present",
      description:
        "Developed responsive UI using React, Tailwind, and optimized UX interactions.",
    },
    {
      title: "Web Designer",
      company: "Creative Studio",
      time: "2021 - 2023",
      description:
        "Designed landing pages, branding assets, and improved conversion rate by 20%.",
    },
    {
      title: "Intern Developer",
      company: "SoftPlus",
      time: "2020 - 2021",
      description:
        "Assisted in building internal dashboard tools and automated workflows.",
    }
  ];

  return (
    <div className="work-timeline">
      {experiences.map((item, index) => (
        <div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <h4>{item.company}</h4>
            <span className="time">{item.time}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkModal;
