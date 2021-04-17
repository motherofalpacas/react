import logo from './main.png';
import './App.css';

function item() {
  return (
    <div className="item">
      <div className="main">
        <header className="item-header"><p>Hello world!</p></header>
          <img src={logo} className="item-logo" alt="logo" />
          <footer className="footer">
          <p className="footer-text">
          Hello world!</p>
          </footer>
        </div>
    </div>
  );
}

export default item;
document.write('В мене не вийшло вирівняти по центру чогось');
