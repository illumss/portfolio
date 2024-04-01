import { Link } from "react-router-dom";
export const meta = () => {
  return [{ title: "Portfolio 2024 | Internship" }];
};

export default function Internship() {
  return (
    <div className="page">
      <div className="banner">
        <div className="go-back-button">
          <Link to="/" className="button-link">
            Go back
          </Link>
          <Link to="/asianfoodclub" className="button-link">
            View next
          </Link>
        </div>
        <h1>GRAPHIC DESIGN INTERN</h1>
      </div>

      <div className="hi">
        <div className="billeder3">
          <img src="/assets/shoes.jpg" className="iipic" alt="asian food" />
          <img src="/assets/logo.png" className="iipic" alt="asian food" />
          <img src="/assets/ring.jpeg" className="iipic" alt="asian food" />
        </div>
      </div>

      <div className="first-section">
        <div className="txt-sec">
          <h2>Plaza Watches & Jewelry</h2>
          <p>
            My role at Plaza primarily involved designing catalogs and signage, such as their wedding and Christmas
            catalogs and signage for Black Friday and Cyber Monday, as well as for the stores around Denmark.
            Additionally, I was responsible for managing their Facebook and Instagram accounts. This included creating
            and posting content and responding to messages and other inquiries through social media channels. I was also
            involved in developing a content plan for TikTok, as they wanted to be active on that platform mainly to
            create awareness and engagement among the younger target audience.
            <br />
            <br />
            I accompanied PLAZA to photoshoots, where I managed the jewelry and styled the model&apos;s outfits, and I
            also attended training sessions.
            <br />
            <br />
            Furthermore, I was responsible for creating newsletters and generating content for them, such as
            competitions, games, offers, and informing subscribers about news from various brands and PLAZA&apos;s
            services and unique selling points.
          </p>
        </div>
        <div className="used-tools">
          <h2 className="b-title">Programs used during the internship</h2>
          <ul>
            <li>Premiere pro</li>
            <li>Splice</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Indesign</li>
            <li>Onlypult</li>
            <li>Gimp</li>
            <li>Klaviyo</li>
            <li>Canva</li>
            <li>Issuu</li>
            <li>Umbraco</li>
          </ul>
        </div>
      </div>

      <div className="third-section">
        <h2>4 examples from Instagram Stories</h2>
        <div className="billeder">
          <img src="/assets/story1.jpg" className="ipic" alt="asian food" />
          <img src="/assets/story2.jpg" className="ipic" alt="asian food" />
          <img src="/assets/story3.jpg" className="ipic" alt="asian food" />
          <img src="/assets/story4.png" className="ipic" alt="asian food" />
        </div>
      </div>

      <div className="fourth-section">
        <h2>Jewelry collages for the newsletter</h2>
        <div className="billeder3">
          <img src="/assets/collage.jpg" className="iipic" alt="asian food" />
          <img src="/assets/collage2.jpg" className="iipic" alt="asian food" />
          <img src="/assets/collage3.jpg" className="iipic" alt="asian food" />
        </div>
      </div>

      <div className="fifth-section">
        <h2>Articles about byBiehl and Sif Jakobs Jewelry created in InDesign</h2>
        <div className="billeder2">
          <img src="/assets/catalog.png" className="iiipic" alt="asian food" />
          <img src="/assets/catalog2.png" className="iiipic" alt="asian food" />
        </div>
      </div>

      <div className="sixth-section">
        <h2>2022 online wedding magazine - can be browsed through using Issuu</h2>
        <div className="billede">
          <img src="/assets/wedding.png" className="iiiipic" alt="asian food" />
        </div>
      </div>

      <div className="seventh-section">
        <h2>Brand Text with SEO Focus</h2>
        <div className="billede">
          <img src="/assets/seo.png" className="iiiipic" alt="asian food" />
        </div>
      </div>

      <div className="eighth-section">
        <h2>Excerpt from newsletter - Black Design</h2>
        <div className="billeder2">
          <img src="/assets/piccy.png" className="iipic" alt="asian food" />
          <img src="/assets/news.png" className="iipic" alt="asian food" />
        </div>
      </div>

      <div className="ninth-section">
        <h2>Social media posts for Instagram and Facebook created in OnlyPult</h2>
        <div className="ontop">
          <img src="/assets/scheduled.png" className="iiiipic" alt="asian food" />
          <img src="/assets/scheduled2.png" className="iiiipic" alt="asian food" />
        </div>
      </div>
    </div>
  );
}
