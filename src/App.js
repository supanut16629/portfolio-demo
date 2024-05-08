import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
