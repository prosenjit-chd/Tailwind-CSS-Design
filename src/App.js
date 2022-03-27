import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FifthSection from './components/FifthSection/FifthSection';
import SixthSection from './components/SixthSection/SixthSection';
import SeventhSection from './components/SeventhSection/SeventhSection';
import Footer from './components/Footer/Footer';
import FourthSection from './components/FourthSection/FourthSection';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </div>
  );
}

export default App;
