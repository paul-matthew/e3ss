import React, { useState } from 'react';
import './App.css';
import App from './App'
import Services from './services'
import Contact from './contact'


function Blog() {
    const [desktopState,setDesktopState] = useState('Blog1');  

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
    
    <div className="BlogX" style={{width: '100vw', height: '100vh', right:'0'}}>
        {desktopState === 'Blog1' && (
        <div>
            <div className="BlogX" style={{width: '100vw', top:0,height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className="ComingSoon" style={{fontSize: 'clamp(30px, 10vw, 100px)', textAlign: 'center'}}>Coming Soon...</div>
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
        )}

        <div className="Navmenudesktop" style={{ width: '80vw', height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'inline-flex'}}>
            <div className="ListitemDesktopNa" style={{width: 'clamp(83px, 3vw, 16px)', height: '100%', paddingLeft: 18, paddingRight: 18, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 100, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleAboutClick()}>About Us</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleServicesClick()}>Services</div>
            </div>
            <div className="ListitemDesktopNaActive" style={{zIndex:2,width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#FFD700', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'black', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleBlogClick()}>Blog</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleContactClick()}>Contact</div>
            </div>
        </div> */}
    </div>
    
  );
}

export default Blog;