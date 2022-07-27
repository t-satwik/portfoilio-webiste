import '../index.css'
import education from '../images/education.png';
import Heading from './Heading';
import Card from './Card';
export default function Education(props) {
  return (
    <div id='education'>
        <Heading 
          title='Education' 
          image={education}
        />
        <Card 
          one="IIT DHarwad" 
          oneSub='CPI: 9.68/10.00' 
          two='Bachelors of Technology' 
          twoSub='2019-23' 
          three={[
            '-> Received AP grade for exceptional performance in the software engineering course in the 5th semester.',
            '-> Relevant coursework: Design and Analysis of Algorithms, Software Engineering, Data Bases and Information Systems, Software Systems Lab, Data Analysis, Data Structures and Algorithms, Computer Architecture'
          ]}
        />
    </div>
  );
}