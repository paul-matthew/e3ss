import React, { useState } from 'react';
import './App.css';
import App from './App'
import Blog from './blog'
import Contact from './contact'
import Modal from './modal'
import ServicesMobile from './components/ServicesMobile';


function Services() {
    const [desktopState,setDesktopState] = useState('Services1');  
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    // const handleAboutClick = () => {
    //     setDesktopState('AboutUs');
    //   };
    //   const handleServicesClick = () => {
    //     setDesktopState('Services');
    //   };
    //   const handleBlogClick = () => {
    //     setDesktopState('Blog');
    //   };
      const handleContactClick = () => {
        setDesktopState('Contact');
      };



      const services = [
        { 
            title: "Current State Assessments", 
            description: "These include a comprehensive evaluation of an organization’s existing conditions, operations, and performance.",
            image:'./assessments.jpg',
            description2: (
                <div>
                    <p>Our Assessments service provides a comprehensive evaluation of your organization's current state, identifying key areas of strength and areas for improvement. Through rigorous analysis and data-driven methodologies, we deliver actionable insights to drive strategic decision-making and organizational growth.</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>State Analysis: Thorough assessment of your organization's operational, financial, and strategic performance.</li>
                        <li>SWOT Analysis: Identification of strengths, weaknesses, opportunities, and threats impacting your business.</li>
                        <li>Strategic Recommendations: Data-driven recommendations and actionable insights to optimize business processes and enhance performance.</li>
                    </ul>
                </div>
            )
        },
        { 
            title: "Organizational Audits", 
            description: "Detailed audits of your organization.",
            image:"./audits.jpg",
            description2: (
                <div>
                    <p>Our Organization Audits service offers a detailed examination of your organization's structure, processes, and performance to identify areas for improvement and operational efficiencies.</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Operational Audits: Evaluation of your organization's day-to-day operations and processes.</li>
                        <li>Financial Audits: Review of financial statements, budgets, and financial controls.</li>
                        <li>Compliance Audits: Assessment of compliance with industry regulations and standards.</li>
                    </ul>
                </div>
            )
        },
        { 
            title: "Program Evaluation", 
            description: "Comprehensive analysis that is used to maintain effective program.",
            image:"./groupmeeting1.png",
            description2: (
                <div>
                    <p>Our Program Evaluation service provides a comprehensive analysis of your organization's programs and initiatives to assess their effectiveness and impact. Through thorough evaluation and data analysis, we help you make informed decisions to improve program outcomes and maximize results.</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Performance Measurement: Evaluation of program performance against predefined objectives and benchmarks.</li>
                        <li>Outcome Assessment: Analysis of program outcomes and impact on target beneficiaries or stakeholders.</li>
                        <li>Recommendation Development: Identification of strategies and recommendations for program improvement and optimization.</li>
                    </ul>
                </div>
            )
        },
        { 
            title: "Strategic Plan", 
            description: "A plan for strategic guidance that outlines your organization’s goals, objectives, and strategies for achieving long-term success.",
            image:"./busyboardroom.jpg",
            description2: (
                <div>
                    <p>Our Strategic Plan service helps your organization develop a clear and actionable roadmap to achieve its long-term goals and objectives. Through a collaborative process, we work with you to define your vision, identify strategic priorities, and establish measurable targets for success.</p>
                    <p><strong>Key Components:</strong></p>
                    <ul>
                        <li>Vision and Mission: Defining the organization's purpose, values, and long-term aspirations.</li>
                        <li>Strategic Goals: Identifying high-level strategic objectives and priorities to guide decision-making.</li>
                        <li>Action Plans: Developing detailed action plans with specific initiatives, timelines, and responsible parties.</li>
                    </ul>
                </div>
            )
        },
    ];
    

    const handleReadMoreClick = (service) => {
        setSelectedService(service);
        setShowModal(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedService(null);
        document.body.classList.remove('modal-open');
    };
    const handleBackgroundClick = (event) => {
        // Close modal if the clicked element is the modal background, not the content
        if (event.target === event.currentTarget) {
            handleCloseModal();
        }
      };
  
  return (
    <>
    <div className="Services" style={{width: '100%', height: '100vh', right:'0', position: 'relative', background: '#f0ece7'}}>
        {desktopState === 'Services1' && (
        <div>
            <div className="Servicesx" style={{width: '100%', position: 'relative', background: 'white',top: '100px'}}>
                <div className="Servicesdesktop" style={{width: '100%',  left: 0, top: "1vh", position: 'absolute', background: '#f0ece7', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', gap: 1, display: 'inline-flex'}}>
                    <div className="Home" style={{height: '13rem', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 124, display: 'inline-flex'}}>
                        <div className="IntroSection" style={{alignSelf: 'stretch', height: 259, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                            <div className="Frame1" style={{alignSelf: 'stretch', paddingLeft: 50, paddingRight: 60, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
                                <div className="E3StrategicSolutions" style={{alignSelf: 'stretch', color: 'black', fontSize: 'clamp(16px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>SERVICES</div>
                                <div className="Text" style={{alignSelf: 'stretch',  width:'100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                    <div className="CardTextz" style={{alignSelf: 'stretch', color: '#4D4D4D', paddingRight:'70px',fontSize: 'clamp(10px, 3vw, 35px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Our professional services will help align your business with your strategic goals.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="BodyX" style={{maxWidth:'100%',flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 48, display: 'inline-flex'}}>
                        <div className="Servicecards1" >
                            <div className="Frame2230"style={{position:'relative',}}>
                                <div className="Servicecards1">
                                    <div className="Frame2230">
                                        {services.map((service, index) => (
                                        <div className="Servicecard" key={index}style={{position:'relative',backgroundColor:'white',border:'black 2px solid'}}>
                                            <div className="CardImage">
                                                <img className="cardpic" style={{maxHeight:'160px', opacity:'80%'}} src={`./${service.image}`} alt={service.title} />
                                            </div>
                                            <div className="CardTitle">
                                                <div className="TitleSer">{service.title}</div>
                                            </div>
                                            <div className="CardTextx" style={{paddingLeft:'20px',paddingRight:'30px'}}>{service.description}</div>
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
                                {showModal && (
                                <div className="background-overlay" onClick={handleBackgroundClick}>
                                    <Modal onClose={handleCloseModal} service={selectedService} />
                                </div>
                                )}                            
                            </div>
                        </div>
                        <div className="IntroSection" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex',backgroundColor:'#f0ece7', marginTop:'70px'}}>
                        <div className="Frame1" style={{flex: '1 1 0', alignSelf: 'stretch', paddingLeft: 50, paddingRight: 60, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
                            <div className="E3StrategicSolutions" style={{alignSelf: 'stretch', color: 'black', fontSize: 'clamp(16px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>PRICING</div>
                                <div className="Text" style={{alignSelf: 'stretch', height: 100, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                                    <div className="Pricingx" style={{alignSelf: 'stretch', color: '#4D4D4D', fontSize: 'clamp(10px, 3vw, 35px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>Our pricing is personalized to meet your specific needs, ensuring the best value for your investment. Contact us today for a consultation and allow us to elevate your business to the next level!</div>
                                </div>
                                <div className="Button book-consultation" style={{justifyContent: 'center', alignItems: 'center',marginTop:'20px', display: 'inline-flex'}}>
                                    <div className="Label" style={{textAlign: 'center', color: '#FBFDFD', fontSize: 'clamp(10px, 3vw, 20px)', fontFamily: 'Roboto', fontWeight: '600', letterSpacing: 3, wordWrap: 'break-word'}}onClick={() => handleContactClick()}>BOOK A CONSULTATION</div>
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

        {/* <div className="Navmenudesktop" style={{width: '80vw', height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'inline-flex'}}>
            <div className="ListitemDesktopNa" style={{width: 115, height: '100%', paddingLeft: 18, paddingRight: 18, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 100, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleAboutClick()}>About</div>
            </div>
            <div className="ListitemDesktopNaActive" style={{zIndex:2,width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: 'rgb(130, 117, 78)', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleServicesClick()}>Services</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleBlogClick()}>Blog</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleContactClick()}>Contact</div>
            </div>
        </div> */}
    </div>
    <ServicesMobile />
    </>
  );
}

export default Services;