import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";

function App() {
  const aboutMe = useRef(null);
  const contact = useRef(null);
  const project = useRef(null);

  const scrollToSection = (element) => {
    let currentRef;
    if(element === "aboutMe"){
      currentRef = aboutMe
    }else if(element === "contact"){
      currentRef = contact
    }else if(element === "project"){
      currentRef = project
    }else if(element === null){
      currentRef = null
    }

    if(currentRef){
      window.scrollTo({
        top: currentRef.current.offsetTop,
        behavior: 'smooth',
      })
    }
    else{
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
    
  }
  return (
    <div className="App">
      <div className="content">
        <Header 
        scrollToSection={scrollToSection}/>
        <Body 
        aboutMe={aboutMe}
        contact={contact}
        project={project}
        scrollToSection={scrollToSection}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
