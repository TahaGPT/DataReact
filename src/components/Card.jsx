import markerImage from "../assets/marker.png"

export default function Card(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" src={props.something.img.src} alt={props.something.img.alt} />
      </div>
      <div className="info-container">
        <img className="marker" src={markerImage} alt="map marker icon" />
        <span className="country">{props.something.country}</span>
        <a href={props.something.googleMapsLink}>View on Google Maps</a>
        <h2 className="entry-title">{props.something.title}</h2>
        <p className="trip-dates">{props.something.dates}</p>
        <p className="entry-text">{props.something.text}</p>
      </div>
    </article>
  );
}