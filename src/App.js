import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import './css/color_gradient.scss';
import './css/infiniti.scss';
import './css/glitch.scss';
import './css/font.css';
import './css/target_button.scss';

function App() {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });
  const updateSize = () =>
      setSize({
        x: window.innerWidth,
        y: window.innerHeight
      });
  useEffect(() => (window.onresize = updateSize), []);

    const mainContainerDivStyle = {
        width:size.x,
        height:size.y,
        backgroundColor:"#ffffff",
    };


  return (
    <div className="App">
        <div style={mainContainerDivStyle}>
            <div className={"container-fluid h-100"} style={{backgroundColor:"#000000"}}>
                <div  className={"row h-100 p-5"}>
                    <div className={"col-md-6 col-sm-12 h-100 p-3 infinity"} style={{backgroundColor:"#001556"}}>
                        <div className={"row h-100 p-3"}>
                            <div className={"col align-self-center"}>
                                <div className={"row"}>
                                    <div className={"col-2 align-self-center"} style={{color:"#FFF",backgroundColor:"#eb83f8",height:3}}>

                                    </div>
                                    <div className={"col-10"} style={{color:"#FFF"}}>
                                        <div style={{fontSize:size.x>1000 ? size.x*0.03 : size.x*0.04,fontWeight:"600",fontFamily:"Barlow",color:"#000000",textAlign:"left"}}>Hello, I'm</div>
                                    </div>
                                    <div className={"col-12 p-0"} style={{color:"#FFF"}}>
                                        <div className={"glitch"}>
                                            <h1 className={"line"} style={{textAlign:"left",fontSize:size.x>1000 ? size.x*0.05 : size.x*0.06,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>Serhat Ozkiray</h1>
                                            <h1 className={"line"} style={{fontSize:size.x>1000 ? size.x*0.05 : size.x*0.06,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>Serhat Ozkiray</h1>
                                            <h1 className={"line"} style={{fontSize:size.x>1000 ? size.x*0.05 : size.x*0.06,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>Serhat Ozkiray</h1>
                                            <h1 className={"line"} style={{fontSize:size.x>1000 ? size.x*0.05 : size.x*0.06,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>Serhat Ozkiray</h1>
                                            <h1 className={"line"} style={{fontSize:size.x>1000 ? size.x*0.05 : size.x*0.06,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>Serhat Ozkiray</h1>
                                            <h1 className={"line"} style={{fontSize:size.x>1000 ? size.x*0.05 : size.x*0.06,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>Serhat Ozkiray</h1>
                                            <h1 className={"line"} style={{fontSize:size.x>1000 ? size.x*0.05 : size.x*0.06,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>Serhat Ozkiray</h1>
                                            <h1 className={"line"} style={{fontSize:size.x>1000 ? size.x*0.05 : size.x*0.06,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>Serhat Ozkiray</h1>
                                            <h1 className={"line"} style={{fontSize:size.x>1000 ? size.x*0.05 : size.x*0.06,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>Serhat Ozkiray</h1>
                                        </div>

                                    </div>
                                    <div className={"col-12 p-0"}>
                                        <TypeWriterEffect
                                            textStyle={{
                                                color: '#000000',
                                                fontWeight: 300,
                                                fontFamily:"Barlow",
                                                fontSize:size.x>1000 ? size.x*0.03 : size.x*0.04
                                            }}
                                            startDelay={0}
                                            cursorColor="#EB83F8FF"
                                            multiText={[
                                                'Motion Graphic Desinger',
                                                "Vizrt Graphic Developer",
                                                "Vizrt Graphic Automation",
                                                'Php Developer',
                                                'React Developer',
                                            ]}
                                            multiTextDelay={2000}
                                            typeSpeed={40}
                                            multiTextLoop={true}
                                        />
                                    </div>
                                    <div className={"col-12 p-0"}>
                                        <div className="downloadcv mt-4">
                                            <div className={"noselect"}>
                                                DOWNLOAD CV
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-6 col-sm-12 h-100 p-3"} style={{backgroundImage:" url(\"/img/prof.png\")",backgroundPosition:"center"}}>

                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
