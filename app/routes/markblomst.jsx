import { Link } from "react-router-dom";
export const meta = () => {
  return [{ title: "Portfolio 2024 | Markblomst" }];
};

export default function Markblomst() {
  return (
    <div className="page">
      <div className="banner">
        <div className="go-back-button">
          <Link to="/" className="button-link">
            Go back
          </Link>
          <Link to="/internship" className="button-link">
            View next
          </Link>
        </div>
        <h1>MARKBLOMST</h1>
      </div>

      <div className="first-section">
        <div className="txt-sec">
          <h2>2nd Semester Exam Project</h2>
          <p>
            This project was the exam project at the end of the 2nd semester. It was a group project, and my group and I
            chose to work with the company Markblomst, which is a small newly established company that sells sustainable
            and organic flower bouquets. We were tasked with developing a concept and an interactive digital prototype
            for Markblomst, and this concept was supposed to create value for the customer. During the project, we were
            required to incorporate and apply theories, methods, and relevant tools from both the 2nd and 1st semesters.
          </p>
        </div>
        <div className="img-sec">
          <img src="/assets/Markblomst-forside-mockup.jpg" className="right-pic" alt="asian food" />
        </div>

        <div>
          <p>
            We created a website designed to function as an information site. Here, users could find information about
            the company, get inspiration, and read do-it-yourself tips. This site also serves as a platform for the
            company to express its important message, as it was crucial for our client to spread the message about why
            it is better to purchase sustainably and organically.
            <br />
            <br /> See the website here.
          </p>
        </div>
        <div className="img-sec">
          <img src="/assets/Markblomst-forside-mockup2.jpg" className="right-pic" alt="asian food" />
        </div>
      </div>

      <div className="second-section">
        <h2>Logo og illustrations</h2>
        <p>
          We were also tasked with developing a visual identity for the company. This was done with close contact with
          the owner of Markblomst, who wanted a cool and colorful website. We created a logo and illustrations that were
          to be used on the website and on social media. The logo was designed to be simple and recognizable, and the
          illustrations were designed to be colorful and eye-catching. We also created a color palette and a font that
          matched the company&apos;s values and message. We worked in iterations and presented it to the owner each time
          to get feedback and make changes accordingly. <br /> <br />
          <br /> <br />
        </p>
        <div className="billeder">
          <img src="/assets/fluer.jpg" className="mpic" alt="asian food" />
          <img src="/assets/logoide.png" className="mpic" alt="asian food" />
          <img src="/assets/groen-logo.png" className="mpic" alt="asian food" />
          <img src="/assets/illustrationer.png" className="mpic" alt="asian food" />
        </div>
      </div>

      <div className="third-section">
        <h2>SoMe content</h2>
        <p>
          After we had submitted the report and URL for the website, we began to further develop. Here, we chose to
          optimize the company&apos;s social media presence because the client wanted to increase awareness of the
          company. It is therefore obvious to focus on social media in this context. To this end, we created a content
          plan and a yearly calendar to better maintain the interest of the target audience throughout the year. We
          developed strategies for what content to post on social media and when to post it in order to reach the widest
          possible audience in the best possible way. <br /> <br />
          This is an example of one of the Instagram Posts we created for Markblomst.
        </p>
        <div className="billeder5">
          <img src="/assets/Opslag-IG-1.jpg" className="somepic" alt="asian food" />
          <img src="/assets/Opslag-IG-2.jpg" className="somepic" alt="asian food" />
          <img src="/assets/Opslag-IG-3.jpg" className="somepic" alt="asian food" />
          <img src="/assets/Opslag-IG-4.jpg" className="somepic" alt="asian food" />
          <img src="/assets/Opslag-IG-5.png" className="somepic" alt="asian food" />
        </div>
      </div>
    </div>
  );
}
