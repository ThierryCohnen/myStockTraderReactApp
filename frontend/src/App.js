import logo from './logo.svg';
import NikonPic from './pexels-photo-1250282.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <br></br>
      <div>
        <a href="https://www.logosurfer.com/wp-content/uploads/2018/03/manchester-united-logo_0.jpg" target="_blank"><img width="240" height="135" src="https://www.logosurfer.com/wp-content/uploads/2018/03/manchester-united-logo_0.jpg" alt="Manchester United Logo" /></a>&nbsp;
        <iframe src="https://giphy.com/embed/1yLEsc4IF2Akm4InqA" width="240" height="135" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/officialWRC-rally-dust-mexico-1yLEsc4IF2Akm4InqA"></a>&nbsp;
        <a><img width="240" height="135" src={NikonPic} /></a>

      </div>
    </div>
  );
}

export default App;
