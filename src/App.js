import InfoMenu from './components/infoMenu/infoMenu';
import Header from './components/Header/header';
import OrderInfo from './components/orderInfo/orderInfo';
import TermsOfService from './components/termsOfService/termsOfService';
import Works from './components/works/works';
import Contact from './components/contact/contact';
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="background left"></div>
      <div className="container">
        <div>
          <Header/>
          <InfoMenu/>
        </div>
        <div className="back__line">
          <OrderInfo/>
          <TermsOfService/>
          <Works/>
          <Contact/> 
        </div>
      </div>
      <div className="background right"></div>
    </div>
  );
}

export default App;
