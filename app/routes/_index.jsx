import { Link } from "react-router-dom";
export const meta = () => {
  return [{ title: "Portfolio 2024" }];
};

export default function Index() {
  return (
    <div className="page">
      <div className="banner">
        <p className="year">2024</p>
        <h1 className="title">PORTFOLIO</h1>
        <p className="by_alberte">BY ALBERTE ILLUM</p>
      </div>

      <div className="project-container">
        <h2 className="subtitle">
          READ ABOUT MY <br />
          PROJECTS
        </h2>

        <div className="project_1">
          <div>
            <img src="/assets/1.png" className="pic" alt="project 1" />
          </div>
          <div className="text-box">
            <h3 className="number">#1</h3>
            <p className="project-title">ASIAN FOOD CLUB</p>
            <div className="descrip-box">
              <p className="project-description">
                I built an event platform where users can create and sign up for events. The project had to meet a
                number of criteria and requirements that we learned during our 1st semester of web development. I worked
                with React Remix, MongoDB Atlas, Mongoose schema, CSS, and Remix-auth to build the site, and finally
                deployed it on Render.com.
              </p>
            </div>
            <Link to="/asianfoodclub" className="button-link">
              READ MORE
            </Link>
          </div>
        </div>

        <div className="project_2">
          <div className="text-box">
            <h3 className="number">#2</h3>
            <p className="project-title">MARKBLOMST</p>
            <div className="descrip-box">
              <p className="project-description">
                This project was a group assignment and we chose to focus on Markblomst, a recently established company
                specializing in sustainable and organic flower bouquets. Our goal was to develop a digital prototype for
                Markblomst that would add value for both the customers and the company. Throughout the project, we
                integrated theories, methods, and relevant tools from both the 2nd and 1st semester.
              </p>
            </div>
            <Link to="/markblomst" className="button-link">
              READ MORE
            </Link>
          </div>
          <div className="pic-box">
            <img src="/assets/2.png" className="pic" alt="project 2" />
          </div>
        </div>

        <div className="project_3">
          <div>
            <img src="/assets/3.png" className="pic" alt="project 3" />
          </div>
          <div className="text-box">
            <h3 className="number">#3</h3>
            <p className="project-title">GRAPHIC DESIGN INTERN</p>
            <div className="descrip-box">
              <p className="project-description">
                My role at Plaza primarily involved designing catalogs such as their wedding and Christmas catalogs, as
                well as signage for Black Friday, Cyber Monday, and for various stores across Denmark. Additionally, I
                managed their Facebook and Instagram accounts, where I created and posted content and responded to
                inquiries. I also participated in developing a content plan for TikTok.
              </p>
            </div>
            <Link to="/internship" className="button-link">
              READ MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
