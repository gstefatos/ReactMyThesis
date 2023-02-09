import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBarComp from './components/NavBarComp';
import SensorVisualization from './components/Sensors';
import PieChart from './components/Sensors';
import LineChart from './components/Sensors';
function App() {
  return (
    <div className="App">
      <NavBarComp/>
      <SensorVisualization/>
    </div>
  );
}

export default App;
