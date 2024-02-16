import React, { useState } from 'react';
import './App.css';
import App from './App'
import Services from './services'
import Blog from './blog'

function Contact() {
    const [desktopState,setDesktopState] = useState('Contact1');  

    const handleAboutClick = () => {
        setDesktopState('AboutUs');
      };
      const handleServicesClick = () => {
        setDesktopState('Services');
      };
      const handleBlogClick = () => {
        setDesktopState('Blog');
      };
  
  return (
    
    <div className="ContactX" style={{width: '100vw', height: '100vh', right:'0'}}>
        {desktopState === 'Contact1' && (
            <div className="ContactX" style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',paddingBottom:'250px'}}>
                <div className="Frame1" style={{width:'90vw',left:'0px',height:'100px',position:'absolute',flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 50, paddingRight: 60, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
                    <div className="E3StrategicSolutions" style={{alignSelf: 'stretch', color: 'black', fontSize: 'clamp(16px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>CONTACT</div>
                    <div className="Text" style={{alignSelf: 'stretch', height: 100, width:'100vw', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                    </div>
                </div>
                <form className="ContactForm" style={{width: '80%', width: '80vw',paddingRight:'50px', border:'solid gray'}}>
                    <div className="FormGroup">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
                    </div>
                    <div className="FormGroup">
                        <button type="submit">Submit</button>
                    </div>
                </form>
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

        <div className="Navmenudesktop" style={{ width: '80vw', height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'inline-flex'}}>
            <div className="ListitemDesktopNa" style={{width: 'clamp(83px, 3vw, 16px)', height: '100%', paddingLeft: 18, paddingRight: 18, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 100, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleAboutClick()}>About Us</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleServicesClick()}>Services</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleBlogClick()}>Blog</div>
            </div>
            <div className="ListitemDesktopNaActive" style={{zIndex:2,width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#FFD700', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'black', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}>Contact</div>
            </div>
        </div>
    </div>
    
  );
}

export default Contact;