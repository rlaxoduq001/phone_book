import { Col,Row, Container } from 'react-bootstrap';
import './App.css';
import { ContactForm } from './component/ContactForm';
import { ContactList } from './component/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
       <h1 className='title'>연락처</h1>

       <Container>
        <Row>
          <Col>
            <ContactForm/>
          </Col>
          <Col>
            <ContactList/>
          </Col>
        </Row>
       </Container>
    </div>
  );
}

export default App;
