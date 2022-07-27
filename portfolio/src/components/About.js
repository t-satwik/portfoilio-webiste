import '../index.css'
import Button from './Button';
import download from '../images/download.png';
import avatar from '../images/avatar.png';

export default function About(props) {
  return (
    <div id='about' className='about'>
      <div className='about-left'>
        <div className="about-row-1">
          <h1>
            Hello, I am 
          </h1>
          <h1 className='h1-bold name'>
            Satwik Talluri
          </h1>
        </div>
        <div className="about-row-2">
          <h2>
          Diligent Computer Science student with proficient technical skills
          and experience,
          seeking oppurtunities to gain industry experience and hone my skills.
          </h2>
        </div>
        <div className='about-row-3'>
          <Button variant='primary' text='Download Resume' icon={download}/>
        </div> 
      </div>   
      <div className="about-right">
        <img className='avatar' src={avatar} alt='avatar'/>
      </div>  
    </div>
  );
}