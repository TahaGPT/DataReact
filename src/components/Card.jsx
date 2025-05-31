import korean1 from "../assets/korean1.jpg"

export default function Card() {
    return (
      <article>
        <div className="card box">
          <img src={korean1} alt="Korean Nigga" />
        </div>
        <h1>Kim Seok Jin</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio
        blanditiis porro necessitatibus ducimus sed maiores quibusdam
        soluta, repudiandae accusantium ad quis ex temporibus dicta, maxime
        reiciendis qui? Dignissimos, recusandae!
        </p>
      </article>
    );
}