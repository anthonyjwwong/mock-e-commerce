import React from 'react';
import homebanner from '../../assets/homepage.jpg';
import interior from '../../assets/interior.jpg';
import { useHistory } from 'react-router-dom';
import './Home.css';
import {Animated} from "react-animated-css";

const Home = () => {
    let history = useHistory();

    const goExplore =()=> {
        history.push("/explore")
    };
    return(
        <div class="home">
            <div className="home_container">
                <div className="home_description">
                    <div className="home_title">
                    
                    <Animated animationIn="fadeInRight" animationInDuration={900} isVisible={true}>
                        <h1>KITCHEN</h1>
                    </Animated>

                    <Animated animationIn="fadeInRight" animationInDuration={1050} isVisible={true}>
                        <h1>LIVING ROOM</h1>
                    </Animated>
                    <Animated animationIn="fadeInRight" animationInDuration={1200} isVisible={true}>
                        <h1>DINING AREA</h1>
                    </Animated>
                    <Animated animationIn="fadeInRight" animationInDuration={1350} isVisible={true}>
                        <h1>BATHROOM</h1>
                    </Animated>
                    <Animated animationIn="fadeInRight" animationInDuration={1500} isVisible={true}>
                        <h1>BEDROOM</h1>
                    </Animated>
                    <Animated animationIn="fadeInRight" animationInDuration={1650} isVisible={true}>
                        <p>We provide interior design to whatever you may need.</p>
                        <p>Trusted since 1984 to blahblah to whatever you may need</p>
                    </Animated>
                        <button
                            onClick={goExplore}
                        >Explore</button>    
                    </div>

                </div>
             
            </div>
        </div>
    )
}

export default Home;