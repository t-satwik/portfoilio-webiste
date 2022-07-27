import "../index.css";
import Button from "./Button";

export default function ContactCard(props) {
  return (
    <div className="contact-card">
        <div className="contact-card-col-1">
            <img src={props.icon}/>
            <h3 className="h3-bold">{props.title}</h3>
        </div>
        <div className="contact-col-2">
            <Button variant='contact' text={props.contact} />
        </div>
    </div>
  );
}
