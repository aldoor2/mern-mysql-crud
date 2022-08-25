import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>React MySQL</h1>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/new'>Create New Task</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
