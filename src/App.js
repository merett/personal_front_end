import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState,useRef} from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import './css/color_gradient.scss';
import './css/infiniti.scss';
import './css/glitch.scss';
import './css/font.css';
import './css/target_button.scss';
import { scroller } from "react-scroll";


function App() {
    const itemRef = useRef();
    const [elementState,setElementState] = useState(0);
    const [elementStateSize,setElementStateSize] = useState(0);
    const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });
  const updateSize = () =>
      setSize({
        x: window.innerWidth,
        y: window.innerHeight
      });
    const goPage = async () => {
        await scroller.scrollTo(`section${elementState}`, {
            duration: 900,
            delay: 0,
            smooth: "easeInQuad",
        });
    }
    const keyPress = async (e) => {
        e.preventDefault();
        if (e.key === "ArrowDown") {
            if(elementState<elementStateSize){
                setElementState(elementState+1);
                goPage();
            }
        }
        if (e.key === "ArrowUp") {
            if(elementState>0){
                setElementState(elementState-1);
                goPage();
            }
        }

    };
    const handleWheel = (e) => {
        //TODO add delay
        if (e.deltaY < 0) {
            //scroll wheel up
            console.log("up");
        }
        if (e.deltaY > 0) {
            //scroll wheel down
            console.log("down");
        }
    }
  useEffect(() => {
      setElementStateSize(itemRef.current.childNodes.length-1);

      window.onresize = updateSize;
      window.addEventListener("keydown", keyPress);
      window.addEventListener("wheel", handleWheel);

      return () => {
          window.removeEventListener("keydown", keyPress);
          window.removeEventListener("wheel", handleWheel);
      };
  }, [elementState,elementStateSize]);

    const mainContainerDivStyle = {
        width:size.x,
        height:size.y,
        backgroundColor:"#ffffff",
    };


  return (
    <div className="App" ref={itemRef}>
        <div className={"section0"} style={mainContainerDivStyle} >
            <div className={"container-fluid h-100"} style={{backgroundColor:"#000000"}} >
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
                                        <a>
                                        <div className="downloadcv mt-4">
                                            <div className={"noselect"}>
                                                DOWNLOAD CV
                                            </div>
                                        </div>
                                        </a>
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
        <div className={"section1"} style={mainContainerDivStyle} >
            <div className={"container-fluid h-100"} style={{backgroundColor:"#000000"}} >
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
