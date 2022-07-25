import './index.css'

const allowedVariants=['primary', 'navbar', 'skill', 'contact'];

export default function Button(props) {
  return (
    <button
      className={`btn-${props.variant} btn-text`}
      onClick={props.onClick}
    >
      {props.icon && <img src={props.icon}></img>}
      {props.text}
    </button>
  );
}