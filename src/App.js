import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import UserTaskComponent from './components/UserTaskComponent';
import AddUserTaskComponent from './components/AddUserTaskComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<UserTaskComponent />}></Route>
            <Route exact path="/users" element={<UserTaskComponent />}></Route>
            <Route path="/add-userTask" element={<AddUserTaskComponent />}></Route>
            <Route path="/edit-task/:id" element={<AddUserTaskComponent />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
