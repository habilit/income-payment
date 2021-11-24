import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is Tina</h1>
        <iframe 
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fhabilit%2Fposts%2F10158286020190817&show_text=true&width=500" 
        width="500" 
        height="466" 
        className={'no-border'}
        // style="border:none;overflow:hidden" 
        scrolling="no" 
        frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
      </header>
    </div>
  );
}

export default App;
