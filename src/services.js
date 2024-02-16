import React, { useState } from 'react';
import './App.css';
import App from './App'
import Blog from './blog'
import Contact from './contact'


function Services() {
    const [desktopState,setDesktopState] = useState('Services1');  
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

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

      const Modal = ({ onClose, service }) => {
        return (
        // <div class="portfolio-modal modal fade" id="serviceitem1" tabindex="-1" role="dialog" aria-hidden="true">
        //     <div class="modal-dialog">
        //         <div class="modal-content">
        //             <div class="close-modal p-2" data-bs-dismiss="modal"><img src="images/close-icon.svg" alt="Close modal" /></div>
        //             <div class="container">
        //                 <div class="row justify-content-center">
        //                     <div class="col-lg-12">
        //                         <div class="modal-body">
        //                             <!-- Project details-->
        //                             <h2 class="text-uppercase">Lifting Code Luxury Facial</h2>
        //                             <img class="img-fluid d-block mx-auto" src="images/brochure/TREATMENT_2.jpg" alt="Luxury Facial" />
        //                             <p class="card-text">For a lifted and re plumped look. This treatment works on 
        //                               minimizing all types of lines and wrinkles, this luxury facial 
        //                               treatment is specially designed to improve skins hydration 
        //                               levels, skin tone and firmness, formulas with highly 
        //                               concentrated natural collagen and hyaluronic acid outline 
        //                               the profile of face and neck.</p>
        //                             <span class="px-1 price">Price: $189</span>
        //                             <span class="px-1 price" style="font-weight:normal">70 mins</span>
        //                             <a style="float: none;" target="_blank" href="https://booking.setmore.com/scheduleappointment/35bbcd9a-2c93-4660-90df-9873ef5c488d/services/bbd4c531-ef0c-44a6-8066-4f8e62218665?source=easyshare"><img border="none" src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Settings/book-now-blue.svg" alt="Book an appointment with Paul M using Setmore"/></a>
        //                             <div style="padding-top: 2rem"></div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

          <div className="portfolio-modal fade modal" style={{border:"solid gray 4px", scrollBehavior:'', background:'gray',width:'90vw',top:'10%',left:'5vw',height:'80vh',position:'fixed', display:'flex', justifyContent: '', alignItems: '',zIndex:'6'}}>
            <div className="modal-content">
                <div style={{margin:'15px'}}>
                    <span className="close" style={{cursor:'pointer', fontSize:'40px', display:'flex',position:'absolute', right:20 }}onClick={onClose}>&times;</span>
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                </div>
                    <img src={service.image}></img>
            </div>
          </div>
        );
      };


    const services = [
        { title: "Assessments", description: "Assessments include state analysis and an implementation roadmap.",image:'./boardroom-queenst2.jpg' },
        { title: "Organization Audits", description: "Detailed audits of your organization.",image:"./boardroom-queenst.jpg" },
        { title: "Program Evaluation", description: "Comprehensive analysis that is used to maintain an effectiveness program",image:"./groupmeeting.jpeg" },
        { title: "Strategic Plan", description: "Stragetic Plan for your organization",image:"./boardroom-queenst.jpg" },

        // Add more services as needed
    ];

    const handleReadMoreClick = (service) => {
        setSelectedService(service);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedService(null);
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
                    <div className="BodyX" style={{maxWidth:'100vw',flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'inline-flex'}}>
                        <div className="Servicecards1" >
                            <div className="Frame2230"style={{position:'relative',right:"5%",}}>
                                <div className="Servicecards1">
                                    <div className="Frame2230">
                                        {services.map((service, index) => (
                                        <div className="Servicecard" key={index}>
                                            <div className="CardImage">
                                            <img className="cardpic" src={`./${service.image}`} alt={service.title} />
                                            </div>
                                            <div className="CardTextx">{service.description}</div>
                                            <div className="Group5">
                                            <div className="TitleSer">{service.title}</div>
                                            </div>
                                            <div className="Button">
                                            <div className="ReadMore" onClick={() => handleReadMoreClick(service)}>READ MORE</div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                {/* <div className="Servicecard">
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
                                </div> */}
                                {showModal && <Modal onClose={handleCloseModal} service={selectedService} />}
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