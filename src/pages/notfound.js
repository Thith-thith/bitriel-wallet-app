import { Link } from 'react-router-dom';
import { Button } from '../Components/globalComponents';

export default function NotFound() {
  return (
    <div>
      <center>
        <div className="page-not-found">
          <h2>COMING</h2>
          <h2>SOON</h2>
          <p>We will be celebrating the lauch of our new page very soon...</p>
        </div>
        <Button.Primary block large style={{ width: '300px' }}>
          <Link to="/">Back home</Link>
        </Button.Primary>
      </center>
    </div>
  );
}
