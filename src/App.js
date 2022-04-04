import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState, useRef} from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import './css/color_gradient.scss';
import './css/burger_menu.css';
import './css/infiniti.scss';
import './css/glitch.scss';
import './css/font.css';
import './css/target_button.scss';
import { FaReact } from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai'
import {SiDiscord} from 'react-icons/si'
import {MdOutlineLocationOn} from 'react-icons/md'
import { slide as Menu } from 'react-burger-menu'


function App() {
    const itemRef = useRef();
    const itemRef0 = useRef();
    const itemRef1 = useRef();
    const itemRef2 = useRef();
    const itemRef3 = useRef();
    let disableScroll = false;
    const [size, setSize] = useState({
        x: window.innerWidth,
        y: window.innerHeight
    });
    const updateSize = () => {
        setSize({
            x: window.innerWidth,
            y: window.innerHeight
        });
        if(window.innerWidth>768){
            goResizePage();
        }

    }

    const goPage = (page) => {
        let ref=null;
        switch ((window.scrollY / size.y)+page) {
            case 0:
                ref=itemRef0;
                break;
            case 1:
                ref=itemRef1;
                break;
            case 2:
                ref=itemRef2;
                break;
            case 3:
                ref=itemRef3;
                break;
        }
        if(ref!==null){
            window.scrollTo({behavior: 'smooth', top: ref.current.offsetTop})
        }

    }

    const goPageClick = (page) => {
        let ref=null;
        switch (page) {
            case 0:
                ref=itemRef0;
                break;
            case 1:
                ref=itemRef1;
                break;
            case 2:
                ref=itemRef2;
                break;
            case 3:
                ref=itemRef3;
                break;
        }
        if(ref!==null){
            window.scrollTo({behavior: 'smooth', top: ref.current.offsetTop})
        }

    }

    const goResizePage = () => {
        window.scrollTo({behavior: 'smooth', top: itemRef0.current.offsetTop})
    }

    const keyPress = (e) => {
        e.preventDefault();
        if (disableScroll) {
            return false;
        }
       
        if (e.key === "ArrowDown") {
            goPage(1)
        }
        if (e.key === "ArrowUp") {
            goPage(-1)
        }

    };
    const handleWheel = (e) => {
        e.preventDefault();
        if (disableScroll) {
            return false;
        }
        if (e.deltaY < 0) {
            goPage(-1)
        }
        if (e.deltaY > 0) {
            goPage(1)
        }
    }
    useEffect(() => {
        window.onresize = updateSize;
        window.addEventListener("keydown", keyPress);
        window.addEventListener("wheel", handleWheel);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("keydown", keyPress);
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const mainContainerDivStyle = {
        width: size.x,
        height: size.y,
        backgroundColor: "#000000",
    };

    const handleScroll = (e) => {
        if (window.scrollY % size.y !== 0) {
            disableScroll = true
        } else {
            disableScroll = false
        }

    }

    if(size.x>=768){
        document.body.style.overflow = 'hidden';
        return (
            <>
                <Menu width={ '15%' }>
                    <a onClick={()=>{goPageClick(0)}} className="menu-item" style={{cursor:"pointer"}} >Home</a>
                    <a onClick={()=>{goPageClick(1)}} className="menu-item" style={{cursor:"pointer"}}>About</a>
                    <a onClick={()=>{goPageClick(2)}} className="menu-item" style={{cursor:"pointer"}}>Services</a>
                    <a onClick={()=>{goPageClick(3)}} className="menu-item--small" style={{cursor:"pointer"}}>Contact</a>
                </Menu>
            <div className="App" ref={itemRef}>
                <div ref={itemRef0} className={"section0"} style={mainContainerDivStyle}>
                    <div className={"container-fluid h-100"} style={{backgroundColor: "#000000"}}>
                        <div className={"row h-100 p-5"}>
                            <div className={"col-md-6 col-sm-12 h-100 p-3 infinity"} style={{backgroundColor: "#001556"}}>
                                <div className={"row h-100 p-3"}>
                                    <div className={"col align-self-center"}>
                                        <div className={"row"}>
                                            <div className={"col-2 align-self-center"}
                                                 style={{color: "#FFF", backgroundColor: "#eb83f8", height: 3}}>

                                            </div>
                                            <div className={"col-10"} style={{color: "#FFF"}}>
                                                <div style={{
                                                    fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                                    fontWeight: "500",
                                                    fontFamily: "Barlow",
                                                    color: "#000000",
                                                    textAlign: "left"
                                                }}>Hello, I'm
                                                </div>
                                            </div>
                                            <div className={"col-12 p-0"} style={{color: "#FFF"}}>
                                                <div className={"glitch"}>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                </div>

                                            </div>
                                            <div className={"col-12 p-0"}>
                                                <TypeWriterEffect
                                                    textStyle={{
                                                        color: '#000000',
                                                        fontWeight: 300,
                                                        fontFamily: "Barlow",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04
                                                    }}
                                                    startDelay={0}
                                                    cursorColor="#EB83F8FF"
                                                    multiText={[
                                                        'Motion Graphic Designer',
                                                        "Graphic Desinger",
                                                        "Vizrt Graphic Developer",
                                                        "Vizrt Graphic Automation",
                                                        'Php Developer',
                                                        'Maybe React Developer',
                                                    ]}
                                                    multiTextDelay={2000}
                                                    typeSpeed={40}
                                                    multiTextLoop={true}
                                                />
                                            </div>
                                           {/* <div className={"col-12 p-0"}>
                                                <a>
                                                    <div className="downloadcv mt-4">
                                                        <div className={"noselect"}>
                                                            DOWNLOAD
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-6 col-sm-12 h-100 p-3"}
                                 style={{backgroundImage: " url(\"/img/prof.png\")", backgroundPosition: "center", backgroundSize:"cover"}}>

                            </div>
                        </div>
                    </div>
                </div>

                <div ref={itemRef1} className={"section1"} style={mainContainerDivStyle}>
                    <div className={"container-fluid h-100"} style={{backgroundColor: "#000000"}}>
                        <div className={"row h-100 p-5"}>
                            <div className={"col-md-6 col-sm-12 h-100"} style={{backgroundColor: "#001556"}}>
                                <div className={"row h-100 p-3"}>
                                    <div className={"col align-self-center"}>
                                        <div className={"row"}>
                                            <div className={"col-12 pb-3"}>
                                                <div className={"row"}>
                                                    <div className={"col-2 align-self-center"}
                                                         style={{color: "#FFF", backgroundColor: "#eb83f8", height: 3}}>

                                                    </div>
                                                    <div className={"col-10"} style={{color: "#FFF"}}>
                                                        <div style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                                            fontWeight: "500",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "left"
                                                        }}>My Skills
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"col-12 pb-3 px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-10"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.015 : size.x * 0.02,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "left"
                                                        }}>Motion Graphic Designer</h5>
                                                    </div>
                                                    <div className={"col-2"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.015 : size.x * 0.02,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "right"
                                                        }}>%70</h5>
                                                    </div>
                                                    <div className={"col-12 pt-2"}>
                                                        <div className={"progress"}
                                                             style={{height: 10, backgroundColor: "#001556"}}>
                                                            <div className={"progress-bar"}
                                                                 style={{width: "70%", backgroundColor: "#fff"}}
                                                                 role={"progressbar"} aria-valuemin={0}
                                                                 aria-valuemax={100}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"row"}>
                                            <div className={"col-12 pb-3 px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-10"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.015 : size.x * 0.02,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "left"
                                                        }}>Graphic Desinger</h5>
                                                    </div>
                                                    <div className={"col-2"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.015 : size.x * 0.02,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "right"
                                                        }}>%60</h5>
                                                    </div>
                                                    <div className={"col-12 pt-2"}>
                                                        <div className={"progress"}
                                                             style={{height: 10, backgroundColor: "#001556"}}>
                                                            <div className={"progress-bar"}
                                                                 style={{width: "60%", backgroundColor: "#fff"}}
                                                                 role={"progressbar"} aria-valuemin={0}
                                                                 aria-valuemax={100}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"row"}>
                                            <div className={"col-12 pb-3 px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-10"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.015 : size.x * 0.02,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "left"
                                                        }}>Vizrt Graphic Developer</h5>
                                                    </div>
                                                    <div className={"col-2"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.015 : size.x * 0.02,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "right"
                                                        }}>%90</h5>
                                                    </div>
                                                    <div className={"col-12 pt-2"}>
                                                        <div className={"progress"}
                                                             style={{height: 10, backgroundColor: "#001556"}}>
                                                            <div className={"progress-bar"}
                                                                 style={{width: "90%", backgroundColor: "#fff"}}
                                                                 role={"progressbar"} aria-valuemin={0}
                                                                 aria-valuemax={100}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"row"}>
                                            <div className={"col-12 pb-3 px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-10"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.015 : size.x * 0.02,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "left"
                                                        }}>Vizrt Graphic Automation</h5>
                                                    </div>
                                                    <div className={"col-2"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.015 : size.x * 0.02,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "right"
                                                        }}>%85</h5>
                                                    </div>
                                                    <div className={"col-12 pt-2"}>
                                                        <div className={"progress"}
                                                             style={{height: 10, backgroundColor: "#001556"}}>
                                                            <div className={"progress-bar"}
                                                                 style={{width: "85%", backgroundColor: "#fff"}}
                                                                 role={"progressbar"} aria-valuemin={0}
                                                                 aria-valuemax={100}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={"row"}>
                                            <div className={"col-12 pb-3 px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-10"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.015 : size.x * 0.02,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "left"
                                                        }}>Php Development / CSS / Javascript / React /Mysql</h5>
                                                    </div>
                                                    <div className={"col-2"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.015 : size.x * 0.02,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "right"
                                                        }}>%55</h5>
                                                    </div>
                                                    <div className={"col-12 pt-2"}>
                                                        <div className={"progress"}
                                                             style={{height: 10, backgroundColor: "#001556"}}>
                                                            <div className={"progress-bar"}
                                                                 style={{width: "55%", backgroundColor: "#fff"}}
                                                                 role={"progressbar"} aria-valuemin={0}
                                                                 aria-valuemax={100}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-6 col-sm-12 h-100 infinity"}>
                                <div className={"row h-100 p-3"}>
                                    <div className={"col align-self-center"}>
                                        <div className={"row"}>
                                            <div className={"col-2 align-self-center"}
                                                 style={{color: "#FFF", backgroundColor: "#eb83f8", height: 3}}>

                                            </div>
                                            <div className={"col-10"} style={{color: "#FFF"}}>
                                                <div style={{
                                                    fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                                    fontWeight: "500",
                                                    fontFamily: "Barlow",
                                                    color: "#000000",
                                                    textAlign: "left"
                                                }}>About me...
                                                </div>
                                            </div>
                                            <div className={"col-12 p-0"} style={{color: "#FFF"}}>
                                                <div className={"glitch"}>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                </div>
                                            </div>
                                            <div className={"col-2 align-self-center"}
                                                 style={{color: "#FFF", backgroundColor: "#eb83f8", height: 3}}>
                                            </div>
                                            <div className={"col-12 p-0 pt-3"}
                                                 style={{fontSize: size.x > 1000 ? size.x * 0.01 : size.x * 0.02,fontFamily: "Barlow",textAlign: "left", color: "#000000"}}>
                                                Hello. I'm Serhat Ozkiray. I have spent nearly 20 years in digital life. I’ve spent a lot of my time trying to tell stories with graphic design and motion graphics design. I am currently continuing to tell the stories behind the data with motion graphics.I'm not satisfied with just your design. In my opinion I started to get involved with coding, which is a new branch of art.</div>
                                            <div className={"col-12 ps-0 pt-3 text-start d-flex"}>
                                                <a type="button" target={"_blank"} href={"https://github.com/merett"} className="btn btn-sm btn-dark">
                                                    <i className="bi-github" role="img" aria-label="GitHub"></i>
                                                </a>
                                                <div style={{width: 4}}></div>
                                                <a type="button" target={"_blank"} href={"https://www.linkedin.com/in/serhat-özkıray-593052152/"} className="btn btn-sm btn-primary ps-2">
                                                    <i className="bi-linkedin" role="img" aria-label="Linkedin"></i>
                                                </a>
                                                <div style={{width: 4}}></div>
                                                <a type="button" target={"_blank"} href={"https://www.youtube.com/channel/UCBVZ-c0_JRMhPfh6cEXRA9g"} className="btn btn-sm btn-danger ps-2">
                                                    <i className="bi-youtube" role="img" aria-label="Linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={itemRef2} className={"section2"} style={mainContainerDivStyle}>
                    <div className="d-flex flex-column h-100">
                        <div className={"d-flex align-items-center px-5 pt-5"}>
                            <div className={"col-2 align-self-center"}
                                 style={{color: "#FFF", backgroundColor: "#eb83f8", height: 3, width: 50}}>

                            </div>
                            <h4 className={"m-0 mx-2"} style={{fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                fontWeight: "500",
                                fontFamily: "Barlow",color: "#FFF"}}>Services</h4>
                        </div>
                        <div className={"d-flex px-5"}>
                            <div className={"glitch"}>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.04 : size.x * 0.05,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.04 : size.x * 0.05,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.04 : size.x * 0.05,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.04 : size.x * 0.05,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.04 : size.x * 0.05,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.04 : size.x * 0.05,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.04 : size.x * 0.05,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.04 : size.x * 0.05,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.04 : size.x * 0.05,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                            </div>
                        </div>
                        <div className={"d-flex h-100"}>
                            <div className={"container-fluid d-flex flex-column align-items-center justify-content-center"}>
                                <div className={"row px-5"}>
                                    <div className="col-md-4 text-center text-white">
                                        <div className="h-auto" style={{opacity: 1}}>
                                            <div className="icon">
                                                <i className="bi bi-layout-wtf" style={{width: "1em", fontSize: "50px", color: "#eb83f8"}}></i>
                                            </div>
                                            <h4 style={{fontSize: "20px"}}>Motion Graphic Designer</h4>
                                            <p style={{fontSize: "12px", color: "#969696"}}></p></div>
                                    </div>

                                    <div className="col-md-4 text-center text-white">
                                        <div className="h-auto" style={{opacity: 1}}>
                                            <div className="icon">
                                                <i className="bi bi-image" style={{width: "1em", fontSize: "50px", color: "#eb83f8"}}></i>
                                            </div>
                                            <h4 style={{fontSize: "20px"}}>Graphic Designer</h4>
                                            <p style={{fontSize: "12px", color: "#969696"}}></p></div>
                                    </div>
                                    <div className="col-md-4 text-center text-white">
                                        <div className="h-auto" style={{opacity: 1}}>
                                            <div className="icon">
                                                <i className="bi bi-tv" style={{width: "1em", fontSize: "50px", color: "#eb83f8"}}></i>
                                            </div>
                                            <h4 style={{fontSize: "20px"}}>Vizrt Graphic Developer</h4>
                                            <p style={{fontSize: "12px", color: "#969696"}}></p></div>
                                    </div>

                                    <div className="col-md-4 text-center text-white">
                                        <div className="h-auto" style={{opacity: 1}}>
                                            <div className="icon">
                                                <i className="bi bi-card-heading" style={{width: "1em", fontSize: "50px", color: "#eb83f8"}}></i>
                                            </div>
                                            <h4 style={{fontSize: "20px"}}>Vizrt Graphic Automation</h4>
                                            <p style={{fontSize: "12px", color: "#969696"}}></p></div>
                                    </div>

                                    <div className="col-md-4 text-center text-white">
                                        <div className="h-auto" style={{opacity: 1}}>
                                            <div className="icon">
                                                <i className="bi bi-code-square" style={{width: "1em", fontSize: "50px", color: "#eb83f8"}}></i>
                                            </div>
                                            <h4 style={{fontSize: "20px"}}>Php / CSS / Javascript / Mysql</h4>
                                            <p style={{fontSize: "12px", color: "#969696"}}></p></div>
                                    </div>

                                    <div className="col-md-4 text-center text-white">
                                        <div className="h-auto" style={{opacity: 1}}>
                                            <div className="icon">
                                                <i style={{width: "1em", fontSize: "50px", color: "#eb83f8"}}><FaReact /></i>
                                            </div>
                                            <h4 style={{fontSize: "20px"}}>React</h4>
                                            <p style={{fontSize: "12px", color: "#969696"}}></p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"d-flex"} style={{minHeight: "100px", backgroundColor: "#001556"}}></div>
                    </div>
                </div>

                <div ref={itemRef3} className={"section3"} style={mainContainerDivStyle}>
                    <div className="container-fluid h-100">
                        <div className={"row h-100"}>
                            <div className={"col-2"} style={{minWidth: "100px", backgroundColor: "#001556"}}></div>
                            <div className={"col-10"} >
                                <div className={"d-flex flex-row"}>
                                    <div className={"col-2 align-self-center"}
                                         style={{color: "#FFF", backgroundColor: "#eb83f8", height: 3, width: 50}}>
                                    </div>
                                    <h4 className={"m-0 mx-2"} style={{fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                        fontWeight: "500",
                                        fontFamily: "Barlow",color: "#FFF"}}>Contact</h4>
                                </div>
                                <div className={"glitch"}>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.038 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch
                                    </h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.038 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch
                                    </h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.038 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch</h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.038 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch</h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.038 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch</h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.038 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch</h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.038 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch</h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.038 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch</h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.038 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch</h1>
                                </div>
                                <div className={"d-flex flex-fill h-100 align-items-center"} style={{color:"#FFF"}}>
                                    <div className="d-flex flex-column flex-fill text-center h-auto" style={{opacity: 1}}>
                                        <AiOutlineMail className={"align-self-center"} style={{fontSize:"3em"}}></AiOutlineMail>
                                        <p>getintouch@serhatozkiray.com</p>
                                    </div>

                                    <div className="d-flex flex-column flex-fill text-center h-auto" style={{opacity: 1}}>
                                        <SiDiscord className={"align-self-center"} style={{fontSize:"3em"}}></SiDiscord>
                                        <p>https://discord.gg/6G8bYgbaT2</p>
                                    </div>

                                    <div className="d-flex flex-column flex-fill text-center h-auto" style={{opacity: 1}}>
                                        <MdOutlineLocationOn className={"align-self-center"} style={{fontSize:"3em"}}></MdOutlineLocationOn>
                                        <p>Istanbul, Turkey</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            </>
        );
    }else {
        document.body.style.overflow = 'unset';
        return (
            <>
                <Menu width={ '45%' }>
                    <a onClick={()=>{goPageClick(0)}} className="menu-item" style={{cursor:"pointer"}} >Home</a>
                    <a onClick={()=>{goPageClick(1)}} className="menu-item" style={{cursor:"pointer"}}>About</a>
                    <a onClick={()=>{goPageClick(2)}} className="menu-item" style={{cursor:"pointer"}}>Services</a>
                    <a onClick={()=>{goPageClick(3)}} className="menu-item--small" style={{cursor:"pointer"}}>Contact</a>
                </Menu>
            <div className="App" ref={itemRef} style={{backgroundColor:"#000"}}>
                <div ref={itemRef0} className={"section0"}>
                    <div className={"container-fluid h-100"} style={{backgroundColor: "#000000"}}>
                        <div className={"row h-100 p-3"}>
                            <div className={"col-md-6 col-sm-12 h-100 p-3 infinity"} style={{backgroundColor: "#001556"}}>
                                <div className={"row h-100 p-3"}>
                                    <div className={"col align-self-center"}>
                                        <div className={"row"}>
                                            <div className={"col-2 align-self-center"}
                                                 style={{color: "#FFF", backgroundColor: "#eb83f8", height: 3}}>

                                            </div>
                                            <div className={"col-10"} style={{color: "#FFF"}}>
                                                <div style={{
                                                    fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                    fontWeight: "600",
                                                    fontFamily: "Barlow",
                                                    color: "#000000",
                                                    textAlign: "left"
                                                }}>Hello, I'm
                                                </div>
                                            </div>
                                            <div className={"col-12 p-0"} style={{color: "#FFF"}}>
                                                <div className={"glitch"}>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                    <h1 className={"line"} style={{
                                                        fontSize: size.x > 1000 ? size.x * 0.05 : size.x * 0.06,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>Serhat Ozkiray</h1>
                                                </div>

                                            </div>
                                            <div className={"col-12 p-0"}>
                                                <TypeWriterEffect
                                                    textStyle={{
                                                        color: '#000000',
                                                        fontWeight: 300,
                                                        fontFamily: "Barlow",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04
                                                    }}
                                                    startDelay={0}
                                                    cursorColor="#EB83F8FF"
                                                    multiText={[
                                                        'Motion Graphic Designer',
                                                        "Graphic Desinger",
                                                        "Vizrt Graphic Developer",
                                                        "Vizrt Graphic Automation",
                                                        'Php Developer',
                                                        'Maybe React Developer',
                                                    ]}
                                                    multiTextDelay={2000}
                                                    typeSpeed={40}
                                                    multiTextLoop={true}
                                                />
                                            </div>
                                            {/*<div className={"col-12 p-0"}>
                                                <a>
                                                    <div className="downloadcvmobile mt-4">
                                                        <div className={"noselect"}>
                                                            DOWNLOAD
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-6 col-sm-12 h-100 p-3"}
                                 style={{backgroundImage: " url(\"/img/prof.png\")", backgroundPosition: "center", backgroundSize:"cover",minHeight:"350px"}}>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={itemRef1} className={"section1"} >
                    <div className={"container-fluid h-100"} style={{backgroundColor: "#000000"}}>
                        <div className={"row h-100 p-3"}>
                            <div className={"col-md-6 col-sm-12 h-100"} style={{backgroundColor: "#001556"}}>
                                <div className={"row h-100 p-3"}>
                                    <div className={"col align-self-center"}>
                                        <div className={"row"}>
                                            <div className={"col-12 pb-3"}>
                                                <div className={"row"}>
                                                    <div className={"col-2 align-self-center"}
                                                         style={{color: "#FFF", backgroundColor: "#eb83f8", height: 3}}>

                                                    </div>
                                                    <div className={"col-10"} style={{color: "#FFF"}}>
                                                        <div style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                            fontWeight: "500",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "left"
                                                        }}>My Skills
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"col-12 pb-3 px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-10"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "left"
                                                        }}>Motion Graphic Designer</h5>
                                                    </div>
                                                    <div className={"col-2"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "right"
                                                        }}>%70</h5>
                                                    </div>
                                                    <div className={"col-12 pt-2"}>
                                                        <div className={"progress"}
                                                             style={{height: 10, backgroundColor: "#001556"}}>
                                                            <div className={"progress-bar"}
                                                                 style={{width: "70%", backgroundColor: "#fff"}}
                                                                 role={"progressbar"} aria-valuemin={0}
                                                                 aria-valuemax={100}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"row"}>
                                            <div className={"col-12 pb-3 px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-10"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "left"
                                                        }}>Graphic Desinger</h5>
                                                    </div>
                                                    <div className={"col-2"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "right"
                                                        }}>%60</h5>
                                                    </div>
                                                    <div className={"col-12 pt-2"}>
                                                        <div className={"progress"}
                                                             style={{height: 10, backgroundColor: "#001556"}}>
                                                            <div className={"progress-bar"}
                                                                 style={{width: "60%", backgroundColor: "#fff"}}
                                                                 role={"progressbar"} aria-valuemin={0}
                                                                 aria-valuemax={100}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"row"}>
                                            <div className={"col-12 pb-3 px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-10"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "left"
                                                        }}>Vizrt Graphic Developer</h5>
                                                    </div>
                                                    <div className={"col-2"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "right"
                                                        }}>%90</h5>
                                                    </div>
                                                    <div className={"col-12 pt-2"}>
                                                        <div className={"progress"}
                                                             style={{height: 10, backgroundColor: "#001556"}}>
                                                            <div className={"progress-bar"}
                                                                 style={{width: "90%", backgroundColor: "#fff"}}
                                                                 role={"progressbar"} aria-valuemin={0}
                                                                 aria-valuemax={100}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"row"}>
                                            <div className={"col-12 pb-3 px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-10"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "left"
                                                        }}>Vizrt Graphic Automation</h5>
                                                    </div>
                                                    <div className={"col-2"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "right"
                                                        }}>%85</h5>
                                                    </div>
                                                    <div className={"col-12 pt-2"}>
                                                        <div className={"progress"}
                                                             style={{height: 10, backgroundColor: "#001556"}}>
                                                            <div className={"progress-bar"}
                                                                 style={{width: "85%", backgroundColor: "#fff"}}
                                                                 role={"progressbar"} aria-valuemin={0}
                                                                 aria-valuemax={100}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={"row"}>
                                            <div className={"col-12 pb-3 px-0"}>
                                                <div className={"row"}>
                                                    <div className={"col-10"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "left"
                                                        }}>Php Development / CSS / Javascript / React /Mysql</h5>
                                                    </div>
                                                    <div className={"col-2"}>
                                                        <h5 style={{
                                                            fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,
                                                            fontWeight: "100",
                                                            fontFamily: "Barlow",
                                                            color: "#ffffff",
                                                            textAlign: "right"
                                                        }}>%55</h5>
                                                    </div>
                                                    <div className={"col-12 pt-2"}>
                                                        <div className={"progress"}
                                                             style={{height: 10, backgroundColor: "#001556"}}>
                                                            <div className={"progress-bar"}
                                                                 style={{width: "55%", backgroundColor: "#fff"}}
                                                                 role={"progressbar"} aria-valuemin={0}
                                                                 aria-valuemax={100}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-md-6 col-sm-12 h-100 infinity"}>
                                <div className={"row h-100 p-3"}>
                                    <div className={"col align-self-center"}>
                                        <div className={"row"}>
                                            <div className={"col-2 align-self-center"}
                                                 style={{color: "#FFF", backgroundColor: "#eb83f8", height: 3}}>

                                            </div>
                                            <div className={"col-10"} style={{color: "#FFF"}}>
                                                <div style={{
                                                    fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                    fontWeight: "500",
                                                    fontFamily: "Barlow",
                                                    color: "#000000",
                                                    textAlign: "left"
                                                }}>About me...
                                                </div>
                                            </div>
                                            <div className={"col-12 p-0"} style={{color: "#FFF"}}>
                                                <div className={"glitch"}>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                    <h1 className={"line"} style={{
                                                        textAlign: "left",
                                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                                        fontWeight: "lighter",
                                                        fontFamily: "Barlow",
                                                        color: "#000000"
                                                    }}>I'm not only designer but also coder.</h1>
                                                </div>
                                            </div>
                                            <div className={"col-2 align-self-center"}
                                                 style={{color: "#FFF", backgroundColor: "#eb83f8", height: 3}}>
                                            </div>
                                            <div className={"col-12 p-0 pt-3"}
                                                 style={{fontSize: size.x > 1000 ? size.x * 0.02 : size.x * 0.03,fontFamily: "Barlow",textAlign: "left", color: "#000000"}}>
                                                Hello. I'm Serhat Ozkiray. I have spent nearly 20 years in digital life. I’ve spent a lot of my time trying to tell stories with graphic design and motion graphics design. I am currently continuing to tell the stories behind the data with motion graphics.I'm not satisfied with just your design. In my opinion I started to get involved with coding, which is a new branch of art.</div>
                                            <div className={"col-12 ps-0 pt-3 text-start d-flex"}>
                                                <a type="button" target={"_blank"} href={"https://github.com/merett"} className="btn btn-sm btn-dark">
                                                    <i className="bi-github" role="img" aria-label="GitHub"></i>
                                                </a>
                                                <div style={{width: 4}}></div>
                                                <a type="button" target={"_blank"} href={"https://www.linkedin.com/in/serhat-özkıray-593052152/"} className="btn btn-sm btn-primary ps-2">
                                                    <i className="bi-linkedin" role="img" aria-label="Linkedin"></i>
                                                </a>
                                                <div style={{width: 4}}></div>
                                                <a type="button" target={"_blank"} href={"https://www.youtube.com/channel/UCBVZ-c0_JRMhPfh6cEXRA9g"} className="btn btn-sm btn-danger ps-2">
                                                    <i className="bi-youtube" role="img" aria-label="Linkedin"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={itemRef2} className={"section2"} >
                    <div className="d-flex flex-column h-100 p-3">
                        <div className={"d-flex align-items-center pt-1 ps-3"}>
                            <div className={"col-2 align-self-center"}
                                 style={{color: "#FFF", backgroundColor: "#eb83f8", height: 3, width: 50}}>

                            </div>
                            <h4 className={"m-0 mx-2"} style={{color: "#FFF",fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04}}>Services</h4>
                        </div>
                        <div className={"d-flex ps-3"}>
                            <div className={"glitch"}>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                                <h1 className={"line"} style={{
                                    textAlign: "left",
                                    fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                    fontWeight: "lighter",
                                    fontFamily: "Barlow",
                                    color: "#000000"
                                }}>What can I do for YOU?</h1>
                            </div>
                        </div>
                        <div className={"d-flex h-100 pt-3"}>
                            <div className={"container-fluid d-flex flex-column align-items-center justify-content-center"}>
                                <div className={"row"}>
                                    <div className="col-md-4 text-center text-white">
                                        <div className="h-auto" style={{opacity: 1}}>
                                            <div className="icon">
                                                <i className="bi bi-layout-wtf" style={{width: "1em", fontSize: "50px", color: "#eb83f8"}}></i>
                                            </div>
                                            <h4 style={{fontSize: "17px"}}>Motion Graphic Designer</h4>
                                            <p style={{fontSize: "12px", color: "#969696"}}></p></div>
                                    </div>

                                    <div className="col-md-4 text-center text-white">
                                        <div className="h-auto" style={{opacity: 1}}>
                                            <div className="icon">
                                                <i className="bi bi-image" style={{width: "1em", fontSize: "50px", color: "#eb83f8"}}></i>
                                            </div>
                                            <h4 style={{fontSize: "17px"}}>Graphic Designer</h4>
                                            <p style={{fontSize: "12px", color: "#969696"}}></p></div>
                                    </div>
                                    <div className="col-md-4 text-center text-white">
                                        <div className="h-auto" style={{opacity: 1}}>
                                            <div className="icon">
                                                <i className="bi bi-tv" style={{width: "1em", fontSize: "50px", color: "#eb83f8"}}></i>
                                            </div>
                                            <h4 style={{fontSize: "17px"}}>Vizrt Graphic Developer</h4>
                                            <p style={{fontSize: "12px", color: "#969696"}}></p></div>
                                    </div>

                                    <div className="col-md-4 text-center text-white">
                                        <div className="h-auto" style={{opacity: 1}}>
                                            <div className="icon">
                                                <i className="bi bi-card-heading" style={{width: "1em", fontSize: "50px", color: "#eb83f8"}}></i>
                                            </div>
                                            <h4 style={{fontSize: "17px"}}>Vizrt Graphic Automation</h4>
                                            <p style={{fontSize: "12px", color: "#969696"}}></p></div>
                                    </div>

                                    <div className="col-md-4 text-center text-white">
                                        <div className="h-auto" style={{opacity: 1}}>
                                            <div className="icon">
                                                <i className="bi bi-code-square" style={{width: "1em", fontSize: "50px", color: "#eb83f8"}}></i>
                                            </div>
                                            <h4 style={{fontSize: "17px"}}>Php / CSS / Javascript / Mysql</h4>
                                            <p style={{fontSize: "12px", color: "#969696"}}></p></div>
                                    </div>

                                    <div className="col-md-4 text-center text-white">
                                        <div className="h-auto" style={{opacity: 1}}>
                                            <div className="icon">
                                                <i style={{width: "1em", fontSize: "50px", color: "#eb83f8"}}><FaReact /></i>
                                            </div>
                                            <h4 style={{fontSize: "17px"}}>React</h4>
                                            <p style={{fontSize: "12px", color: "#969696"}}></p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={itemRef3} className={"section3"} >
                    <div className="container-fluid h-100">
                        <div className={"row h-100 p-3"}>
                            <div className={"col-12"} >
                                <div className={"d-flex flex-row"}>
                                    <div className={"col-2 align-self-center"}
                                         style={{color: "#FFF", backgroundColor: "#eb83f8", height: 3, width: 50}}>
                                    </div>
                                    <h4 className={"m-0 mx-2"} style={{
                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                        fontWeight: "500",
                                        fontFamily: "Barlow",color: "#FFF"}}>Contact</h4>
                                </div>
                                <div className={"glitch"}>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch
                                    </h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch
                                    </h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch</h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch</h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch</h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch</h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch</h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch</h1>
                                    <h1 className={"line"} style={{
                                        textAlign: "left",
                                        fontSize: size.x > 1000 ? size.x * 0.03 : size.x * 0.04,
                                        fontWeight: "lighter",
                                        fontFamily: "Barlow",
                                        color: "#000000"
                                    }}>Get in touch</h1>
                                </div>
                                <div className={"d-flex flex-column"} style={{color:"#FFF"}}>
                                    <div className="d-flex flex-column flex-fill text-center h-auto" style={{opacity: 1}}>
                                        <AiOutlineMail className={"align-self-center"} style={{fontSize:"2em"}}></AiOutlineMail>
                                        <p>getintouch@serhatozkiray.com</p>
                                    </div>

                                    <div className="d-flex flex-column flex-fill text-center h-auto" style={{opacity: 1}}>
                                        <SiDiscord className={"align-self-center"} style={{fontSize:"2em"}}></SiDiscord>
                                        <p>https://discord.gg/6G8bYgbaT2</p>
                                    </div>

                                    <div className="d-flex flex-column flex-fill text-center h-auto" style={{opacity: 1}}>
                                        <MdOutlineLocationOn className={"align-self-center"} style={{fontSize:"2em"}}></MdOutlineLocationOn>
                                        <p>Istanbul, Turkey</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            </>
        );
    }

}

export default App;
