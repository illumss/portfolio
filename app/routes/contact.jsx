export const meta = () => {
  return [{ title: "Portfolio 2024 | contact" }];
};

export default function Contact() {
  return (
    <div className="page">
      <div className="grid-container-contact">
        <div className="image-box">
          <div className="content-box">
            <h3>MAIL</h3>
            <p>
              <a href="mailto:alberte-illum@hotmail.com">alberte-illum@hotmail.com</a>
            </p>
            <h3>PHONE</h3>
            <p>+45 29 91 64 35</p>
            <h3>LOCATION</h3>
            <p>Vejle 7100, Denmark</p>
          </div>
        </div>
      </div>

      <div>
        <p className="message">
          If you have any questions about me, my projects or my upcoming internship feel free to send me an email, call
          me or connect with me on LinkedIn! I am always open to new opportunities and collaborations.
        </p>
      </div>
    </div>
  );
}
