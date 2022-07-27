import '../index.css'
import project from '../images/experience.png';
import Heading from './Heading';
import ProjectCard from './ProjectCard';
import photo from '../images/photos.png';

export default function Projects(props) {
  return (
    <div id='projects'>
        <Heading title='Projects' image={project}/>
        <ProjectCard 
          photos={[photo, photo]}
          one="IIT DHarwad" 
          oneSub='CPI: 9.68/10.00' 
          two='Bachelors of Technology' 
          twoSub='2019-23' 
          three={[
            '-> Received AP grade for exceptional performance in the software engineering course in the 5th semester.',
            '-> Relevant coursework: Design and Analysis of Algorithms, Software Engineering, Data Bases and Information Systems, Software Systems Lab, Data Analysis, Data Structures and Algorithms, Computer Architecture'
          ]} 
          skills={['abc']}/>

    </div>
  );
}