import "./index.css";

interface Skill {
  programmingLanguage: string[];
  library: string[];
  framework: string[];
  others: string[];
}

const skillHeading: string[] = [
  "Programming Languages",
  "Libraries",
  "Frameworks",
  "Others",
];
const mySkillList: Skill[] = [
  {
    programmingLanguage: ["HTML", "CSS", "JavaScript", "PHP"],
    library: ["React JS", "Tailwind CSS", "Bootstrap", "JQuery"],
    framework: ["Next JS", "Express JS", "CodeIgniter", "Laravel"],
    others: [
      "MySQL Databases",
      "NoSQL Databases (MongoDB and Mongoose)",
      "Git, Github And Version Control",
      "RESTful API",
      "WordPress",
      "Search Engine Optimization (SEO)",
    ],
  },
];

const calmColors: string[] = [
  "#f0e68c", // Light Peach (pastel)
  "#90a494", // Sage Green (earthy)
  "#d3d3d3", // Light Gray (neutral)
  "#a2c4c9", // Pale Blue (pastel)
  "#c2b280", // Wheat (earthy)
  "#7986cb", // Lavender (pastel)
  "#9d818b", // Mauve (dusty purple)
  "#c19a6b", // Terracotta (earthy)
  "#d7ccc8", // Pale Pink (pastel)
  "#93706d", // Dusty Rose (muted pink)
  "#e0b2ae", // Blush Pink (pastel)
  "#a9a9a9", // Dark Gray (neutral)
  "#b3d1c7", // Seafoam Green (pastel)
  "#708090", // Slate Gray (neutral)
];

const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <div className="skill-container">
          {skillHeading.map((heading, index) => (
            <SkillSection title={heading} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Avatar = () => {
  return <img src="hendri.jpg" alt="Hendri" className="avatar" />;
};

const Intro = () => {
  return (
    <>
      <h1>Hendri Narendra</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, animi.
        Sapiente voluptates non veritatis optio nemo. Quibusdam quas libero
        natus consectetur dolore ipsam nemo voluptatum sapiente? Sunt quis
        voluptates asperiores!
      </p>
    </>
  );
};

const SkillSection = (props: { title: string }) => {
  const { title } = props;

  return (
    <>
      <h2>{title}</h2>
      <div className="skill">
        <ul className="skill-list">
          {title === "Programming Languages" &&
            mySkillList[0].programmingLanguage.map((prog, index) => (
              <SkillBadge key={index} skills={prog} />
            ))}
          {title === "Libraries" &&
            mySkillList[0].library.map((lib, index) => (
              <SkillBadge key={index} skills={lib} />
            ))}
          {title === "Frameworks" &&
            mySkillList[0].framework.map((frame, index) => (
              <SkillBadge key={index} skills={frame} />
            ))}
          {title === "Others" &&
            mySkillList[0].framework.map((others, index) => (
              <SkillBadge key={index} skills={others} />
            ))}
        </ul>
      </div>
    </>
  );
};

const SkillBadge = ({ skills }: { skills: string }) => {
  const colorsCount = calmColors.length;
  const randomIndex = Math.floor(Math.random() * colorsCount);

  return <li style={{ backgroundColor: calmColors[randomIndex] }}>{skills}</li>;
};

export default App;
