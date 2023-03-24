import './App.css';
import AgencyServices from './components/AgencyServices';
import Bottom from './components/Banner/Bottom';
import Top from './components/Banner/Top';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Header/>
      <Top/>
      <Services/>
      <Work/>
      <AgencyServices/>
      <Bottom/>
      <Footer/>
    </div>
  );
}

export default App;
