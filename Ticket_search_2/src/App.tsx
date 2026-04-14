import { Header } from "./components/regular/header";
import { MainPage } from "./components/mainPage";
import './App.css'
import { Provider } from "react-redux";
import { store } from './store/store.tsx'

function App() {
  

  return (
    <Provider store = {store}>
      <div
      style={{
        
      }}>
        
        <Header/>
        
        <MainPage/>
      </div>
    </Provider>
  )
}

export default App
