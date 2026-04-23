import { useState, useEffect } from "react";
import akashPhoto from "../assets/akash.jpg";
import resume from "../assets/Akash_Resume.pdf";

const data = {
  name: "Akash Pattnaik",
  title: "Associate Software Engineer",
  email: "akashpattnaikofficial.1@gmail.com",
  phone: "+91 6372729195",
  location: "Bhubaneswar, Odisha, IN",
  linkedin: "https://www.linkedin.com/in/akash-pattnaik-01b219256/",
  github: "https://github.com/akashpattnaikofficial",
  about:
    "Associate Software Engineer focused on frontend development, skilled in various technologies. Passionate about building responsive, user-friendly applications and solving complex problems in agile environments.",
  skills: [
    "React.js",
    "Next.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Figma",
    "JSON",
    "XML",
  ],
  experience: [
    {
      role: "Associate Software Engineer",
      company: "CyberTrack Technology Pvt. Ltd.",
      period: "Aug 2025 – Mar 2026",
      points: [
        "Developing and maintaining frontend features using React.js, JavaScript, HTML, and CSS.",
        "Working with JSON and XML files for configuration and data processing.",
        "Debugging and optimizing UI components to improve performance.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "CyberTrack Technology Pvt. Ltd.",
      period: "Dec 2024 – Jul 2025",
      points: [
        "Built responsive and reusable UI components using React.js and modern CSS frameworks.",
        "Assisted in implementing basic state management and improving UX.",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Movsta Technology Pvt. Ltd.",
      period: "Jun 2022 – Dec 2022",
      points: [
        "Developed responsive web pages using HTML, CSS, JavaScript, and Tailwind CSS.",
        "Created reusable React components and integrated APIs.",
      ],
    },
  ],
  projects: [
    {
      name: "Movie App",
      emoji: "🎬",
      desc: "Responsive Movie App using React with third-party API integration. Features search, favourites, and dynamic UI with efficient state management.",
      tags: ["React", "API", "State Management"],
      color: "#ff6b6b",
    },
    {
      name: "E-Commerce App",
      emoji: "🛒",
      desc: "Full-featured e-commerce site with authentication, product filtering, cart, and payment gateway integration.",
      tags: ["React.js", "Auth", "Cart", "Payments"],
      color: "#4ecdc4",
    },
    {
      name: "MediaVault",
      emoji: "🖼️",
      desc: "Media search app using Redux Toolkit, Unsplash and Pexels APIs. Search photos and videos with beautiful UI.",
      tags: ["React", "Redux", "REST API", "Axios"],
      color: "#a78bfa",
    },
  ],
  certs: [
    { name: "MERN Stack Bootcamp", issuer: "UpGrad", duration: "certificate" },
    {
      name: "UX Design Foundations",
      issuer: "Coursera",
      duration: "Certificate",
    },
    {
      name: "Prompt Engineering",
      issuer: "Simplilearn",
      duration: "certificate",
    },
  ],
};

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Outfit', sans-serif;
    background: #050a14;
    color: #e2e8f0;
    min-height: 100vh;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #050a14; }
  ::-webkit-scrollbar-thumb { background: #1e3a5f; border-radius: 3px; }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-18px) rotate(2deg); }
    66% { transform: translateY(-8px) rotate(-1deg); }
  }
  @keyframes bounceIn {
    0% { opacity: 0; transform: scale(0.3) translateY(40px); }
    50% { transform: scale(1.08) translateY(-8px); }
    70% { transform: scale(0.97) translateY(3px); }
    100% { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse-ring {
    0% { transform: scale(1); opacity: 0.4; }
    100% { transform: scale(1.6); opacity: 0; }
  }
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  @keyframes orbit {
    from { transform: rotate(0deg) translateX(110px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(110px) rotate(-360deg); }
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  .bounce-hover {
    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
  }
  .bounce-hover:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 20px 50px rgba(0,0,0,0.4);
  }

  .skill-pill {
    display: inline-block;
    padding: 6px 16px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 600;
    font-family: 'JetBrains Mono', monospace;
    cursor: default;
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.2s ease;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .skill-pill:hover {
    transform: scale(1.12) translateY(-2px);
    filter: brightness(1.3);
  }
`;

const FloatingOrb = ({ size, color, style: s }) => (
  <div
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      filter: "blur(60px)",
      opacity: 0.15,
      pointerEvents: "none",
      ...s,
    }}
  />
);

const Section = ({ title, emoji, children, delay = 0 }) => (
  <div
    style={{
      marginBottom: "60px",
      animation: `slideUp 0.6s ease ${delay}s both`,
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "28px",
      }}
    >
      <span style={{ fontSize: "22px" }}>{emoji}</span>
      <h2
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "22px",
          fontWeight: 800,
          color: "#fff",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          flex: 1,
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
          marginLeft: "8px",
        }}
      />
    </div>
    {children}
  </div>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [typedText, setTypedText] = useState("");
  const fullText = data.title;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [fullText]);

  const skillColors = [
    "rgba(255,107,107,0.2)",
    "rgba(78,205,196,0.2)",
    "rgba(167,139,250,0.2)",
    "rgba(251,191,36,0.2)",
    "rgba(52,211,153,0.2)",
    "rgba(251,113,133,0.2)",
  ];
  const skillBorders = [
    "rgba(255,107,107,0.5)",
    "rgba(78,205,196,0.5)",
    "rgba(167,139,250,0.5)",
    "rgba(251,191,36,0.5)",
    "rgba(52,211,153,0.5)",
    "rgba(251,113,133,0.5)",
  ];

  const navItems = ["about", "experience", "projects", "skills", "resume"];

  return (
    <>
      <style>{style}</style>
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {/* Background orbs */}
        <FloatingOrb
          size="500px"
          color="#3b82f6"
          style={{ top: "-100px", left: "-100px" }}
        />
        <FloatingOrb
          size="400px"
          color="#8b5cf6"
          style={{ top: "200px", right: "-80px" }}
        />
        <FloatingOrb
          size="300px"
          color="#06b6d4"
          style={{ bottom: "200px", left: "30%" }}
        />

        {/* Nav */}
        <nav
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
            display: "flex",
            gap: "4px",
            background: "rgba(5,10,20,0.8)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "100px",
            padding: "6px",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveSection(item);
                document
                  .getElementById(item)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background:
                  activeSection === item
                    ? "linear-gradient(135deg, #3b82f6, #8b5cf6)"
                    : "transparent",
                color: activeSection === item ? "#fff" : "#64748b",
                border: "none",
                borderRadius: "100px",
                padding: "8px 18px",
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "'Outfit', sans-serif",
                cursor: "pointer",
                textTransform: "capitalize",
                transition: "all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)",
                letterSpacing: "0.02em",
              }}
            >
              {item}
            </button>
          ))}
        </nav>

        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "100px 24px 80px",
          }}
        >
          {/* Hero */}
          <div
            id="about"
            style={{
              textAlign: "center",
              marginBottom: "80px",
              animation: "bounceIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                position: "relative",
                display: "inline-block",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
                  padding: "3px",
                  margin: "0 auto",
                  animation: "float 6s ease-in-out infinite",
                  boxShadow: "0 0 40px rgba(139,92,246,0.4)",
                }}
              >
                <img
                  src={akashPhoto}
                  alt="Akash Pattnaik"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                    border: "3px solid #050a14",
                  }}
                />
              </div>
              {/* Pulse rings */}
              {[1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    inset: "-10px",
                    borderRadius: "50%",
                    border: "2px solid rgba(139,92,246,0.3)",
                    animation: `pulse-ring 2s ease-out ${i * 0.6}s infinite`,
                  }}
                />
              ))}
              {/* Online dot */}
              <div
                style={{
                  position: "absolute",
                  bottom: "6px",
                  right: "6px",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  border: "3px solid #050a14",
                  boxShadow: "0 0 10px rgba(34,197,94,0.6)",
                }}
              />
            </div>

            <h1
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(36px, 6vw, 58px)",
                fontWeight: 900,
                background: "linear-gradient(135deg, #fff 0%, #94a3b8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                marginBottom: "12px",
              }}
            >
              {data.name}
            </h1>

            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "16px",
                color: "#3b82f6",
                marginBottom: "20px",
                minHeight: "24px",
              }}
            >
              {typedText}
              <span style={{ animation: "blink 1s ease infinite" }}>|</span>
            </div>

            <p
              style={{
                color: "#64748b",
                fontSize: "15px",
                lineHeight: 1.7,
                maxWidth: "560px",
                margin: "0 auto 28px",
                fontWeight: 400,
              }}
            >
              {data.about}
            </p>

            {/* Location badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "100px",
                padding: "6px 16px",
                fontSize: "13px",
                color: "#94a3b8",
                marginBottom: "28px",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              📍 {data.location}
            </div>

            {/* Social links */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  label: "GitHub",
                  href: data.github,
                  icon: "⌨️",
                  color: "#f0f6fc",
                  bg: "rgba(240,246,252,0.08)",
                },
                {
                  label: "LinkedIn",
                  href: data.linkedin,
                  icon: "💼",
                  color: "#0ea5e9",
                  bg: "rgba(14,165,233,0.1)",
                },
                {
                  label: "Email",
                  href: `https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}&su=Hello%20Akash&body=Hi%20Akash`,
                  icon: "✉️",
                  color: "#a78bfa",
                  bg: "rgba(167,139,250,0.1)",
                },
                // {
                //   label: "Phone",
                //   href: `tel:${data.phone}`,
                //   icon: "📱",
                //   color: "#4ade80",
                //   bg: "rgba(74,222,128,0.1)",
                // },
              ].map(({ label, href, icon, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="bounce-hover"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: bg,
                    border: `1px solid ${color}30`,
                    color,
                    textDecoration: "none",
                    padding: "10px 20px",
                    borderRadius: "12px",
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div id="experience">
            <Section title="Experience" emoji="💼" delay={0.1}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {data.experience.map((exp, i) => (
                  <div
                    key={i}
                    className="bounce-hover"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "20px",
                      padding: "24px",
                      position: "relative",
                      overflow: "hidden",
                      animation: `slideUp 0.5s ease ${0.1 + i * 0.1}s both`,
                    }}
                  >
                    {/* Accent line */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "3px",
                        background: `linear-gradient(180deg, #3b82f6, #8b5cf6)`,
                        borderRadius: "3px 0 0 3px",
                      }}
                    />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginBottom: "12px",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: "17px",
                            fontWeight: 700,
                            color: "#fff",
                            marginBottom: "4px",
                          }}
                        >
                          {exp.role}
                        </h3>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#3b82f6",
                            fontWeight: 600,
                          }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "11px",
                          color: "#475569",
                          background: "rgba(255,255,255,0.04)",
                          padding: "4px 12px",
                          borderRadius: "100px",
                          border: "1px solid rgba(255,255,255,0.06)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <ul
                      style={{
                        paddingLeft: "0",
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      {exp.points.map((pt, j) => (
                        <li
                          key={j}
                          style={{
                            display: "flex",
                            gap: "10px",
                            fontSize: "14px",
                            color: "#94a3b8",
                            lineHeight: 1.6,
                          }}
                        >
                          <span
                            style={{
                              color: "#3b82f6",
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          >
                            ▸
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Projects */}
          <div id="projects">
            <Section title="Projects" emoji="🚀" delay={0.2}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                  gap: "16px",
                }}
              >
                {data.projects.map((proj, i) => (
                  <div
                    key={i}
                    className="bounce-hover"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: `1px solid ${proj.color}25`,
                      borderRadius: "20px",
                      padding: "24px",
                      position: "relative",
                      overflow: "hidden",
                      animation: `bounceIn 0.6s cubic-bezier(0.34,1.56,0.64,1) ${0.2 + i * 0.12}s both`,
                    }}
                  >
                    {/* Glow */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-30px",
                        right: "-30px",
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        background: proj.color,
                        filter: "blur(40px)",
                        opacity: 0.15,
                      }}
                    />

                    <div style={{ fontSize: "32px", marginBottom: "12px" }}>
                      {proj.emoji}
                    </div>
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: "8px",
                      }}
                    >
                      {proj.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#64748b",
                        lineHeight: 1.6,
                        marginBottom: "16px",
                      }}
                    >
                      {proj.desc}
                    </p>

                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                    >
                      {proj.tags.map((tag, t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: "11px",
                            fontWeight: 600,
                            fontFamily: "'JetBrains Mono', monospace",
                            color: proj.color,
                            background: `${proj.color}15`,
                            border: `1px solid ${proj.color}35`,
                            padding: "3px 10px",
                            borderRadius: "100px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Skills */}
          <div id="skills">
            <Section title="Skills" emoji="⚡" delay={0.3}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="skill-pill"
                    style={{
                      background: skillColors[i % skillColors.length],
                      borderColor: skillBorders[i % skillBorders.length],
                      color: "#fff",
                      animationDelay: `${i * 0.04}s`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Certs */}
              <div
                style={{
                  marginTop: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#64748b",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontFamily: "'JetBrains Mono', monospace",
                    marginBottom: "4px",
                  }}
                >
                  Certifications
                </h3>
                {data.certs.map((cert, i) => (
                  <div
                    key={i}
                    className="bounce-hover"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: "14px",
                      padding: "14px 20px",
                    }}
                  >
                    <span style={{ fontSize: "22px" }}>🎖️</span>
                    <div>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "#fff",
                        }}
                      >
                        {cert.name}
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#64748b",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {cert.issuer} · {cert.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Resume */}
          <div id="resume">
            <Section title="Let's Connect" emoji="✨" delay={0.4}>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.1) 100%)",
                  border: "1px solid rgba(139,92,246,0.2)",
                  borderRadius: "24px",
                  padding: "40px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    marginBottom: "16px",
                    animation: "float 3s ease-in-out infinite",
                  }}
                >
                  🤝
                </div>
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: "10px",
                  }}
                >
                  Open to Opportunities
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "15px",
                    marginBottom: "28px",
                    maxWidth: "400px",
                    margin: "0 auto 28px",
                  }}
                >
                  Looking for a frontend developer? I'd love to chat about your
                  project or team. Download my cv below. 👇
                </p>
                <a
                  href={resume}
                  download="Akash_Pattnaik_Resume.pdf"
                  className="bounce-hover"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "linear-gradient(135deg, #22c55e, #16a34a)",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "14px 32px",
                    borderRadius: "14px",
                    fontSize: "15px",
                    fontWeight: 700,
                    fontFamily: "'Outfit', sans-serif",
                    boxShadow: "0 8px 30px rgba(34,197,94,0.3)",
                  }}
                >
                  📄 Download CV
                </a>
              </div>
            </Section>
          </div>

          {/* Footer */}
          <div
            style={{
              textAlign: "center",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <p
              style={{
                color: "#1e293b",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                letterSpacing: "0.08em",
              }}
            >
              AKASH PATTNAIK · BHUBANESWAR, IN · 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
