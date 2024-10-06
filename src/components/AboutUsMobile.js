import React, { useState } from 'react';
import '../App.css';
import App from '../App'
import Services from '../services'
import Blog from '../blog'
import Contact from '../contact'
import FadeInSection from './FadeIn';

function AboutUsMobile() {
    const [desktopState] = useState('About1');  
    
    const scrollToMySkills = () => {
        const mySkillsElement = document.getElementById('my-skills-mobile');
        if (mySkillsElement) {
            mySkillsElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // const handleAboutClick = () => {
    //     setDesktopState('AboutUs');
    //   };
    //   const handleServicesClick = () => {
    //     setDesktopState('Services');
    //   };
    //   const handleBlogClick = () => {
    //     setDesktopState('Blog');
    //   };
    //   const handleContactClick = () => {
    //     setDesktopState('Contact');
    //   };

  return (
    
    <div className="AboutUs-mobile" style={{width: '100%', height: '100vh', right:'0', position: 'relative', background: 'white', maxWidth: "100%", display: "none"}}>
        <div id='NavlogoMobile'><img src='./logo-new.png' alt='logo mobile'style={{height:'5vh',marginTop:'1.5vh'}}onClick={() => window.location.href = './'}/></div>
        {desktopState === 'About1' && (
        <div>
            <div className="Aboutus" style={{width: '100%', position: 'absolute', background: '#efe6dd', top: "10vh", overflow: 'hidden'}}>
                <div className="Image" style={{width: '100%', height: 'auto', right: 0, top: 0, position: 'absolute', objectFit: "cover"}}>
                    <img className="Samplebio21" style={{width: 'auto', height: '80vh', left: '50%',transform: 'translateX(-50%)', top: '23vh', position: 'absolute',filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.5))' }} src="./erica-aboutme-c.png" alt='Placeholder'/>
                </div>
                <div className="Intro" style={{ position: "relative",width: '85vw', height: '100vh', left: "5vw", top: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                    {/* <div className="E3StrategicSolutions" style={{alignSelf: 'stretch', fontSize: 'clamp(16px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>E3 STRATEGIC SOLUTIONS</div> */}
                    <div className="Content" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                        <div className='content-name' style={{width:'100vw', fontSize: 'clamp(25px, 4vw, 64px)', fontFamily: 'Playfair Display', fontWeight: '700', wordWrap: 'break-word'}}>Hello, my name is Erica Opoku</div>
                        <div className="Subheadline" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                            <div className="Text" style={{width: '80%',  fontSize: 'clamp(16px, 2vw, 24px)', marginBottom:'22vh',fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word',lineHeight: '1.5' }}>
                                <div className='Experience'>
                                I specialize in grant-making, health system transformation, and healthy public policy.
                                Let's explore how I can help drive positive change for your organization.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="about-button" className="Button">
                        <div className="Label"onClick={scrollToMySkills}>READ MORE</div>
                    </div>
                </div>
                <div id="my-skills-mobile" className="MySkill" style={{height: 732.33, left: 50, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 56.67, display: 'inline-flex'}}>
                    <div className="SectionTitle" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '3vh', display: 'flex'}}>
                        <div className="MySkills" style={{textAlign: 'center', color: '#282938', fontSize: 'clamp(21px, 2vw, 21px)', fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>My Skills</div>
                        <div className="Content" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                            <div className="MyExpertise" style={{alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(50px, 4vw, 61px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>My Expertise</div>
                        </div>
                    </div>
                    <FadeInSection>
                        <div className="Row" style={{ flexWrap: "wrap", justifyContent: "flex-start" }}>
                                            <div className="Card" style={{ maxWidth: "430px", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./audits.jpg" alt='Placeholder' />
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                            <div className="Project1" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(22px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Strategic Thinking</div>
                                                            <div  style={{ alignSelf: 'stretch', color: 'black', fontSize: 'clamp(20px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Experienced in developing strategic plans that align with organizational goals. Innovative thinking to identify unique solutions.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="Card" style={{ maxWidth: "430px", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./assessments.jpg" alt='Placeholder' />
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                            <div className="Project2" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(22px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Change Management</div>
                                                            <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(20px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Experience in guiding teams through change. Skilled in training, coaching and supporting staff through transitions.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="Card" style={{ maxWidth: "430px", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom: "5rem" }}>
                                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./boardroom-queenst.jpg" alt='Placeholder' />
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                            <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(22px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Project Management</div>
                                                            <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(20px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Expertise in planning, executing and monitoring projects. Ability to manage time effectively and handle multiple tasks simultaneously.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="Card" style={{ maxWidth: "430px", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom: "5rem" }}>
                                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./about-me2.jpeg" alt='Placeholder' />
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                            <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(22px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Technical Proficiency</div>
                                                            <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(20px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Deep understanding of not-for-profit landscape, municipal government and grant making.  Awareness of current trends, challenges and best practices that impact nonprofits and other community-based organizations.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                        </div>
                    </FadeInSection>
                </div>
                {/* <div className="Blog" style={{ margin: "5%", marginBottom: "6rem"}}>
                    <div className="SectionHeader" style={{width: '100%', justifyContent: 'flex-start', alignItems: 'center', gap: 16.67, display: 'inline-flex'}}>
                        <div className="SectionTitle" style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div className="RecentProjects" style={{textAlign: 'center', color: '#282938', fontSize: 'clamp(21px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '600', lineHeight: 3, wordWrap: 'break-word'}}>Recent Projects</div>
                            <div className="Content" style={{alignSelf: 'stretch', height: "auto", flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'flex'}}>
                                <div className="MyPortfolio" style={{alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(50px, 4vw, 61px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>My Portfolio</div>
                            </div>
                        </div>
                    </div>
                            <div className="Row" style={{flexWrap: "wrap", justifyContent: "flex-start", rowGap: "1.5rem"}}>
                            <FadeInSection>
                                <div className="Card" style={{width: "100%",flex: '1 1 0', background: 'white', boxShadow: '0px 0px 32px rgba(0, 0, 0, 0.15)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <img className="PlaceholderImage" style={{alignSelf: 'stretch', height: 200, borderRadius: 8,objectFit:'cover'}} src="./project1.jpg" alt='Placeholder'/>
                                    <div className="Content" style={{alignSelf: 'stretch', height: 'auto', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                        <div className="Content" style={{alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                            <div style={{alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                                <div className="Project1" style={{alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(30px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Project 1</div>
                                                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInEros" style={{alignSelf: 'stretch', color: 'black', fontSize: 'clamp(21px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInSection>
                            <FadeInSection>
                                <div className="Card" style={{width: "100%",flex: '1 1 0', background: 'white', boxShadow: '0px 5.333333492279053px 16px rgba(0, 0, 0, 0.15)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <img className="PlaceholderImage" style={{alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit:'cover'}} src="./project2.jpg" alt='Placeholder'/>
                                    <div className="Content" style={{alignSelf: 'stretch', height: 'auto', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                        <div className="Content" style={{alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                            <div style={{alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                                <div className="Project2" style={{alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(30px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Project 2</div>
                                                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInEros" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(21px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInSection>
                                <div className="Card last" style={{ width: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 5.333333492279053px 32px rgba(0, 0, 0, 0.15)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <img className="PlaceholderImage" style={{alignSelf: 'stretch', height: 200, borderRadius: 8,objectFit:'cover'}} src="./project3.jpg" alt='Placeholder'/>
                                    <div className="Content" style={{alignSelf: 'stretch', height: 'auto', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                        <div className="Content" style={{alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                            <div style={{alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                                <div className="Project3" style={{alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(30px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Project 3</div>
                                                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInEros" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(21px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div> */}
            </div>
        </div>
        )}
        {desktopState === 'Homedesktop1' && (
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
        )}

        {/* <div className="Navmenudesktop" style={{width: '80vw', height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'inline-flex'}}>
            <div className="ListitemDesktopNaActive" style={{zIndex:2, width: 'clamp(83px, 3vw, 16px)', height: '100%', paddingLeft: 18, paddingRight: 18, paddingTop: 0, paddingBottom: 0, background: '#FFD700', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 100, textAlign: 'center', color: 'black', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleAboutClick()}>About Us</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleServicesClick()}>Services</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleBlogClick()}>Blog</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleContactClick()}>Contact</div>
            </div>
        </div> */}
    </div>
    
  );
}

export default AboutUsMobile;