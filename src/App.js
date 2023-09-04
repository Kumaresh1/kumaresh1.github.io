import React, { useEffect } from 'react';
import Splitleft from './components/Splitleft';
import Middlesec from './components/middlesection';
import Topnav from './components/Topnav';
import Myprojects from './components/myprojects';
import Footer from './components/footer';
import axios from 'axios';
import Skills from './components/skills';
import ProjectsSection from './components/projects';

function App() {
    useEffect(() => {
        axios
            .post('https://secretmsgs.herokuapp.com/portfolio/uservisit', {
                message: 'visit',
            })
            .then(function (response) {
                //console.log("axios")
                //console.log(response);
            });
    }, []);

    return (
        <div className="App">
            <Topnav />

            <div className="full-cont">
                <Splitleft />
            </div>

            <Middlesec />
            <Skills />

            <ProjectsSection />
            {/* <Myprojects /> */}

            <Footer />
        </div>
    );
}

export default App;
