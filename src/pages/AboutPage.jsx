import Card from '../components/shared/card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a React app to leave feedback or review for a product</p>

        <p>
          <Link to='/'>Go back Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
