import Footer from "./components/Footer/Footer.jsx"
import Header from "./components/Header/Header.jsx"
import MainContent from "./components/MainContent/MainContent.jsx"
import Offers from "./components/Offers/Offers.jsx"

function App() {
  return (
    <div>
      <Header/>
      <div className="m-12">
        <MainContent/>
        <Offers/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
