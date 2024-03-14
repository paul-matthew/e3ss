import React, { useState } from 'react';
import './App.css';
import App from './App'
import Services from './services'
import Blog from './blog'

function Contact() {
    const [desktopState,setDesktopState] = useState('Contact1');  
    const [clientWidth, setClientWidth] = useState(window.innerWidth);

    const smallScreen = clientWidth <= 640;

    const handleAboutClick = () => {
        setDesktopState('AboutUs');
      };
      const handleServicesClick = () => {
        setDesktopState('Services');
      };
      const handleBlogClick = () => {
        setDesktopState('Blog');
      };

      React.useEffect( () => {
        const handleResize = () => {
          setClientWidth(window.innerWidth)
        }
    
        window.addEventListener("resize", handleResize)
    
        return () => {
        window.removeEventListener("resize", handleResize)
    
        }
      }, [])
  
  return (
    
    <div className="ContactX" style={{width: '100%', height: '100vh', right:'0'}}>
        {desktopState === 'Contact1' && (
            <div className="ContactX" style={{width: '100%', height: 'auto', top: "5vh", display: 'flex', justifyContent: 'center', alignItems: 'center', position: "absolute"}}>
                <div className="Frame1" style={{width:'auto',left:'0px',height:'auto',position:'relative',flex: '1 1 0', alignSelf: 'stretch', paddingLeft: "5vw", paddingRight: "5vw", display: "none"}}>
                    <div className="E3StrategicSolutions" style={{alignSelf: 'stretch', color: 'black', fontSize: 'clamp(30px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>CONTACT</div>
                    <div className="Text" style={{alignSelf: 'stretch', height: 0, width: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'none'}}>
                    </div>
                </div>
                <form className="ContactForm" style={{width: '70%',paddingRight:'50px', border:'solid gray'}}>
                    <p className='contact-title' style={{ margin: "10px auto", textAlign: "center", fontSize: "30px"}}>Contact Us</p>
                    <div className="FormGroup">
                        <label htmlFor="name" style={{ display: smallScreen ? "none": "block"}}>Name</label>
                        <input type="text" id="name" name="name" placeholder={ smallScreen ? "Name": "Enter your name"} required />
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="email" style={{ display: smallScreen ? "none": "block"}}>Email</label>
                        <input type="email" id="email" name="email" placeholder={ smallScreen ? "Email": "Enter your email"} required />
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="message" style={{ display: smallScreen ? "none": "block"}}>Message</label>
                        <textarea id="message" name="message" rows="5" placeholder={ smallScreen ? "Message": "Enter your message"} required></textarea>
                    </div>
                    <div className="FormGroup last-form-group" >
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

        <div className="Navmenudesktop" style={{ width: '80vw', height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'inline-flex', paddingLeft: "calc(100vw - 100%)"}}>
            <div className="ListitemDesktopNa" style={{width: 115, height: '100%', paddingLeft: 18, paddingRight: 18, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 100, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleAboutClick()}>About Us</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleServicesClick()}>Services</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleBlogClick()}>Blog</div>
            </div>
            <div className="ListitemDesktopNaActive" style={{zIndex:2,width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#3b3b7a', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}>Contact</div>
            </div>
        </div>
    </div>
    
  );
}

export default Contact;