export default function Home() {
  return (
    <>
      {/* ---------- NAVIGATION ---------- */}
      <header className="nav">
        <a href="#home" className="logo">Derence Calagsing</a>
        <nav>
          <a href="#home">Home</a>
          <a href="#education">Education</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* ---------- 1. HOME ---------- */}
        <section id="home" className="hero">
          <div className="avatar">
            <img src="download.jpg" alt="Your Name" />
          </div>
          {/* When you have a photo, put it in /public/me.jpg and replace the
              div above with: <img className="avatar" src="/me.jpg" alt="Your Name" /> */}
          <div className="hero-text">
            <p className="eyebrow">Hello, I&apos;m</p>
            <h1>Derence Calagsing</h1>
            <h2>Software Engineer</h2>
            <p>
              I am currently pursuing a degree in BS Information Technology at Adamson University. I have a strong interest in software development and networking, and I am passionate about learning new technologies and improving my skills.
            </p>
            <p className="welcome">Welcome to my website! Feel free to look around.</p>
            <a href="#contact" className="btn">Get in touch</a>
          </div>
        </section>

        {/* ---------- 2. EDUCATIONAL BACKGROUND ---------- */}
        <section id="education">
          <h2 className="section-title">Educational Background</h2>
          <div className="cards">
            <article className="card">
              <h3>BS Information Technology</h3>
              <p className="meta">Adamson University · 2026 – </p>
              <p>Currently pursuing a degree in BS Information Technology.</p>
            </article>

            <article className="card">
              <h3>Junior High School to Senior High School</h3>
              <p className="meta">Del Pilar Academy · 2022 – 2026</p>
              <p>Studied Junior High School to Senior High School and Graduated.</p>
              <p>Worked in immersion program in a Science and Technology School.</p>
            </article>
          </div>
        </section>

        {/* ---------- 3. ABOUT ME ---------- */}
        <section id="about">
          <h2 className="section-title">About Me</h2>
          <p>
            I am a passionate IT student with a strong interest in software development as well as in networking. I enjoy learning new programming languages and frameworks, and I am always looking for opportunities to improve my skills and contribute to meaningful projects.
          </p>
          <h3>Interests &amp; Hobbies</h3>
          <ul className="tags">
            <li>Software Development</li>
            <li>Sports</li>
            <li>Reading</li>
            <li>Playing Video Games</li>
          </ul>
        </section>

        {/* ---------- 4. SKILLS ---------- */}
        <section id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="cards">
            <article className="card">
              <h3>Programming Languages</h3>
              <ul className="tags">
                <li>C++</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>C#</li>
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </article>

            <article className="card">
              <h3>Frameworks &amp; Libraries</h3>
              <ul className="tags">
                <li>React</li>
                <li>Node.js</li>
                <li>Next.js</li>
              </ul>
            </article>

            <article className="card">
              <h3>Tools</h3>
              <ul className="tags">
                <li>Visual Studio Code</li>
                <li>Github</li>
                <li>Visual Studio</li>
                <li>MySql</li>
                <li>Notepad++</li>
                <li>IntelliJ IDEA</li>
              </ul>
            </article>
          </div>
        </section>

        {/* ---------- 5. CONTACT ---------- */}
        <section id="contact">
          <h2 className="section-title">Contact</h2>
          <p>Want to work together or just say hi? Reach out:</p>
          <ul className="contact-list">
            <li>
              Email: <a href="mailto:derence.kane.calagsing@adamson.edu.ph">derence.kane.calagsing@adamson.edu.ph</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/KCals32444" target="_blank" rel="noreferrer">github.com/KCals32444</a>
            </li>
            <li>
              LinkedIn: <a href="https://www.linkedin.com/in/derence-calagsing-1b0864451" target="_blank" rel="noreferrer">linkedin.com/in/derence-calagsing-1b0864451</a>
            </li>
            <li>
              Facebook: <a href="https://www.facebook.com/kanederence.lovendino" target="_blank" rel="noreferrer">facebook.com/kanederence.lovendino</a>
            </li>
          </ul>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Derence Calagsing. All rights reserved.</p>
      </footer>
    </>
  );
}
