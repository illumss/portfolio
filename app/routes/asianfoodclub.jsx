import { Link } from "react-router-dom";
export const meta = () => {
  return [{ title: "Portfolio 2024 | Asian Food Club" }];
};

export default function Asianfoodclub() {
  return (
    <div className="page">
      <div className="banner">
        <div className="go-back-button">
          <Link to="/" className="button-link">
            Go back
          </Link>
          <Link to="/markblomst" className="button-link">
            View next
          </Link>
        </div>
        <h1>ASIAN FOOD CLUB</h1>
      </div>

      <div className="first-section">
        <div className="txt-sec">
          <h2>Eventplatform for Asian food enthusiasts</h2>
          <p>
            Are you crazy about Asian cuisine and love sharing your passion with others? Then you&apos;ve come to the
            right place! Asian Food Club is your vibrant online destination for discovering, joining, and organizing
            events with other food enthusiasts who share your love for the amazing world of Asian gastronomy.
            <br />
            <br />
            We were tasked with building an event platform where users can create and sign up for events. The project
            had to meet a set of criteria and requirements that we learned during the 1st semester. I worked with
            React-remix, MongoDB Atlas, Mongoose schema, CSS, and remix-auth to build the site, and finally deployed it
            on Render.com. <br />
            <br />
            See the website here.
          </p>
        </div>

        <div className="used-tools">
          <h2 className="b-title">Made with</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React-remix</li>
            <li>MongoDB Atlas</li>
            <li>Mongoose</li>
            <li>Remix-auth</li>
            <li>Photoshop</li>
            <li>Canva</li>
            <li>Render.com</li>
            <li>Unsplash</li>
          </ul>
        </div>
      </div>

      <div className="second-section">
        <div className="billeder2">
          <img src="/assets/asf.png" className="iiipic" alt="asian food" />
          <img src="/assets/asf2.png" className="iiipic" alt="asian food" />
        </div>
      </div>
    </div>
  );
}
