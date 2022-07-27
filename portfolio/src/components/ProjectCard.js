import "../index.css";
import Button from "./Button";

export default function Card(props) {
  return (
    <div className="project-card">
     {props.photos && 
      <div className="project-photos">
        <img src={props.photos[0]}/>
        <img src={props.photos[0]}/>
        <div className="view-more"><Button variant='navbar' text='View More'/></div>
      </div>}
      <div className="project-info">
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
      <div className="project-actions">
        <Button variant="primary" text='View Demo' />
        <Button variant="primary" text='View Code' />
      </div>
    </div>
  );
}
