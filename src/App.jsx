import './assets/css/styles.css'
import DesktopOnlyPage1 from './components/DesktopOnlyPage1/DesktopOnlyPage1'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Page2 from './components/Page2/Page2'
import Page3 from './components/Page3/Page3'

function App() {

  return (
    <>
      <Header />

      <MainPage />

      <Page2 />

      <Page3 />

      <DesktopOnlyPage1 />

      <Footer />
    </>
  )
}

export default App
