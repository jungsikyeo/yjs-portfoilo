import React, {Component} from "react";
import Typist from "react-typist";
import "../styles/landing.css";

export default class Landing extends Component {
  render() {
    const onTypingDone = () => {
      setTimeout(() => {
        onSkip();
      }, 700)
    }
    const onSkip = () => {
      document.getElementById("landing").classList.add("fade-out");
      document.getElementById("app").style.opacity = "1";
      document.getElementById("app").style.transition = "2s opacity";

      document.getElementById("divSkip").classList.add("fade-out");
      document.getElementById("divSkip").style.opacity = "0";
      document.getElementById("divSkip").style.transition = ".5s opacity";

      document.getElementById("btnSkip").style.display = "none";
    }
    return (
        <>
          <div id="landing" className="landing">
            <Typist avgTypingDelay={1} stdTypingDelay={1} onTypingDone={onTypingDone} cursor={{show:false}}>
              <pre>
                <p><span className="red">__   __</span>   <span className="orange">___</span>  <span className="yellow">_____</span>         <span className="green">______</span>        <span className="blue">       _     __</span><span className="purple">         _ </span><span className="deeppink"> _</span></p>
                <p><span className="red">\ \ / /</span>  <span className="orange">|_  |</span><span className="yellow">/  ___|</span>        <span className="green">| ___ \</span>       <span className="blue">      | |   / _|</span><span className="purple">       | |</span><span className="deeppink">(_)</span></p>
                <p><span className="red"> \ V /</span>     <span className="orange">| |</span><span className="yellow">\ `--.</span>  ______ <span className="green">| |_/ /  ___</span>  <span className="blue"> _ __ | |_ | |_</span><span className="purple">   ___  | |</span><span className="deeppink"> _   ___</span></p>
                <p><span className="red">  \ /</span>      <span className="orange">| |</span> <span className="yellow">`--. \</span>|______|<span className="green">|  __/  / _ \</span> <span className="blue">| '__|| __||  _|</span><span className="purple"> / _ \ | |</span><span className="deeppink">| | / _ \</span></p>
                <p><span className="red">  | |</span>  <span className="orange">/\__/ /</span><span className="yellow">/\__/ /</span>        <span className="green">| |    | (_) |</span><span className="blue">| |   | |_ | |</span><span className="purple">  | (_) || |</span><span className="deeppink">| || (_) |</span></p>
                <p><span className="red">  \_/</span>  <span className="orange">\____/</span> <span className="yellow">\____/</span>         <span className="green">\_|     \___/</span> <span className="blue">|_|    \__||_|</span><span className="purple">   \___/ |_|</span><span className="deeppink">|_| \___/</span></p>
                <p> </p>
                <p className="highlight">Updating YJS Portfolio</p>
                <p className="highlight">Unpacking objects: 100% (9/9), <span className="done">done.</span></p>
                <p className="highlight">From https://github.com/jungsikyeo</p>
                <p>Explorer/ABOUT_ME            |  <span className="done">done.</span></p>
                <p>Explorer/RECENT_PROJECTS     |  <span className="done">done.</span></p>
                <p>Explorer/TECH_SKILLS         |  <span className="done">done.</span></p>
                <p>Explorer/TIMELINE            |  <span className="done">done.</span></p>
                <p>Explorer/EDUCATION           |  <span className="done">done.</span></p>
                <p>Explorer/LICENSE             |  <span className="done">done.</span></p>
                <p>Explorer/GITHUB              |  <span className="done">done.</span></p>
                <p>Settings                     |  <span className="done">done.</span></p>
                <p>SendMail                     |  <span className="done">done.</span></p>
                <p>9 menus found, 13 pages found</p>
                <p> </p>
                <p className="highlight">Hooray! YJS Portfolio has been updated!</p>
                <p className="highlight">Welcome to My Portfoilo!</p>
              </pre>
            </Typist>
          </div>
          <div id="divSkip" className="w-full" style={{bottom: "100px", position: "absolute", fontSize: "1.25rem", lineHeight: "1.75rem", zIndex: 1000}}>
            <div className="flex justify-center items-center">
              <button id="btnSkip" onClick={onSkip} className="outline-none">Skip</button>
            </div>
          </div>
        </>
    );
  }
}
