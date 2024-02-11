import React, { useState } from 'react';
import './App.css';
import App from './App'

function Services() {
    const [desktopState] = useState('Services1');
  
  return (
    
    <div className="Services" style={{width: '100vw', height: '100vh', right:'0', position: 'relative', background: 'white'}}>
        {desktopState === 'Services1' && (
        <div>
            <div className="Services" style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
                <div className="Servicesdesktop" style={{width: '100vw', height: '100vh', left: 0, top: '35vh', position: 'absolute', background: 'white', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', gap: 44, display: 'inline-flex'}}>
                    <div className="Home" style={{height: 259, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 124, display: 'inline-flex'}}>
                        <div className="IntroSection" style={{alignSelf: 'stretch', height: 259, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                            <div className="Frame1" style={{flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 60, paddingRight: 60, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 45, display: 'inline-flex'}}>
                                <div className="Services" style={{alignSelf: 'stretch', color: 'black', fontSize: 'clamp(10px, 3vw, 64px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Services</div>
                                <div className="Text" style={{alignSelf: 'stretch', height: 100, width:'100vw', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                    <div className="CardTextz" style={{alignSelf: 'stretch', color: '#4D4D4D', paddingRight:'70px',fontSize: 'clamp(10px, 3vw, 35px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Our professional services will help align your business with your strategic goals.  We have over 20 years of experience providing extensive services for various organizations.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Body" style={{height: 644.38, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 48, display: 'inline-flex'}}>
                        <div className="Servicecards1">
                            <div className="Frame2230">
                                <div className="Servicecard">
                                    <div className="Group1">
                                        <div className="Rectangle1" />
                                        <div className="CardImage">
                                            <img className="UnsplashDuxrc8vt5wq" src="./boardroom-brightwider.jpg" />
                                        </div>
                                    </div>
                                    <div className="CardTextx">Assessments include state analysis and an implementation roadmap.</div>
                                    <div className="Group5">
                                        <div className="Rectangle161" />
                                        <div className="TitleSer">Assessments</div>
                                    </div>
                                    <div className="Button">
                                        <div className="ReadMore">READ MORE</div>
                                    </div>
                                </div>
                                <div className="Servicecard">
                                    <div className="Group1">
                                        <div className="Rectangle1" />
                                        <div className="CardImage">
                                            <img className="UnsplashDuxrc8vt5wq" src="./boardroom-brightwider.jpg" />
                                        </div>
                                    </div>
                                    <div className="CardTextx">Assessments include state analysis and an implementation roadmap.</div>
                                    <div className="Group5">
                                        <div className="Rectangle161" />
                                        <div className="TitleSer">Assessments</div>
                                    </div>
                                    <div className="Button">
                                        <div className="ReadMore">READ MORE</div>
                                    </div>
                                </div>
                                <div className="Servicecard">
                                    <div className="Group1">
                                        <div className="Rectangle1" />
                                        <div className="CardImage">
                                            <img className="UnsplashDuxrc8vt5wq" src="./boardroom-brightwider.jpg" />
                                        </div>
                                    </div>
                                    <div className="CardTextx">Assessments include state analysis and an implementation roadmap.</div>
                                    <div className="Group5">
                                        <div className="Rectangle161" />
                                        <div className="TitleSer">Assessments</div>
                                    </div>
                                    <div className="Button">
                                        <div className="ReadMore">READ MORE</div>
                                    </div>
                                </div>
                                <div className="Servicecard">
                                    <div className="Group1">
                                        <div className="Rectangle1" />
                                        <div className="CardImage">
                                            <img className="UnsplashDuxrc8vt5wq" src="./boardroom-brightwider.jpg" />
                                        </div>
                                    </div>
                                    <div className="CardTextx">Assessments include state analysis and an implementation roadmap.</div>
                                    <div className="Group5">
                                        <div className="Rectangle161" />
                                        <div className="TitleSer">Assessments</div>
                                    </div>
                                    <div className="Button">
                                        <div className="ReadMore">READ MORE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="IntroSection" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                            <div className="Frame1" style={{flex: '1 1 0', height: 320, paddingLeft: 60, paddingRight: 60, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 45, display: 'inline-flex'}}>
                                <div className="Pricing" style={{alignSelf: 'stretch', color: 'black', fontSize: 'clamp(10px, 3vw, 64px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Pricing</div>
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

        <div className="Navmenudesktop" style={{zIndex:2, width: '80vw', height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'inline-flex'}}>
            <div className="ListitemDesktopNa" style={{width: 'clamp(83px, 3vw, 16px)', height: '100%', paddingLeft: 18, paddingRight: 18, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 100, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}>About Us</div>
            </div>
            <div className="ListitemDesktopNaActive" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#FFD700', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'black', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}>Services</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}>Blog</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}>Contact</div>
            </div>
        </div>
    </div>
    
  );
}

export default Services;