import Button from "./Button";
import about from "./images/about.png";

function onClick()  {
  console.log('clicked from app');
}

function App() {
  return (
    <>
      <Button variant='contact' text='react' onClick={onClick}/>
    </>
  );
}

export default App;
