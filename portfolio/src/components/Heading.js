import "../index.css";

export default function Heading(props) {
  return (
    <>
      <div className="heading">
        <img height="65px" src={props.image} className="heading-icon" />
        <h1 className="heading-title">{props.title}</h1>
      </div>
      <div className="heading-underline"></div>
    </>
  );
}
