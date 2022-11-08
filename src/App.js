import AnimatedLogo from './images/AnimatedLogo';
import './App.css';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
      <AnimatedLogo/>
      </Row>
      <Row>
      <AnimatedLogo/>
      <AnimatedLogo/>
      <AnimatedLogo/>
      <AnimatedLogo/>
      </Row>
    </Container>
  );
}

export default App;
