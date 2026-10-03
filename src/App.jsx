import { useEffect, useState } from "react";
import "./App.css";
import profilePhoto from "./assets/profile.jpg";

const projects = [
  {
    title: "Short-Form Content",
    category: "TikTok / Reels / Shorts",
    description:
      "Fast-paced short-form edits featuring engaging hooks, captions, jump cuts, transitions, sound effects, and dynamic pacing.",
    tags: ["Short-Form", "Captions", "Jump Cuts"],
    videoSrc: "/work/short.mp4",
  },
  {
    title: "Long-Form Editing",
    category: "Event Highlights / Freelance",
    description:
      "Polished event highlights and freelance video edits with engaging storytelling, clean pacing, sound design, and color correction.",
    tags: ["Event Highlights", "Freelance", "Storytelling"],
    href: "https://www.facebook.com/share/v/1MGzpJMRFk/",
    linkLabel: "Watch on Facebook",
  },
  {
    title: "Motion Graphics",
    category: "Motion Design",
    description:
      "Dynamic motion graphics, animated text, visual effects, transitions, and branded elements designed to make content more engaging.",
    tags: ["After Effects", "Motion Graphics", "Animation"],
    videoSrc: "/work/motion-graphics.mp4",
  },
];

const skills = [
  "Video Editing",
  "Motion Graphics",
  "Short-Form Content",
  "Long-Form Editing",
  "Color Grading",
  "Color Correction",
  "Sound Design",
  "Dynamic Captions",
  "Transitions",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "CapCut",
];

const services = [
  "Short-Form Video Editing",
  "Long-Form Video Editing",
  "Motion Graphics",
  "YouTube Editing",
  "Social Media Content",
  "Captions & Subtitles",
  "Color Grading",
  "Sound Design",
];

const roles = [
  "Video Editor",
  "Motion Graphics Designer",
  "Content Creator",
  "Visual Storyteller",
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  // Dark / Light mode
  useEffect(() => {
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];

    let index = 0;
    let deleting = false;

    const timer = setInterval(() => {
      if (!deleting) {
        setTypedText(currentRole.slice(0, index + 1));
        index++;

        if (index === currentRole.length) {
          deleting = true;
        }
      } else {
        setTypedText(currentRole.slice(0, index - 1));
        index--;

        if (index === 0) {
          deleting = false;
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 55 : 90);

    return () => clearInterval(timer);
  }, [roleIndex]);

  // Scroll reveal animation
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">
      {/* Background */}
      <div className="background-grid" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <a
          className="logo"
          href="#home"
          onClick={closeMenu}
        >
          <span className="logo-mark">R</span>

          <span>
            REYNEL<span className="accent">.</span>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          {/* Theme button */}
          <button
            className="theme-button"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀" : "☾"}
          </button>

          {/* Contact */}
          <a
            className="nav-cta"
            href="#contact"
          >
            Let's Talk
          </a>

          {/* Mobile menu */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main>
        {/* ================= HERO ================= */}
        <section
          id="home"
          className="hero section"
        >
          {/* Hero text */}
          <div className="hero-content reveal">
            <p className="eyebrow">
              <span className="status-dot" />
              Available for video editing projects
            </p>

            <h1>
              Bringing ideas to life
              <span className="gradient-text">
                {" "}through video.
              </span>
            </h1>

            <p className="hero-role">
              I'm a{" "}
              <strong>{typedText}</strong>
              <span className="cursor">|</span>
            </p>

            <p className="hero-description">
              I'm a Video Editor and Motion Graphics Designer
              creating engaging, high-quality content for
              creators, brands, and businesses.
            </p>

            <div className="hero-buttons">
              <a
                className="button primary"
                href="#projects"
              >
                View My Work
                <span>↗</span>
              </a>

              <a
                className="button secondary"
                href="#contact"
              >
                Let's Work Together
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div>
                <strong>12</strong>
                <span>Editing Skills</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Featured Projects</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Ideas</span>
              </div>
            </div>
          </div>

          {/* ================= PROFILE CARD ================= */}
          <div className="hero-visual reveal">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="profile-card">
              {/* YOUR REAL PHOTO */}
              <div className="profile-photo">
                <img
                  src={profilePhoto}
                  alt="Reynel profile"
                />
              </div>

              <div className="profile-card-info">
                <span>VIDEO EDITING / 2026</span>

                <h2>
                  Video Editor &amp; Motion Designer
                </h2>
              </div>

              {/* Floating badge */}
              <div className="floating-badge badge-top">
                <span>✦</span>
                Motion Graphics
              </div>

              {/* Floating badge */}
              <div className="floating-badge badge-bottom">
                <span>⌁</span>
                Video Editing
              </div>
            </div>
          </div>
        </section>

        {/* ================= MARQUEE ================= */}
        <div className="marquee">
          <div className="marquee-track">
            <span>VIDEO EDITING</span>
            <b>✦</b>

            <span>MOTION GRAPHICS</span>
            <b>✦</b>

            <span>VISUAL STORYTELLING</span>
            <b>✦</b>

            <span>SOUND DESIGN</span>
            <b>✦</b>

            <span>VIDEO EDITING</span>
            <b>✦</b>

            <span>MOTION GRAPHICS</span>
            <b>✦</b>

            <span>VISUAL STORYTELLING</span>
            <b>✦</b>

            <span>SOUND DESIGN</span>
            <b>✦</b>
          </div>
        </div>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="section content-section"
        >
          <div className="section-heading reveal">
            <p className="eyebrow">
              01 / ABOUT
            </p>

            <h2>
              A little bit{" "}
              <span className="gradient-text">
                about my work.
              </span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-copy reveal">
              <p className="large-copy">
                Hi! I'm a passionate Video Editor and Motion
                Graphics Designer focused on creating engaging
                and high-quality video content.
              </p>

              <p>
                I specialize in editing content for creators,
                brands, and businesses, from fast-paced
                short-form videos to polished long-form content.
              </p>

              <p>
                I combine storytelling, motion graphics, sound
                design, color, typography, and creative editing
                to turn ideas into videos that connect with
                audiences.
              </p>

              <p>
                I'm quick to communicate, open to feedback, and
                detail-oriented, with a flexible approach and a
                commitment to polished work delivered on time.
              </p>
            </div>

            <div className="about-cards reveal">
              <div className="mini-card">
                <span>01</span>

                <h3>
                  Storytelling
                </h3>

                <p>
                  Turning footage and ideas into engaging visual
                  stories.
                </p>
              </div>

              <div className="mini-card">
                <span>02</span>

                <h3>
                  Motion Graphics
                </h3>

                <p>
                  Creating dynamic motion graphics, transitions,
                  and animated elements.
                </p>
              </div>

              <div className="mini-card">
                <span>03</span>

                <h3>
                  Attention to Detail
                </h3>

                <p>
                  Focusing on timing, sound, color, typography,
                  and visual flow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section
          id="skills"
          className="section content-section"
        >
          <div className="section-heading reveal">
            <p className="eyebrow">
              02 / EDITING TOOLKIT
            </p>

            <h2>
              Tools & skills I use{" "}
              <span className="gradient-text">
                to create.
              </span>
            </h2>
          </div>

          <div className="skills-grid reveal">
            {skills.map((skill, index) => (
              <div
                className="skill-card"
                key={skill}
              >
                <span className="skill-number">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <span className="skill-name">
                  {skill}
                </span>

                <span className="skill-arrow">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section
          id="services"
          className="section content-section"
        >
          <div className="section-heading reveal">
            <p className="eyebrow">
              03 / SERVICES
            </p>

            <h2>
              Editing for every{" "}
              <span className="gradient-text">
                kind of story.
              </span>
            </h2>
          </div>

          <div className="services-grid reveal">
            {services.map((service, index) => (
              <article className="mini-card service-card" key={service}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{service}</h3>
              </article>
            ))}
          </div>

          <div className="availability reveal">
            <div>
              <p className="eyebrow">CURRENT AVAILABILITY</p>
              <h3>Available Part-Time</h3>
              <p>Up to 20 hours per week</p>
            </div>
            <div className="availability-hours">
              <span>Monday–Friday after 2:00 PM PHT</span>
              <span>Sundays</span>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section
          id="projects"
          className="section content-section"
        >
          <div className="section-heading project-heading reveal">
            <div>
              <p className="eyebrow">
                04 / SELECTED WORK
              </p>

              <h2>
                Content I've{" "}
                <span className="gradient-text">
                  created.
                </span>
              </h2>
            </div>

            <p className="section-note">
              A selection of video editing and motion graphics
              work focused on storytelling, engagement, and
              visual quality.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map(
              (project, index) => (
                <article
                  className="project-card reveal"
                  key={project.title}
                >
                  <div
                    className={`project-image project-${
                      index + 1
                    }`}
                  >
                    {project.videoSrc && (
                      <video
                        aria-label={`${project.title} video sample`}
                        controls
                        playsInline
                        preload="metadata"
                        src={project.videoSrc}
                      />
                    )}

                    <span>
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    {!project.videoSrc && (
                      <>
                        <div className="project-shape" />
                        <div className="project-lines" />
                      </>
                    )}

                    {project.href && (
                      <a
                        aria-label={`Open ${project.title} on Facebook`}
                        className="project-image-link"
                        href={project.href}
                        rel="noreferrer"
                        target="_blank"
                      />
                    )}
                  </div>

                  <div className="project-content">
                    <p className="project-category">
                      {project.category}
                    </p>

                    <h3>
                      {project.title}
                    </h3>

                    <p>
                      {project.description}
                    </p>

                    <div className="tag-list">
                      {project.tags.map(
                        (tag) => (
                          <span key={tag}>
                            {tag}
                          </span>
                        )
                      )}
                    </div>

                    {project.href && (
                      <a
                        className="project-link"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.linkLabel || "View project"}{" "}
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section
          id="contact"
          className="section contact-section"
        >
          <div className="contact-box reveal">
            <p className="eyebrow">
              05 / CONTACT
            </p>

            <h2>
              Have a video that
              <br />

              <span className="gradient-text">
                needs editing?
              </span>
            </h2>

            <p>
              Whether you need short-form content, YouTube
              videos, motion graphics, or a complete video edit,
              I'd love to hear about your project.
            </p>

            <div className="contact-actions">
              <a
                className="button primary"
                href="mailto:getullereynel0707@gmail.com?subject=Video%20Editing%20Project"
              >
                Email Me ↗
              </a>

              <a
                className="button secondary"
                href="https://www.instagram.com/krnstyl.kei/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram · @krnstyl.kei ↗
              </a>

              <a
                className="button secondary"
                href="https://www.facebook.com/rey.nel.5249"
                target="_blank"
                rel="noreferrer"
              >
                Facebook · Nel ↗
              </a>

              <a
                className="button secondary"
                href="#projects"
              >
                View My Work
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <span>
          © 2026 REYNEL. All rights reserved.
        </span>

        <span>
          Video Editing • Motion Graphics • Visual Storytelling
        </span>
      </footer>
    </div>
  );
}

export default App;