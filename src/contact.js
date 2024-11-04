import React, { useState, useEffect,useRef } from 'react';
import './App.css';
import App from './App.js'
import Services from './services.js'
import Blog from './blog.js'
import FadeInSection from './components/FadeIn.js';

function Contact() {
    const [desktopState] = useState('Contact1');  
    const [clientWidth, setClientWidth] = useState(window.innerWidth);
    const [subscribeEmail, setSubscribeEmail] = useState('');
    const [subscribeResponse, setSubscribeResponse] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [optIn, setOptIn] = useState(false);
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const modalRef = useRef(null);
    const smallScreen = clientWidth <= 640;

    // const handleAboutClick = () => {
    //     setDesktopState('AboutUs');
    //   };
    //   const handleServicesClick = () => {
    //     setDesktopState('Services');
    //   };
    //   const handleBlogClick = () => {
    //     setDesktopState('Blog');
    //   };

      React.useEffect( () => {
        const handleResize = () => {
          setClientWidth(window.innerWidth)
        }
    
        window.addEventListener("resize", handleResize)
    
        return () => {
        window.removeEventListener("resize", handleResize)
    
        }
      }, [])

          useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalOpen(false);
            }
        };

        if (modalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalOpen]);

      let fetchURL = "https://e3ss-cdf4950cc20d.herokuapp.com/subscribe";
      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
          fetchURL = "http://localhost:5000/subscribe";
      }
  
      const handleSubscribe = async (event) => {
        event.preventDefault();

        if (!optIn || !privacyAccepted) {
            setSubscribeResponse('You must agree to the terms and conditions.');
            return;
        }

        try {
            const response = await fetch(fetchURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: subscribeEmail }),
            });

            if (!response.ok) {
                throw new Error('Failed to subscribe. Please try again.');
            }

            const data = await response.json();
            setSubscribeResponse(data.message);
        } catch (error) {
            console.error('Error:', error);
            setSubscribeResponse('An error occurred. Please try again.');
        }
    };
  
      let contactFetchURL = "https://e3ss-cdf4950cc20d.herokuapp.com/contact";
      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
          contactFetchURL = "http://localhost:5000/contact";
      }
  
      const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            message: event.target.message.value,
        };

        try {
            const response = await fetch(contactFetchURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message. Please try again.');
            }

            const data = await response.json();
            console.log('Success:', data);
            alert('Email sent successfully!');
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

  
  return (
    
    <div className="ContactX" style={{width: '100%', height: '100vh', right:'0',backgroundColor:'#f0ece7'}}>
        <div id='NavlogoMobile'><img src='./logo-new5.png' alt='logo mobile'style={{height:'5vh',marginTop:'1.5vh'}}onClick={() => window.location.href = './'}/></div>
        <FadeInSection>
        {desktopState === 'Contact1' && (
            <div className="ContactX Contact2" style={{width: '100%', height: 'auto', top: "1vh", display: 'flex', justifyContent: 'center', alignItems: 'center', position: "absolute"}}>
                <form className="ContactForm" style={{width: '70%',minHeight:'60vh',pmargin:'10px', border:'solid gray'}}onSubmit={handleSubmit}>
                    <p className='contact-title' style={{ margin: "10px auto", textAlign: "center", color: 'black', fontSize: 'clamp(16px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700'}}>Contact Us</p>
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
                        <textarea id="message" name="message" rows="5" placeholder={ smallScreen ? "Message": "Enter your message"} required style={{minHeight:'20vh'}}></textarea>
                    </div>
                    <div className="FormGroup last-form-group" >
                        <button className='Button' type="submit"><div className='Label'>Submit</div></button>
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
        </FadeInSection>
        <div
            style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30px",
            width: "100%",
            }}
        >
            <button
                className="subscribe-button"
                style={{position: 'absolute',top: '12vh',zIndex: 1,backgroundColor: 'red', color: 'white',padding: '10px 10px',cursor: 'pointer',border: 'solid 1px black',borderRadius: '15px'}}
                onClick={() => setModalOpen(true)}
            >
                Subscribe
            </button>
            {modalOpen && (
            <div className="modal" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10
            }}>
                <div className="modal-content" ref={modalRef} style={{
                    background: `url('./newsletter.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                    padding: '20px',
                    borderRadius: '10px',
                    width: '90%',
                    maxWidth: '500px',
                    height: '80vh',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    alignItems: 'center',
                    position: 'relative',
                }}>
                    <h2 style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '5px',
                        padding: '10px 15px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        margin: '0 0 15px',
                        fontWeight: 'bold',
                        fontSize: 'clamp(16px, 4vw, 24px)',
                        textAlign: 'center',
                        width:'100%'
                    }}>Subscribe to my Newsletter</h2>
                    <p style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '5px',
                        padding: '10px 15px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        fontSize: 'clamp(12px, 2vw, 16px)',
                        textAlign: 'center',
                        margin: '0 0 20px'
                    }}>Stay up to date with my content focusing on public policy, and everything else E3 Strategic Solutions.</p>
                    <form onSubmit={handleSubscribe} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <input
                            type="email"
                            id="newsletter-email"
                            placeholder="Enter your email"
                            required
                            style={{
                                maxWidth: '400px',
                                minWidth: '100%',
                                padding: '10px',
                                marginBottom: '15px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                            }}
                            value={subscribeEmail}
                            onChange={(e) => setSubscribeEmail(e.target.value)}
                        />
                        <div style={{
                            width: '100%',
                            background: 'rgba(255, 255, 255, 0.9)',
                            borderRadius: '5px',
                            padding: '10px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                            marginBottom: '15px'
                        }}>
                            <label style={{
                                display: 'block',
                                marginBottom: '10px',
                                fontSize: 'clamp(12px, 2vw, 16px)'
                            }}>
                                <input
                                    type="checkbox"
                                    checked={optIn}
                                    onChange={(e) => setOptIn(e.target.checked)}
                                    required
                                    style={{ marginRight: '8px' }}
                                />
                                {' I agree to receive emails and confirm my subscription.'}
                            </label>
                            <label style={{
                                display: 'block',
                                fontSize: 'clamp(12px, 2vw, 16px)'
                            }}>
                                <input
                                    type="checkbox"
                                    checked={privacyAccepted}
                                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                                    required
                                    style={{ marginRight: '8px' }}
                                />
                                {' I have read and accept the '}
                                <a href="/terms" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>Privacy Policy</a>
                            </label>
                        </div>
                        <button className='btn' type="submit" style={{
                            backgroundColor: '#007BFF',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                            cursor: 'pointer',
                            fontSize: 'clamp(16px, 2vw, 18px)'
                        }}>Subscribe</button>
                    </form>
                    <div id="response" style={{ marginTop: '15px', color: 'white' }}>{subscribeResponse}</div>
                    <button className='news-close' onClick={() => setModalOpen(false)} style={{
                        position: 'absolute',
                        color: 'black',
                        top: '10px',
                        right: '10px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        fontSize: '24px',
                        cursor: 'pointer'
                    }}>
                        &times;
                    </button>
                </div>
            </div>
            )}
        </div>
        


        {/* <div className="Navmenudesktop" style={{ width: '80vw', height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'inline-flex', paddingLeft: "calc(100vw - 100%)"}}>
            <div className="ListitemDesktopNa" style={{width: 115, height: '100%', paddingLeft: 18, paddingRight: 18, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 100, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleAboutClick()}>About Us</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleServicesClick()}>Services</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleBlogClick()}>Blog</div>
            </div>
            <div className="ListitemDesktopNaActive" style={{zIndex:2,width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: 'rgb(130, 117, 78)', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}>Contact</div>
            </div>
        </div> */}
    </div>
    
  );
}

export default Contact;