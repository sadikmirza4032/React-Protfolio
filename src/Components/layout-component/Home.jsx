
import Hero from '../Hero';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Projects></Projects>
            <MySkills></MySkills>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;