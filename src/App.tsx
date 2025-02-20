import { Header, Main, OurAdvantages } from "./components"
import './app.css';
import './Reset.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Main />
        <OurAdvantages />
        <Main />
      </main>
    </div>
  )
}

export default App
