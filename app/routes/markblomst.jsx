export const meta = () => {
  return [{ title: "Portfolio 2024 | Markblomst" }];
};

export default function Markblomst() {
  return (
    <div className="page">
      <div className="banner">
        <h1>MARKBLOMST</h1>
      </div>

      <div className="first-section">
        <div className="txt-sec">
          <h2>Event side for asiatisk madentusiater</h2>
          <p>
            “Er du vild med asiatisk mad og elsker du at dele din passion med andre? Så er du kommet til det rette sted!
            Asian Food Club er din farverige online destination for at opdage, deltage og arrangere events med andre
            madentusiaster, der deler din forkærlighed for den fantastiske verden af asiatisk gastronomi.”
            <br />
            <br />
            Vi skulle bygge en event platform, hvor brugere kan oprette og tilmelde sig events. Projektet skulle opfylde
            en række kriterier og krav, som vi har lært i løbet af første semester. Jeg har arbejdet med React-remix,
            MongoDB Atlas, Mongoose schema, CSS, og remix-auth til at bygge siden, og til slut deployet på Render.com.
            Se hjemmesiden her.
          </p>
        </div>
        <div className="img-sec">
          <img src="/assets/asian-food.jpg" className="pic" alt="asian food" />
        </div>
      </div>
    </div>
  );
}
