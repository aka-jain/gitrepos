import './app.css'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import GitRepoList from './components/GitRepoList';
import { RepoDetail } from './components/RepoDetail';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<GitRepoList/>}>
          </Route>
          <Route path="/:name" element={<RepoDetail/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
