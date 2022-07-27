import '../index.css'
import contact from '../images/contact.png'
import Heading from './Heading';
import ContactCard from './ContactCard';
export default function Contact(props) {
  return (
    <div id='contact'>
        <Heading 
          title='Contact' 
          image={contact}
        />
        <ContactCard icon={contact} title='Mobile Number:' contact='+91 9121795006' link='9121795006' />
    </div>
  );
}