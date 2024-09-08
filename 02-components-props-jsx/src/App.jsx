import UserCard from "./components/UserCard";
import "./App.css"
import img1 from "./assets/1.png"
import img2 from "./assets/2.png"
import img3 from "./assets/3.png"

function App() {
  return (
    // <> Fragment
    <div className="container">
      <h1>Welcome to Components</h1>
      <UserCard name="React 1" desc="First Description" imgSrc={img1} style={{'borderRadius': '10px'}}/>
      <UserCard name="React 2" desc="Second Description" imgSrc={img2} style={{'borderRadius': '10px'}}/>
      <UserCard name="React 3" desc="Third Description" imgSrc={img3} style={{'borderRadius': '10px'}}/>
    </div>
    // </>
  );
}

export default App;
