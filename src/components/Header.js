import { login, logout } from '../services/firebase';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>People App</div>
            </Link>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </nav>
    )
};

export default Header;