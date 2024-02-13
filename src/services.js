import React, { useState } from 'react';
import './App.css';
import App from './App'
import Blog from './blog'
import Contact from './contact'


function Services() {
    const [desktopState,setDesktopState] = useState('Services1');  

    const handleAboutClick = () => {
        setDesktopState('AboutUs');
      };
      const handleServicesClick = () => {
        setDesktopState('Services');
      };
      const handleBlogClick = () => {
        setDesktopState('Blog');
      };
      const handleContactClick = () => {
        setDesktopState('Contact');
      };
  
  return (
    
    <div className="Services" style={{width: '100vw', height: '100vh', right:'0', position: 'relative', background: 'white'}}>
        {desktopState === 'Services1' && (
        <div>
            <div className="Servicesx" style={{width: '100vw', position: 'relative', background: 'white',top: '100px'}}>
                <div className="Servicesdesktop" style={{width: '100vw',  left: 0, position: 'absolute', background: 'white', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', gap: 1, display: 'inline-flex'}}>
                    <div className="Home" style={{height: '13rem', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 124, display: 'inline-flex'}}>
                        <div className="IntroSection" style={{alignSelf: 'stretch', height: 259, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                            <div className="Frame1" style={{flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 50, paddingRight: 60, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
                                <div className="E3StrategicSolutions" style={{alignSelf: 'stretch', color: 'black', fontSize: 'clamp(16px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>SERVICES</div>
                                <div className="Text" style={{alignSelf: 'stretch', height: 100, width:'100vw', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                    <div className="CardTextz" style={{alignSelf: 'stretch', color: '#4D4D4D', paddingRight:'70px',fontSize: 'clamp(10px, 3vw, 35px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Our professional services will help align your business with your strategic goals.  We have over 20 years of experience providing extensive services for various organizations.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="BodyX" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'inline-flex'}}>
                        <div className="Servicecards1">
                            <div className="Frame2230">
                                <div className="Servicecard">
                                    <div className="CardImage">
                                        <img className="cardpic" src="./boardroom-brightwider.jpg" alt='boardroom'/>
                                    </div>
                                    <div className="CardTextx">Assessments include state analysis and an implementation roadmap.</div>
                                    <div className="Group5">
                                        <div className="TitleSer">Assessments</div>
                                    </div>
                                    <div className="Button">
                                        <div className="ReadMore">READ MORE</div>
                                    </div>
                                </div>
                                <div className="Servicecard">
                                    <div className="CardImage">
                                        <img className="cardpic" src="./boardroom-queenst2.jpg" alt='boardroom'/>
                                    </div>
                                    <div className="CardTextx">Detailed audits of your organization</div>
                                    <div className="Group5">
                                        <div className="TitleSer">Organization Audits</div>
                                    </div>
                                    <div className="Button">
                                        <div className="ReadMore">READ MORE</div>
                                    </div>
                                </div>
                                <div className="Servicecard">
                                    <div className="CardImage">
                                        <img className="cardpic" src="./boardroom-queenst.jpg" alt='boardroom'/>
                                    </div>
                                    <div className="CardTextx">Stragetic Plan for your organization</div>
                                    <div className="Group5">
                                        <div className="TitleSer">Strategic Plan</div>
                                    </div>
                                    <div className="Button">
                                        <div className="ReadMore">READ MORE</div>
                                    </div>
                                </div>
                                <div className="Servicecard">
                                    <div className="CardImage">
                                        <img className="cardpic" src="./groupmeeting.jpeg" alt='groupmeeting'/>
                                    </div>
                                    <div className="CardTextx">Comprehensive analysis that is used to maintain an effectiveness program</div>
                                    <div className="Group5">
                                        <div className="TitleSer">Program Evaluation</div>
                                    </div>
                                    <div className="Button">
                                        <div className="ReadMore">READ MORE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="IntroSection" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                            <div className="Frame1" style={{flex: '1 1 0', height: 320, paddingLeft: 50, paddingRight: 60, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 45, display: 'inline-flex'}}>
                            <div className="E3StrategicSolutions" style={{alignSelf: 'stretch', color: 'black', fontSize: 'clamp(16px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>PRICING</div>
                                <div className="Text" style={{alignSelf: 'stretch', height: 100, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                    <div className="Pricingx" style={{alignSelf: 'stretch', color: '#4D4D4D', fontSize: 'clamp(10px, 3vw, 35px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Our pricing is personalized to meet your specific needs, ensuring the best value for your investment. Contact us today for a consultation and allow us to elevate your business to the next level!</div>
                                </div>
                                <div className="Button" style={{top:'90vh',height:'6vh',justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                    <div className="Label" style={{textAlign: 'center', color: '#FBFDFD', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word'}}>BOOK A CONSULTATION</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
        {desktopState === 'Homedesktop1' && (
        <App />
        )}
        {desktopState === 'Blog' && (
        <Blog />
        )}
        {desktopState === 'Contact' && (
        <Contact />
        )}

        <div className="Navmenudesktop" style={{width: '80vw', height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'inline-flex'}}>
            <div className="ListitemDesktopNa" style={{width: 'clamp(83px, 3vw, 16px)', height: '100%', paddingLeft: 18, paddingRight: 18, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 100, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleAboutClick()}>About Us</div>
            </div>
            <div className="ListitemDesktopNaActive" style={{zIndex:2,width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#FFD700', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'black', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleServicesClick()}>Services</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleBlogClick()}>Blog</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleContactClick()}>Contact</div>
            </div>
        </div>
    </div>
    
  );
}

export default Services;