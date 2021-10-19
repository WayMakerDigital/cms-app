import NavBar from './Components/NavBar';
import './App.css';
import Profile from './Components/Profile';
import AllBlogs from './Components/AllBlogs';

function App() {

  return (
    <div className="App">
      {/* Add Modules here */}
      <NavBar />
      <Profile />
      <AllBlogs />
    </div>
  );
}

export default App;
