import React, { useState } from 'react';
import './App.css';
import About from './aboutus'

function App() {
  const [desktopState, setDesktopState] = useState('Homedesktop1');
  const [SeroverlayLeft, setOverlayLeft] = useState('50vw');
  const [ManoverlayLeft, setManOverlayLeft] = useState('0vw');
  const [BlogoverlayLeft, setBlogOverlayLeft] = useState('75vw');
  const [SerbuttonText, setSerButtonText] = useState('Services');
  const [BlogbuttonText, setBlogButtonText] = useState('Blog');
  const [displayState, setDisplayState] = useState('block');
  const [displayState2, setDisplayState2] = useState('1');
  
  const handleButtonClick = (newState) => {
    if (desktopState === 'Homedesktop1'){
        setDesktopState('Homedesktop3') //3 is Services
    }
    else if (desktopState === 'Homedesktop2'){
        setDesktopState('Homedesktop1')
    }
    else {
        setDesktopState('Homedesktop1')
    }
    // setDesktopState(newState);
    if (SeroverlayLeft === '50vw' && BlogoverlayLeft==='75vw') {
      setOverlayLeft('0vw');
      setManOverlayLeft('25vw');
      setTimeout(() => {
        setSerButtonText('About Us');
      }, 0); // Wait for 0.5s transition duration
    } else if (SeroverlayLeft === '0vw' && BlogoverlayLeft==='75vw') {
      setOverlayLeft('50vw');
      setManOverlayLeft('0vw');
      setTimeout(() => {
        setSerButtonText('Services');
      }, 0); // Wait for 0.5s transition duration
    }
    else{
        setOverlayLeft('50vw');
        setBlogOverlayLeft('75vw');
        setManOverlayLeft('0vw');
        setTimeout(() => {
          setSerButtonText('Services');
          setBlogButtonText('Blog');
        }, 0); // Wait for 0.5s transition duration
    }
  };

  const handleButton2Click = (newState) => {
    if (desktopState === 'Homedesktop1'){
        setDesktopState('Homedesktop2') //2 is blog
    }
    else if (desktopState === 'Homedesktop3'){
        setDesktopState('Homedesktop2')
    }
    else if (desktopState === 'Homedesktop2'){
        setDesktopState('Homedesktop3')
    }
    else {
        setDesktopState('Homedesktop1')
    }

    // setDesktopState(newState);
    if (BlogoverlayLeft === '75vw' && SeroverlayLeft==='50vw') {
      setOverlayLeft('0vw');
      setManOverlayLeft('50vw');
      setBlogOverlayLeft('25vw');
      setTimeout(() => {
        setSerButtonText('About Us');
        setBlogButtonText('Services');
      }, 0); // Wait for 0.5s transition duration
    } else if (BlogoverlayLeft === '75vw' && SeroverlayLeft==='0vw'){
      setManOverlayLeft('50vw');
      setBlogOverlayLeft('25vw');
      setTimeout(() => {
        setBlogButtonText('Services');
      }, 0);
     } // Wait for 0.5s transition duration
     else if (BlogoverlayLeft === '25vw' && SeroverlayLeft==='0vw'){
        setManOverlayLeft('25vw');
        setOverlayLeft('0vw');
        setBlogOverlayLeft('75vw');
        setTimeout(() => {
          setSerButtonText('About Us');
          setBlogButtonText('Blog');
        }, 0);
       } // Wait for 0.5s transition duration
      else {
        setOverlayLeft('50vw');
        setManOverlayLeft('0vw');
        setBlogOverlayLeft('75vw');
        setTimeout(() => {
          setSerButtonText('About Us');  
          setBlogButtonText('Blog');
        }, 0); // Wait for 0.5s transition duration
    }
  };
  
  
  const handleAboutClick = () => {
    // setOverlayLeft('200');
    // setBlogOverlayLeft('200vw');
    // setManOverlayLeft('200vw');
    setDisplayState('none');
    setDisplayState2('0');
    setDesktopState('AboutUs');
};
const handleHomeClick = () => {
  if (desktopState!='Homedesktop1'){
    setDisplayState('block');
    setDisplayState2('1');  
  }
  setDesktopState('Homedesktop1');
  setOverlayLeft('50vw');
  setBlogOverlayLeft('75vw');
  setManOverlayLeft('0vw');
};

  return (
    <div className="Homepage" style={{ width: '100vw', height: '100vh', position: 'relative', background: 'white', border: 'hidden red', overflow: 'hidden' }}>
        <div className="Navdesktop" style={{zIndex:2, position: 'absolute'}}>
            <div className="Navbanner" style={{width: '100vw', height:'10vh', left: 0, top: 0, position: 'absolute', background: '#0E0E0E'}} />
            <div className="Navlogo" style={{width: 99, height:'10vh', left: 39, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Logos" style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}onClick={() => handleHomeClick()}>
                    <img className="Logo1" style={{width: 'auto', height: '10vh'}} src="./logo1b.png" />
                </div>
            </div>
        </div>
          <div className="Rectangle158" style={{display:displayState, zIndex:1,width: '25vw', height: '15vh', left: SeroverlayLeft ,top: '70vh', position: 'absolute', background: 'rgba(217, 217, 217, 0.30)',transition: 'left 0.5s ease-in-out'}} />
          <div className="Rectangle158" style={{display:displayState,zIndex:1,width: '25vw', height: '15vh', left: BlogoverlayLeft ,top: '70vh', position: 'absolute', background: 'rgba(217, 217, 217, 0.30)',transition: 'left 0.5s ease-in-out' }} />
          {/* MAIN */}
          <div className="Overlay1" style={{display:displayState,zIndex:1, width: '50vw', height: '100vh', left: ManoverlayLeft, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)',transition: 'left 0.5s ease-in-out'}}></div>

          {/* Services */}
          <div className="Overlay2" style={{display:displayState,zIndex:1,width: '25vw', height: '100vh', left: SeroverlayLeft, top: 1, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)',transition: 'left 0.5s ease-in-out' }} />
          <div className="HoverOverlay2" style={{zIndex:displayState2,width: '25vw', height: '100vh', left: SeroverlayLeft, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', border: '1px #8C8484 solid', flexDirection: 'column', alignItems: 'center', gap: 8, display: 'inline-flex',transition: 'left 0.5s ease-in-out'}}>
            <div className="ButtonServices" style={{ display: displayState, position: 'absolute', marginTop: 0, height: '15vh', top: '70vh', textAlign: 'center', color: '#DED8D8', fontSize: 'clamp(12px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', zIndex: 1, letterSpacing: 3, wordWrap: 'break-word', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => handleButtonClick(desktopState)}>{SerbuttonText}</div>
          </div>

          {/* Blog */}
          <div className="Overlay2" style={{display:displayState,zIndex:1,width: '25vw', height: '100vh', left: BlogoverlayLeft, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)',transition: 'left 0.5s ease-in-out' }} />
          <div className="HoverOverlay3" style={{zIndex:displayState2,width: '25vw', height: '100vh', left: BlogoverlayLeft, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', borderLeft: '1px #8C8484 solid', borderTop: '1px #8C8484 solid', borderRight: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex',transition: 'left 0.5s ease-in-out' }}>
              <div className="ButtonBlog" style={{display:displayState,zIndex:1,color: '#DED8D8', position: 'absolute',height:'15vh',top:'70vh',textAlign:'center',fontSize: 'clamp(12px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word',display: 'flex', justifyContent: 'center', alignItems: 'center' }}onClick={() => handleButton2Click(desktopState)}>{BlogbuttonText}</div>
          </div>
      
      {desktopState === 'Homedesktop1' && (
        <div className='Homedesktop1' style={{left: 0, top: 0, position: 'absolute', border: '1px black solid'}}>
          <div className="Image" style={{width: '100vw', height: '100vh', left: '-2px', top: 0, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
              <img className="AboutMem2" style={{width: '100%', height: '100%', objectFit:'cover'}} src="./boardroom-bright.jpg" />
          </div>
            
          <div className="TextContent1" style={{border:'hidden red',height: '80vh', left: '3.5vw', top: '20vh', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
              <div className="Title" style={{width: '30vw', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'flex'}}>
                  <div className="Title" style={{color: 'white', fontSize: 'clamp(20px, 4vw, 54px)', fontFamily: 'Roboto', lineHeight: 1, wordWrap: 'break-word'}}>Community Minded Consulting Firm</div>
              </div>
              <div className="Lead" style={{width:'45vw',alignSelf: 'stretch', color: 'white', fontSize: 'clamp(20px, 4vw, 20px)', fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1.5, wordWrap: 'break-word'}}>E3 Strategic Solutions empowers organizations to reach their full potential</div>
              <div className="Button" style={{zIndex:2, maxHeight:40,paddingLeft: 20, paddingRight: 20, paddingTop: 0, paddingBottom: 0, background: '#5F5FB0', boxShadow: '4px 5px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '2px #3A3AC0 solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                  <div className="Label" style={{color: 'white', fontSize: 'clamp(20px, 4vw, 16px)', fontFamily: 'Roboto', fontWeight: '700', lineHeight: 1.5, letterSpacing: 1.0, wordWrap: 'break-word'}}onClick={() => handleAboutClick()}>ABOUT US</div>
              </div>
          </div>
          
        </div>
      )}
      {desktopState === 'Homedesktop2' && (
        <div className='Homedesktop2' style={{left: 0, top: 0, position: 'absolute', border: '1px black solid'}}>
          <div className="Image" style={{width: '100vw', height: '100vh', left: '-2px', top: 0, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
              <img className="AboutMem2" style={{width: '100%', height: '100%', objectFit:'cover'}} src="./boardroom.jpeg" />
          </div>
          {/* <div className="Rectangle158" style={{width: '50vw', height: 68, left: '0vw', top: '70vh', position: 'absolute', background: 'rgba(217, 217, 217, 0.30)'}} /> */}
          {/* <div className="Overlay2" style={{width: '25vw', height: '100vh', left: '0vw', top: 1, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}} />
          <div className="HoverOverlay2" style={{width: '25vw', height: '100vh', left: '0vw', top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', border: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
              <div className="ButtonAbout" style={{zIndex:1,position: 'absolute',marginTop:17,top:'70vh',textAlign: 'center', color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word'}}onClick={() => handleButtonClick('Homedesktop1')}>About Us</div>
          </div>
          <div className="Overlay1" style={{width: '50vw', height: '100vh', top: 0, left:'50vw',position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}}></div> */}
          
          <div className="TextContent1" style={{height: '50vh', paddingLeft:'0vw',left: '62.5vw', top: 132, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
              <div className="Title" style={{width: '30vw', height: 28, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'flex'}}>
                  <div className="Title" style={{color: 'white', fontSize: 54, fontFamily: 'Roboto', lineHeight: 1, wordWrap: 'break-word', textAlign: 'center'}}>Stay up to date with current intitiatives and valuable insights</div>
              </div>
              <div className="Button" style={{paddingLeft: 20, paddingRight: 20, paddingTop: 0, paddingBottom: 0, background: '#5F5FB0', boxShadow: '4px 5px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '2px #3A3AC0 solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                  <div className="Label" style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 4, letterSpacing: 1.60, wordWrap: 'break-word'}}>Read Blog</div>
              </div>
          </div>

          {/* <div className="Overlay2" style={{width: '25vw', height: '100vh', left: '25vw', top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}} />
          <div className="HoverOverlay3" style={{width: '25vw', height: '100vh', left: '25vw', top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', borderLeft: '1px #8C8484 solid', borderTop: '1px #8C8484 solid', borderRight: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
              <div className="ButtonServices" style={{zIndex:1,position: 'absolute',marginTop:17,top:'70vh', color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word'}}onClick={() => handleButtonClick('Homedesktop3')}>Services</div>
          </div> */}
        </div>
      )}
      {desktopState === 'Homedesktop3' && (
        <div className="Homedesktop3" style={{left: 0, top: 0, position: 'absolute', border: '1px black solid'}}>
          <div className="Image" style={{width: '100vw', height: '100vh', left: '-2px', top: 0, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
              <img className="AboutMem2" style={{width: '100%', height: '100%', objectFit:'cover'}} src="./planning.jpeg" />
          </div>
          {/* <div className="Rectangle158" style={{width: '25vw', height: 68, left: '0vw', top: '70vh', position: 'absolute', background: 'rgba(217, 217, 217, 0.30)'}} />
          <div className="Rectangle158" style={{width: '25vw', height: 68, left: '75vw', top: '70vh', position: 'absolute', background: 'rgba(217, 217, 217, 0.30)'}} /> */}
          {/* <div className="Overlay2" style={{width: '25vw', height: '100vh', left: '0vw', top: 1, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}} />
          <div className="HoverOverlay2" style={{width: '25vw', height: '100vh', left: '0vw', top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', border: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
              <div className="ButtonAbout" style={{zIndex:1,position: 'absolute',marginTop:17,top:'70vh', textAlign: 'center', color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word'}}onClick={() => handleButtonClick('Homedesktop1')}>About Us</div>
          </div> */}
          {/* <div className="Overlay1" style={{width: '50vw', height: '100vh', top: 0, left:'25vw',position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}}></div> */}
          
          <div className="TextContent1" style={{height: '50vh', paddingLeft:'0vw',left: '25vw', top: 132, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
              <div className="Title" style={{width: '50vw', height: 28, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'flex'}}>
                  <div className="Title" style={{color: 'white', fontSize: 54, fontFamily: 'Roboto', lineHeight: 1, wordWrap: 'break-word', textAlign: 'center'}}>Assessments & Strategic Planning to achieve your business objectives</div>
              </div>
              <div className="Button" style={{minWidth:210, paddingLeft: 20, paddingRight: 20, paddingTop: 0, paddingBottom: 0, background: '#5F5FB0', boxShadow: '4px 5px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '2px #3A3AC0 solid', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                  <div className="Label" style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 4, letterSpacing: 1.60, wordWrap: 'break-word'}}>OUR SERVICES</div>
              </div>
              <div className="Button" style={{minWidth:210,paddingLeft: 20, paddingRight: 20, paddingTop: 0, paddingBottom: 0, background: '#5F5FB0', boxShadow: '4px 5px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, border: '2px #3A3AC0 solid', justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                  <div className="Label" style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 4, letterSpacing: 1.60, wordWrap: 'break-word'}}>BOOK A CONSULTATION</div>
              </div>
          </div>

          {/* <div className="Overlay2" style={{width: '25vw', height: '100vh', left: '75vw', top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}} />
          <div className="HoverOverlay3" style={{width: '25vw', height: '100vh', left: '75vw', top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', borderLeft: '1px #8C8484 solid', borderTop: '1px #8C8484 solid', borderRight: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
              <div className="ButtonBlog" style={{zIndex:1,position: 'absolute',marginTop:17,top:'70vh', color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700',  letterSpacing: 3, wordWrap: 'break-word'}}onClick={() => handleButtonClick('Homedesktop2')}>Blog</div>
          </div> */}

        </div>
      )}
      {desktopState === 'AboutUs' && (
        <About />
      )}

    <div className="Footerdesktop" style={{zIndex:2, width: '100vw', height: 43, left: 0, bottom: '0vh', position: 'absolute', background: '#0E0E0E'}}>
      <div className="Footerprivacy" style={{height: 43, marginRight:20, right: '0vw', top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <div className="HeadingName" style={{height: 43,paddingTop: 0, paddingBottom: 0, justifyContent: 'center', alignItems: 'flex-start', gap: 20, display: 'flex'}}>
              <div className="HeaderMenuDefault" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                  <div className="Label" style={{color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Terms of Use</div>
              </div>
              <div className="MenuItemDefault" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                  <div className="Label" style={{color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Privacy</div>
              </div>
              <div className="MenuItemDefault" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                  <div className="Label" style={{color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Contact</div>
              </div>
              <div className="MenuItemDefault" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                  <div className="Label" style={{color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}><a href='https://www.pmdaybreak.com' style={{color:'white'}}>Web Design: PM Daybreak Designs</a></div>
              </div>
          </div>
      </div>
      <div className="Footercompany" style={{width: 358, height: 43, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <div className="HeadingName" style={{paddingTop: 9, paddingBottom: 10, paddingRight: 119, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
              <div className="MenuItemDefault" style={{alignSelf: 'stretch', paddingLeft: 20, paddingRight: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                  <div className="Label" style={{color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>E3 Strategic Solutions</div>
              </div>
          </div>
      </div>
    </div>

    <div className="Navmenudesktop" style={{zIndex:2, width: '80vw', height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'inline-flex'}}>
            <div className="ListitemDesktopNa" style={{width: 'clamp(83px, 3vw, 16px)', height: '100%', paddingLeft: 18, paddingRight: 18, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 100, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleAboutClick()}>About Us</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}>Services</div>
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

export default App;

