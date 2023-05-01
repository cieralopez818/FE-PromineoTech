import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import Navibar from './components/Navibar';
import Loginform from './components/Loginform';

function App() {
  return (
    <div className="App">
      <Navibar/>
      <Loginform/>
    </div>
  );
}

export default App;

