import './App.css';
import Login from './Screens/login';

function App() {
  return (
    <div className="App">
      <div style={{backgroundColor: '#303F60',top: 0, height: 200, width: '100%', position: 'absolute'}}></div>
      <div style={{backgroundColor: '#EDF6FF',bottom: 0, height: '70%', width:'100%', position:'absolute'}}></div>
      <Login />
    </div>
  );
}

export default App;
