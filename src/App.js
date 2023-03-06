import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import './App.scss';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className="app_container">
      <Topbar/>
      <Header/>
      <Home/>
      </div>
    </div>
  )
}
export default App;