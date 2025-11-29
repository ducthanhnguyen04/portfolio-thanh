import "./work.modal.css";

function WorkModal() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "SmartCom Vietnam",
      time: "2025/6 - 2025/9",
      description:
        "Develop and maintain the company's online English learning system.",
    },
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
