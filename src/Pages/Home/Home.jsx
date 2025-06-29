import React from 'react';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Education from './Education';
import TeckStack from './TeckStack';
import Projects from './Projects/Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Education></Education>
            <TeckStack></TeckStack>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;