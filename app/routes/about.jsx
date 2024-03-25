export const meta = () => {
  return [{ title: "Portfolio 2024 | about" }];
};

export default function About() {
  return (
    <div className="page">
      <div className="banner">
        <h1>HI!</h1>
      </div>

      <div className="grid-container">
        <div>
          <h2>
            My name is Alberte Illum <br />
            and Im a web developer
          </h2>
          <p>
            I am 25 years old and currently residing in the heart of Vejle with my boyfriend. My passion lies in web
            development, and I am always seeking new ways to enhance my skills. <br />
            <br />I am currently pursuing a top-up Bachelor&apos;s degree in Web Development at Business Academy Aarhus,
            and I am seeking an internship opportunity in the fall of 2024. The ideal internship for me would be at a
            place where I can work on coding websites, while also having the opportunity to delve a little bit into web
            design and UX/UI design.
          </p>
        </div>

        <div>
          <img src="/assets/mig_b&w.jpg" className="pic" alt="Alberte Illum" />
        </div>
      </div>

      <h3 className="section-title">Experience</h3>
      <div className="grid-container">
        <div className="image-container">
          <img src="/assets/plaza.jpg" className="pic" alt="Plaza Ure & Smykker" />
        </div>
        <div className="text-container">
          <p className="sum1">GRAPHIC DESIGN INTERN</p>
          <p className="sum2">2022, PLAZA Ure & Smykker</p>
          <p className="sum3">
            During my internship at PLAZA Ure & Smykker, I was responsible for designing catalogs, signs, newsletters,
            and advertising banners. Additionally, I contributed to updating their website with SEO and copywriting. I
            also managed their social media platforms and created content for them.
          </p>
          <br />
          <p className="sum1">STUDENTHELPER FOR WEB</p>
          <p className="sum2">2023-2024, Borgmesterstablen Politik, Analyse & Kommunikation i Vejle Kommune</p>
          <p className="sum3">
            I am working as a studenthelper at the Mayor&apos;s Office for Politics, Analysis & Communication in Vejle
            Municipality, where I was tasked with preparing for the implementation of a new website. Additionally, I was
            assigned to design and develop a new website for students in Vejle named StudyIn.
          </p>
        </div>
      </div>

      <h3 className="section-title">Education</h3>
      <div className="grid-container">
        <div className="text-container">
          <p className="sum1">AU IN MULTIMEDIE DESIGN</p>
          <p className="sum2">2021-2023, Erhvervsakadami Aarhus</p>
          <p className="sum3">
            I have a degree in Multimedia Design from Business Academy Aarhus, where I gained expertise in graphic
            design, web development, UX/UI design, and more. Through this program, I had the opportunity to delve into
            the Adobe Creative Suite, and I have particularly excelled in Photoshop, InDesign, and Illustrator.
          </p>
          <br />
          <p className="sum1">PBA IN WEB DEVELOPMENT</p>
          <p className="sum2">2023-2025, Erhvervsakadami Aarhus</p>
          <p className="sum3">
            I am currently pursuing a Professional Bachelor&apos;s Degree in Web Development at Business Academy Aarhus,
            where I am learning to work with databases, APIs, JavaScript, React, and much more.
          </p>
        </div>

        <div className="image-container">
          <img src="/assets/mig.jpg" className="pic" alt="Alberte Illum" />
        </div>
      </div>

      <h3 className="section-title">Andet erfaring</h3>
      <div className="other-experience">
        <div className="grid-container">
          <div className="left">
            <p className="skill1">Multimedia Design</p>

            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Adobe InDesign</li>
            <li>Adobe Premiere Pro</li>
            <li>Adobe Lightroom</li>
            <li>Adobe XD</li>
            <li>Figma</li>
            <li>Procreate</li>
            <li>Canva</li>
            <li>Klaviyo</li>
            <li>Issuu</li>
            <li>OnlyPult</li>
            <li>Facebook Business Manager</li>
            <li>UX/UI</li>
            <li>Illustration</li>
            <li>Copywriting</li>
            <li>Branding</li>
            <li>Content creation</li>
            <li>Photography</li>
          </div>
          <div className="right">
            <p className="skill2">Web Development</p>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Remix</li>
            <li>Rest API</li>
            <li>Git</li>
            <li>Github</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>WordPress</li>
            <li>Umbraco</li>
          </div>
        </div>
      </div>

      <div>
        <img src="/assets/mix.png" className="mix" alt="Collage of friends and me" />
      </div>
    </div>
  );
}
