// components/Navbar.jsx
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo" onClick={() => navigate('/')}>شوب ستريم</div>
        <div className="nav-links">
          <button onClick={() => navigate('/')} className="nav-link">الرئيسية</button>
          <button onClick={() => navigate('/products')} className="nav-link">المنتجات</button>
          <button onClick={() => navigate('/about')} className="nav-link">عن المتجر</button>
          <button onClick={() => navigate('/contact')} className="nav-link"> تواصل معنا</button>
        </div>
        <div className="cart-icon">
          <span className="cart-icon-symbol">🛒</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;