import React, { useState } from 'react';
import './App.css';
// import App from './App'
// import Services from './services'
// import Blog from './blog'
// import Contact from './contact'
import AboutUsMobile from './components/AboutUsMobile';
import FadeInSection from './components/FadeIn';
import ReactDOM from 'react-dom';


function About() {
    const [desktopState] = useState('About1');
    const scrollToMySkills = () => {
        const mySkillsElement = document.querySelector('.MySkills');
        if (mySkillsElement) {
            mySkillsElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // const handleAboutClick = () => {
    //     setDesktopState('AboutUs');
    // };
    // const handleServicesClick = () => {
    //     setDesktopState('Services');
    // };
    // const handleBlogClick = () => {
    //     setDesktopState('Blog');
    // };
    // const handleContactClick = () => {
    //     setDesktopState('Contact');
    // };

    return (

        <>
            <div className="AboutUs" style={{ width: '100%', height: '100%', right: '0', position: 'relative', background: 'white' }}>
                {/* <div id='NavlogoMobile'><img src='./logo-new.png' alt='logo mobile'style={{height:'50px'}}onClick={() => './'()}/></div> */}
                {desktopState === 'About1' && (
                    <div>
                        <div className="Aboutus" style={{ width: '100%', height:'100%',top: '10vh', position: 'absolute', background: '#f0ece7' }}>
                            <div className="Image" style={{ width: '100%', height: '100%', right: 0, bottom: 0, position: 'absolute' }}>
                                <img className="Samplebio21" style={{ width: 'auto', height: '80vh', right: 0, top: '0vh', position: 'absolute',filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.5))' }} src="./erica-aboutme-c.png" alt='Placeholder' />
                            </div>
                            <div className="Intro" style={{ width: '100%', height: 'auto', top: 24, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex', padding: "0px 3vw" }}>
                                <div className="E3StrategicSolutions" style={{ alignSelf: 'stretch', color: 'black', fontSize: 'clamp(16px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word' }}>E3 STRATEGIC SOLUTIONS</div>
                                <div className="Content" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
                                    <div className='content-name' style={{ width: '30vw', color: '#25282B', fontSize: 'clamp(16px, 4vw, 64px)', fontFamily: 'Playfair Display', fontWeight: '700', wordWrap: 'break-word' }}>Hello, my name is Erica Opoku</div>
                                    <div className="Subheadline" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex',marginTop:'50px'}}>
                                        <div className="Text" style={{ width: '50vw', textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',color: 'black', fontSize: 'clamp(13px, 2vw, 24px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word', lineHeight: '1.5' }}>I have over 20 years of experience working in non-profits in Canada and Internationally, with the majority of my focus being at the municipal level. Specializing in grant-making, health system transformation, and healthy public policy, I bring a wealth of expertise to the table. Let's explore how I can help drive positive change for your organization.</div>
                                    </div>
                                </div>
                                <div id="about-button" className="Button" style={{marginTop:'50px'}}>
                                    <div className="Label" onClick={scrollToMySkills}>READ MORE</div>
                                </div>
                            </div>
                            <div style={{ position: "relative", top: "100vh", backgroundColor:'#f0ece7' }}>
                                <div className="MySkill" style={{ height: "auto", position: 'relative', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 56.67, display: 'inline-flex', padding: "0px 3vw" }}>
                                    <div className="SectionTitle" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '3vh', display: 'flex' }}>
                                        <div className="MySkills" style={{ textAlign: 'center', color: '#282938', fontSize: 'clamp(16px, 2vw, 21px)', fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word' }}>My Skills</div>
                                        <div className="Content" style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                            <div className="MyExpertise" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(20px, 4vw, 61px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>My Expertise</div>
                                        </div>
                                    </div>
                                    <FadeInSection>
                                    <div className="Row" style={{ flexWrap: "wrap", justifyContent: "flex-start" }}>
                                        <div className="Card" style={{ maxWidth: "430px", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                            <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./audits.jpg" alt='Placeholder' />
                                            <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                    <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div className="Project1" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Strategic Thinking</div>
                                                        <div  style={{ alignSelf: 'stretch', color: 'black', fontSize: 'clamp(10px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Experienced in developing strategic plans that align with organizational goals. Innovative thinking to identify unique solutions.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Card" style={{ maxWidth: "430px", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                            <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./assessments.jpg" alt='Placeholder' />
                                            <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                    <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div className="Project2" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Change Management</div>
                                                        <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(10px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Experience in guiding teams through change. Skilled in training, coaching and supporting staff through transitions.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Card" style={{ maxWidth: "430px", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom: "5rem" }}>
                                            <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./boardroom-queenst.jpg" alt='Placeholder' />
                                            <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                    <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Project Management</div>
                                                        <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(10px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Expertise in planning, executing and monitoring projects. Ability to manage time effectively and handle multiple tasks simultaneously.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="Card" style={{ maxWidth: "430px", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom: "5rem" }}>
                                            <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./about-me2.jpeg" alt='Placeholder' />
                                            <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                    <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Technical Proficiency</div>
                                                        <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(10px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Deep understanding of not-for-profit landscape, municipal government and grant making.  Awareness of current trends, challenges and best practices that impact nonprofits and other community-based organizations.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    </FadeInSection>

                                </div>
                                {/* <div className="Blog" style={{ position: "relative", padding: "0px 3vw", marginBottom: "3rem" }}>
                                    <div className="SectionHeader" style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', gap: 16.67, display: 'inline-flex' }}>
                                        <div className="SectionTitle" style={{ width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                            <div className="RecentProjects" style={{ textAlign: 'center', color: '#282938', fontSize: 'clamp(16px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '600', lineHeight: 3, wordWrap: 'break-word' }}>Recent Projects</div>
                                            <div className="Content" style={{ alignSelf: 'stretch', height: 77, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'flex' }}>
                                                <div className="MyPortfolio" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(16px, 4vw, 61px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>My Portfolio</div>
                                            </div>
                                        </div>
                                    </div>
                                    <FadeInSection>
                                    <div className="Row" style={{ flexWrap: "wrap", justifyContent: "flex-start" }}>
                                        <div className="Card" style={{ maxWidth: "430px", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                            <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./project1.jpg" alt='Placeholder' />
                                            <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                    <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div className="Project1" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Project 1</div>
                                                        <div  style={{ alignSelf: 'stretch', color: 'black', fontSize: 'clamp(10px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Card" style={{ maxWidth: "430px", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                            <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./project2.jpg" alt='Placeholder' />
                                            <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                    <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div className="Project2" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Project 2</div>
                                                        <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(10px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Card" style={{ maxWidth: "430px", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom: "5rem" }}>
                                            <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./project3.jpg" alt='Placeholder' />
                                            <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                    <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Project 3</div>
                                                        <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(10px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </FadeInSection>
                                </div> */}
                            </div>

                            {/* <div className="Testimonial" style={{height: 675.52, paddingLeft: 85.33, paddingRight: 85.33, paddingTop: 20, paddingBottom: 20, left: 0, top: 2904, position: 'absolute', background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 106.67, display: 'inline-flex'}}>
                    <div className="SectionTitle" style={{alignSelf: 'stretch', height: 130.33, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 21.33, display: 'flex'}}>
                        <div className="ClientsFeedback" style={{width: 746.67, color: '#282938', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 3, wordWrap: 'break-word'}}>Clients Feedback</div>
                        <div className="CustomerTestimonials" style={{width: 746.67, color: '#282938', fontSize: 64, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Customer testimonials</div>
                    </div>
                    <div className="Content" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 42.67, display: 'inline-flex'}}>
                        <div className="Column" style={{flex: '1 1 0', padding: 42.67, borderRadius: 8, border: '1.33px #5F5FB0 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 42.67, display: 'inline-flex'}}>
                            <div className="Stars" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5.33, display: 'inline-flex'}}>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                            </div>
                            <div className="PlaceDuisCursusMiQuisViverra" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</div>
                            <div className="Avatar" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 21.33, display: 'inline-flex'}}>
                                <img className="AvatarImage" style={{width: 74.67, height: 74.67, borderRadius: 9999}} src="https://via.placeholder.com/75x75" alt='Placeholder'/>
                                <div className="AvatarContent" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div className="DianneRussell" style={{color: '#282938', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Dianne Russell</div>
                                    <div className="Starbucks" style={{color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Starbucks</div>
                                </div>
                            </div>
                        </div>
                        <div className="Column" style={{flex: '1 1 0', padding: 42.67, borderRadius: 8, overflow: 'hidden', border: '1.33px #5F5FB0 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 42.67, display: 'inline-flex'}}>
                            <div className="Stars" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5.33, display: 'inline-flex'}}>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                            </div>
                            <div className="PlaceDuisCursusMiQuisViverra" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</div>
                            <div className="Avatar" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 21.33, display: 'inline-flex'}}>
                                <img className="AvatarImage" style={{width: 74.67, height: 74.67, borderRadius: 9999}} src="https://via.placeholder.com/75x75" alt='Placeholder'/>
                                <div className="AvatarContent" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}} alt='Placeholder'>
                                    <div className="KristinWatson" style={{color: '#282938', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Kristin Watson</div>
                                    <div className="LouisVuitton" style={{color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Louis Vuitton</div>
                                </div>
                            </div>
                        </div>
                        <div className="Column" style={{flex: '1 1 0', padding: 42.67, borderRadius: 8, overflow: 'hidden', border: '1.33px #5F5FB0 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 42.67, display: 'inline-flex'}}>
                            <div className="Stars" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5.33, display: 'inline-flex'}}>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                            </div>
                            <div className="PlaceDuisCursusMiQuisViverra" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</div>
                            <div className="Avatar" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 21.33, display: 'inline-flex'}}>
                                <img className="AvatarImage" style={{width: 74.67, height: 74.67, borderRadius: 9999}} src="https://via.placeholder.com/75x75" alt='Placeholder'/>
                                <div className="AvatarContent" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div className="KathrynMurphy" style={{color: '#282938', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Kathryn Murphy</div>
                                    <div className="McdonaldS" style={{color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>McDonald's</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                        </div>
                    </div>
                )}
                {/* {desktopState === 'Homedesktop1' && (
                    <App />
                )}
                {desktopState === 'Services' && (
                    <Services />
                )}
                {desktopState === 'Blog' && (
                    <Blog />
                )}
                {desktopState === 'Contact' && (
                    <Contact />
                )} */}

                {/* <div className="Navmenudesktop" style={{ width: '80vw', height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'inline-flex', paddingLeft: "calc(100vw - 100%)" }}>
                    <div className="ListitemDesktopNaActive" style={{ zIndex: 2, width: 115, height: '100%', paddingLeft: 18, paddingRight: 18, paddingTop: 0, paddingBottom: 0,background: 'rgb(130, 117, 78)', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div className="Label" style={{ width: 100, textAlign: 'center', color: 'white',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word' }} onClick={() => handleAboutClick()}>About</div>
                    </div>
                    <div className="ListitemDesktopNa" style={{ width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div className="Label" style={{ width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word' }} onClick={() => handleServicesClick()}>Services</div>
                    </div>
                    <div className="ListitemDesktopNa" style={{ width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div className="Label" style={{ width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word' }} onClick={() => handleBlogClick()}>Blog</div>
                    </div>
                    <div className="ListitemDesktopNa" style={{ width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div className="Label" style={{ width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word' }} onClick={() => handleContactClick()}>Contact</div>
                    </div>
                </div> */}
            </div>

            <AboutUsMobile />
        </>
    );
}

ReactDOM.render(<About />, document.getElementById('root'));
export default About;