import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import './App.scss';
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className="app_container">
      <Topbar/>
      <Header/>
      </div>
    </div>
  )
}
export default App;