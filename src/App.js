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
                                                DOWNLOAD
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
                <div  className={"row h-100"}>
                    <div className={"col-md-6 col-sm-12 h-100 infinity"}>
                        <div className={"row h-100 p-3"}>
                            <div className={"col align-self-center"}>
                                <div className={"row"}>
                                    <div className={"col-2 align-self-center"} style={{color:"#FFF",backgroundColor:"#eb83f8",height:3}}>

                                    </div>
                                    <div className={"col-10"} style={{color:"#FFF"}}>
                                        <div style={{fontSize:size.x>1000 ? size.x*0.02 : size.x*0.03,fontWeight:"500",fontFamily:"Barlow",color:"#000000",textAlign:"left"}}>About me...</div>
                                    </div>
                                    <div className={"col-12 p-0"} style={{color:"#FFF"}}>
                                        <div className={"glitch"}>
                                            <h1 className={"line"} style={{textAlign:"left",fontSize:size.x>1000 ? size.x*0.03 : size.x*0.04,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>I'm not only designer but also coder.</h1>
                                            <h1 className={"line"} style={{textAlign:"left",fontSize:size.x>1000 ? size.x*0.03 : size.x*0.04,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>I'm not only designer but also coder.</h1>
                                            <h1 className={"line"} style={{textAlign:"left",fontSize:size.x>1000 ? size.x*0.03 : size.x*0.04,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>I'm not only designer but also coder.</h1>
                                            <h1 className={"line"} style={{textAlign:"left",fontSize:size.x>1000 ? size.x*0.03 : size.x*0.04,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>I'm not only designer but also coder.</h1>
                                            <h1 className={"line"} style={{textAlign:"left",fontSize:size.x>1000 ? size.x*0.03 : size.x*0.04,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>I'm not only designer but also coder.</h1>
                                            <h1 className={"line"} style={{textAlign:"left",fontSize:size.x>1000 ? size.x*0.03 : size.x*0.04,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>I'm not only designer but also coder.</h1>
                                            <h1 className={"line"} style={{textAlign:"left",fontSize:size.x>1000 ? size.x*0.03 : size.x*0.04,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>I'm not only designer but also coder.</h1>
                                            <h1 className={"line"} style={{textAlign:"left",fontSize:size.x>1000 ? size.x*0.03 : size.x*0.04,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>I'm not only designer but also coder.</h1>
                                            <h1 className={"line"} style={{textAlign:"left",fontSize:size.x>1000 ? size.x*0.03 : size.x*0.04,fontWeight:"lighter",fontFamily:"Barlow",color:"#000000"}}>I'm not only designer but also coder.</h1>
                                        </div>
                                    </div>
                                    <div className={"col-2 align-self-center"} style={{color:"#FFF",backgroundColor:"#eb83f8",height:3}}>

                                    </div>
                                    <div className={"col-12 p-0 pt-3"} style={{textAlign:"left",color:"#000000"}}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique, diam at cursus tempus, massa ligula efficitur sapien, id hendrerit urna augue vitae lorem. Cras bibendum eros sed posuere mollis. In tristique leo sed sem sodales ullamcorper. Quisque a mi est. Donec quis lorem fermentum, pharetra lectus eu, malesuada nulla.
                                    </div>
                                    <div className={"col-12 ps-0 pt-3 text-start d-flex"}>
                                        <a type="button" className="btn btn-sm btn-dark">
                                            <i className="bi-github" role="img" aria-label="GitHub"></i>
                                        </a>
                                        <div style={{width:4}}></div>
                                        <a type="button" className="btn btn-sm btn-primary ps-2">
                                            <i className="bi-linkedin" role="img" aria-label="Linkedin"></i>
                                        </a>
                                        <div style={{width:4}}></div>
                                        <a type="button" className="btn btn-sm btn-danger ps-2">
                                            <i className="bi-youtube" role="img" aria-label="Linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-6 col-sm-12 h-100"} style={{backgroundColor:"#001556"}}>
                        <div className={"row h-100 p-3"}>
                            <div className={"col align-self-center"}>
                                <div className={"row"}>
                                    <div className={"col-12 pb-3"}>
                                        <div className={"row"}>
                                            <div className={"col-2 align-self-center"} style={{color:"#FFF",backgroundColor:"#eb83f8",height:3}}>

                                            </div>
                                            <div className={"col-10"} style={{color:"#FFF"}}>
                                                <div style={{fontSize:size.x>1000 ? size.x*0.02 : size.x*0.03,fontWeight:"500",fontFamily:"Barlow",color:"#ffffff",textAlign:"left"}}>My Skills</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"col-12 pb-3 px-0"}>
                                        <div className={"row"}>
                                            <div className={"col-10"}>
                                                <h5 style={{fontSize:size.x>1000 ? size.x*0.015 : size.x*0.02,fontWeight:"100",fontFamily:"Barlow",color:"#ffffff",textAlign:"left"}}>Graphic Designer</h5>
                                            </div>
                                            <div className={"col-2"}>
                                                <h5 style={{fontSize:size.x>1000 ? size.x*0.015 : size.x*0.02,fontWeight:"100",fontFamily:"Barlow",color:"#ffffff",textAlign:"right"}}>%65</h5>
                                            </div>
                                            <div className={"col-12 pt-2"}>
                                                <div className={"progress"} style={{height:10,backgroundColor:"#001556"}}>
                                                    <div className={"progress-bar"} style={{width:"65%",backgroundColor:"#fff"}} role={"progressbar"} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-12 pb-3 px-0"}>
                                        <div className={"row"}>
                                            <div className={"col-10"}>
                                                <h5 style={{fontSize:size.x>1000 ? size.x*0.015 : size.x*0.02,fontWeight:"100",fontFamily:"Barlow",color:"#ffffff",textAlign:"left"}}>Vizrt Desinger</h5>
                                            </div>
                                            <div className={"col-2"}>
                                                <h5 style={{fontSize:size.x>1000 ? size.x*0.015 : size.x*0.02,fontWeight:"100",fontFamily:"Barlow",color:"#ffffff",textAlign:"right"}}>%50</h5>
                                            </div>
                                            <div className={"col-12 pt-2"}>
                                                <div className={"progress"} style={{height:10,backgroundColor:"#001556"}}>
                                                    <div className={"progress-bar"} style={{width:"50%",backgroundColor:"#fff"}} role={"progressbar"} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-12 pb-3 px-0"}>
                                        <div className={"row"}>
                                            <div className={"col-10"}>
                                                <h5 style={{fontSize:size.x>1000 ? size.x*0.015 : size.x*0.02,fontWeight:"100",fontFamily:"Barlow",color:"#ffffff",textAlign:"left"}}>Broadcast Automation</h5>
                                            </div>
                                            <div className={"col-2"}>
                                                <h5 style={{fontSize:size.x>1000 ? size.x*0.015 : size.x*0.02,fontWeight:"100",fontFamily:"Barlow",color:"#ffffff",textAlign:"right"}}>%85</h5>
                                            </div>
                                            <div className={"col-12 pt-2"}>
                                                <div className={"progress"} style={{height:10,backgroundColor:"#001556"}}>
                                                    <div className={"progress-bar"} style={{width:"85%",backgroundColor:"#fff"}} role={"progressbar"} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-12 pb-3 px-0"}>
                                        <div className={"row"}>
                                            <div className={"col-10"}>
                                                <h5 style={{fontSize:size.x>1000 ? size.x*0.015 : size.x*0.02,fontWeight:"100",fontFamily:"Barlow",color:"#ffffff",textAlign:"left"}}>Vizrt Scripting</h5>
                                            </div>
                                            <div className={"col-2"}>
                                                <h5 style={{fontSize:size.x>1000 ? size.x*0.015 : size.x*0.02,fontWeight:"100",fontFamily:"Barlow",color:"#ffffff",textAlign:"right"}}>%80</h5>
                                            </div>
                                            <div className={"col-12 pt-2"}>
                                                <div className={"progress"} style={{height:10,backgroundColor:"#001556"}}>
                                                    <div className={"progress-bar"} style={{width:"80%",backgroundColor:"#fff"}} role={"progressbar"} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={"row"}>
                                    <div className={"col-12 pb-3 px-0"}>
                                        <div className={"row"}>
                                            <div className={"col-10"}>
                                                <h5 style={{fontSize:size.x>1000 ? size.x*0.015 : size.x*0.02,fontWeight:"100",fontFamily:"Barlow",color:"#ffffff",textAlign:"left"}}>Php Development / CSS / Javascript / React /Mysql</h5>
                                            </div>
                                            <div className={"col-2"}>
                                                <h5 style={{fontSize:size.x>1000 ? size.x*0.015 : size.x*0.02,fontWeight:"100",fontFamily:"Barlow",color:"#ffffff",textAlign:"right"}}>%45</h5>
                                            </div>
                                            <div className={"col-12 pt-2"}>
                                                <div className={"progress"} style={{height:10,backgroundColor:"#001556"}}>
                                                    <div className={"progress-bar"} style={{width:"45%",backgroundColor:"#fff"}} role={"progressbar"} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
