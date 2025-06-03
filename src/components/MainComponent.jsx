import Card from "./Card.jsx"
import data from "./Data.js"


export default function MainComponent() {
  const myCards = data.map((item) => {
    return (
      <Card
        key ={item.id}
        img={item.img}
        title={item.title}
        country={item.country}
        googleMapsLink={item.googleMapsLink}
        dates={item.dates}
        text={item.text}
      />
    )
  })
  return (
    <main>
      <h1>Welcome to My Travel Journal</h1>
      <p>Explore the world through my travel experiences.</p>
      <section>
        <h2>Latest Adventures</h2>
        <ul>
          <li>Trip to the Grand Canyon</li>
          <li>Exploring the streets of Paris</li>
          <li>Beach vacation in Hawaii</li>
        </ul>
      </section>
      <section className="cards">
        {myCards}
        {/* <Card
          img={{
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji"
          }}
          title="Mount Fuji"
          country="Japan"
          googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          dates="12 Jan, 2021 - 24 Jan, 2021"    
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        /> */}

        {/* <Card />
        <Card />
        <Card /> */}
      </section>
    </main>
  );
}
