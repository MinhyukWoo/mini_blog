import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticleView from './main/ArticleView';
import Main from './main/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ArticleView></ArticleView>}></Route>
        <Route path="article" element={<Main></Main>} />
      </Routes>
    </BrowserRouter>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
