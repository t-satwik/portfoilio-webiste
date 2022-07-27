import "../index.css";
import Button from "./Button";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-row-1">
        <h3>{props.one}</h3>
        <p className="p-bold">{props.oneSub}</p>
      </div>
      <div className="card-row-2">
        <p>{props.two}</p>
        <p>{props.twoSub}</p>
      </div>
      <div className="card-row-3">
        {props.three.map((line) => (
          <p>{line}</p>
        ))}
      </div>
      {props.skills && props.skills.length > 0 && (
        <div className="card-row-4">
          <p>Technologies Worked On:</p>
          {props.skills.map((skill) => (
            <Button variant="skill" text={skill} />
          ))}
        </div>
      )}
    </div>
  );
}
