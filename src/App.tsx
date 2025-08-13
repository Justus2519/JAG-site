import Menu from './components/Menu';
import './App.css';

function App() {

  return (<div className="game">
        <div className="bar">
            <div><p>Time: 00</p></div>
            <div><p>middle</p></div>
            <div><p>Flags: 00</p></div>
        </div>
        <Menu></Menu>
    </div>)
}

export default App;
