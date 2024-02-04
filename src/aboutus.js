import React, { useState } from 'react';
import './App.css';
import App from './App'

function About() {
    const [desktopState, setDesktopState] = useState('About1');
  
  return (
    
    <div className="AboutUs" style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>
        {desktopState === 'About1' && (
        <div>
            <div className="ListitemDesktopNa" style={{width: 207, height: 64, paddingLeft: 38, paddingRight: 38, paddingTop: 20, paddingBottom: 20, left: 1057, top: 17, position: 'absolute', background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 24, letterSpacing: 2, wordWrap: 'break-word'}}>Services</div>
            </div>
            <div className="Aboutus" style={{width: 1700, height: 845, left: 0, top: 99, position: 'absolute', background: 'white'}}>
                <div className="Footerdesktop" style={{width: 1700, height: 43, left: 0, top: 3795, position: 'absolute', background: '#0E0E0E'}}>
                    <div className="Footerbanner" style={{width: 1699, height: 43, left: 0, top: 0, position: 'absolute', background: '#0E0E0E'}} />
                    <div className="Footerprivacy" style={{width: 356, height: 43, left: 672, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div className="HeadingName" style={{paddingTop: 9, paddingBottom: 9, justifyContent: 'center', alignItems: 'flex-start', gap: 50, display: 'flex'}}>
                            <div className="HeaderMenuDefault" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div className="Label" style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Terms of Use</div>
                            </div>
                            <div className="MenuItemDefault" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div className="Label" style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Privacy</div>
                            </div>
                            <div className="MenuItemDefault" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div className="Label" style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Contact</div>
                            </div>
                        </div>
                    </div>
                    <div className="Footercompany" style={{width: 358, height: 43, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                        <div className="HeadingName" style={{paddingTop: 9, paddingBottom: 10, paddingRight: 119, justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div className="MenuItemDefault" style={{alignSelf: 'stretch', paddingLeft: 20, paddingRight: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
                                <div className="Label" style={{color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>E3 Strategic Solutions</div>
                            </div>
                        </div>
                    </div>
                    <div className="Footertag" style={{width: 356, height: 42, left: 1343, top: 1, position: 'absolute'}} />
                    <div className="HeadingName" style={{width: 372, height: 43, paddingLeft: 20, paddingRight: 20, paddingTop: 9, paddingBottom: 9, left: 1327, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 10, display: 'inline-flex'}}>
                        <div className="HeaderMenuDefault" style={{paddingLeft: 10, paddingRight: 10, justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
                            <div className="Label" style={{textAlign: 'right', color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Web Design: PM Daybreak Designs</div>
                        </div>
                    </div>
                </div>
                <div className="Testimonial" style={{height: 675.52, paddingLeft: 85.33, paddingRight: 85.33, paddingTop: 20, paddingBottom: 20, left: 0, top: 2904, position: 'absolute', background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 106.67, display: 'inline-flex'}}>
                    <div className="SectionTitle" style={{alignSelf: 'stretch', height: 130.33, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 21.33, display: 'flex'}}>
                        <div className="ClientsFeedback" style={{width: 746.67, color: '#282938', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Clients Feedback</div>
                        <div className="CustomerTestimonials" style={{width: 746.67, color: '#282938', fontSize: 64, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 76.80, wordWrap: 'break-word'}}>Customer testimonials</div>
                    </div>
                    <div className="Content" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 42.67, display: 'inline-flex'}}>
                        <div className="Column" style={{flex: '1 1 0', padding: 42.67, borderRadius: 8, overflow: 'hidden', border: '1.33px #5F5FB0 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 42.67, display: 'inline-flex'}}>
                            <div className="Stars" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5.33, display: 'inline-flex'}}>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                            </div>
                            <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInErosElementumTristiqueDuisCursusMiQuisViverra" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</div>
                            <div className="Avatar" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 21.33, display: 'inline-flex'}}>
                                <img className="AvatarImage" style={{width: 74.67, height: 74.67, borderRadius: 9999}} src="https://via.placeholder.com/75x75" />
                                <div className="AvatarContent" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div className="DianneRussell" style={{color: '#282938', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Dianne Russell</div>
                                    <div className="Starbucks" style={{color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Starbucks</div>
                                </div>
                            </div>
                        </div>
                        <div className="Column" style={{flex: '1 1 0', padding: 42.67, borderRadius: 8, overflow: 'hidden', border: '1.33px #5F5FB0 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 42.67, display: 'inline-flex'}}>
                            <div className="Stars" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5.33, display: 'inline-flex'}}>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                            </div>
                            <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInErosElementumTristiqueDuisCursusMiQuisViverra" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</div>
                            <div className="Avatar" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 21.33, display: 'inline-flex'}}>
                                <img className="AvatarImage" style={{width: 74.67, height: 74.67, borderRadius: 9999}} src="https://via.placeholder.com/75x75" />
                                <div className="AvatarContent" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div className="KristinWatson" style={{color: '#282938', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Kristin Watson</div>
                                    <div className="LouisVuitton" style={{color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Louis Vuitton</div>
                                </div>
                            </div>
                        </div>
                        <div className="Column" style={{flex: '1 1 0', padding: 42.67, borderRadius: 8, overflow: 'hidden', border: '1.33px #5F5FB0 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 42.67, display: 'inline-flex'}}>
                            <div className="Stars" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5.33, display: 'inline-flex'}}>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                            </div>
                            <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInErosElementumTristiqueDuisCursusMiQuisViverra" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</div>
                            <div className="Avatar" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 21.33, display: 'inline-flex'}}>
                                <img className="AvatarImage" style={{width: 74.67, height: 74.67, borderRadius: 9999}} src="https://via.placeholder.com/75x75" />
                                <div className="AvatarContent" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div className="KathrynMurphy" style={{color: '#282938', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Kathryn Murphy</div>
                                    <div className="McdonaldS" style={{color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>McDonald's</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Blog" style={{height: 892.67, paddingLeft: 85.33, paddingRight: 85.33, paddingTop: 20, paddingBottom: 20, left: 0, top: 1753, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 106.67, display: 'inline-flex'}}>
                    <div className="SectionHeader" style={{width: 1615, justifyContent: 'flex-start', alignItems: 'center', gap: 106.67, display: 'inline-flex'}}>
                        <div className="SectionTitle" style={{width: 1700, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 21.33, display: 'inline-flex'}}>
                            <div className="RecentProjects" style={{textAlign: 'center', color: '#282938', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Recent Projects</div>
                            <div className="Content" style={{alignSelf: 'stretch', height: 77, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'flex'}}>
                                <div className="MyPortfolio" style={{alignSelf: 'stretch', color: '#282938', fontSize: 64, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 76.80, wordWrap: 'break-word'}}>My Portfolio</div>
                            </div>
                        </div>
                    </div>
                    <div className="Content" style={{alignSelf: 'stretch', height: 615.67, paddingLeft: 30, paddingRight: 30, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 85.33, display: 'flex'}}>
                        <div className="Content" style={{alignSelf: 'stretch', height: 615.67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 85.33, display: 'flex'}}>
                            <div className="Row" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 42.67, display: 'inline-flex'}}>
                                <div className="Card" style={{flex: '1 1 0', background: 'white', boxShadow: '0px 0px 32px rgba(0, 0, 0, 0.15)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <img className="PlaceholderImage" style={{alignSelf: 'stretch', height: 400, borderRadius: 8}} src="https://via.placeholder.com/461x400" />
                                    <div className="Content" style={{alignSelf: 'stretch', height: 215.67, padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                        <div className="Content" style={{alignSelf: 'stretch', height: 151.67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                            <div className="Title" style={{alignSelf: 'stretch', height: 151.67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                                <div className="Project1" style={{alignSelf: 'stretch', color: '#282938', fontSize: 32, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 44.80, wordWrap: 'break-word'}}>Project 1</div>
                                                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInEros" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Card" style={{flex: '1 1 0', background: 'white', boxShadow: '0px 5.333333492279053px 16px rgba(0, 0, 0, 0.15)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <img className="PlaceholderImage" style={{alignSelf: 'stretch', height: 400, borderRadius: 8}} src="https://via.placeholder.com/461x400" />
                                    <div className="Content" style={{alignSelf: 'stretch', height: 215.67, padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                        <div className="Content" style={{alignSelf: 'stretch', height: 151.67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                            <div className="Title" style={{alignSelf: 'stretch', height: 151.67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                                <div className="Project2" style={{alignSelf: 'stretch', color: '#282938', fontSize: 32, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 44.80, wordWrap: 'break-word'}}>Project 2</div>
                                                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInEros" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Card" style={{flex: '1 1 0', background: 'white', boxShadow: '0px 5.333333492279053px 32px rgba(0, 0, 0, 0.15)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <img className="PlaceholderImage" style={{alignSelf: 'stretch', height: 400, borderRadius: 8}} src="https://via.placeholder.com/461x400" />
                                    <div className="Content" style={{alignSelf: 'stretch', height: 215.67, padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                        <div className="Content" style={{alignSelf: 'stretch', height: 151.67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                            <div className="Title" style={{alignSelf: 'stretch', height: 151.67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                                <div className="Project3" style={{alignSelf: 'stretch', color: '#282938', fontSize: 32, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 44.80, wordWrap: 'break-word'}}>Project 3</div>
                                                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInEros" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="MySkill" style={{height: 732.33, paddingLeft: 85.33, paddingRight: 85.33, paddingTop: 40, paddingBottom: 40, left: 0, top: 802, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 106.67, display: 'inline-flex'}}>
                    <div className="SectionTitle" style={{height: 130.33, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 21.33, display: 'flex'}}>
                        <div className="MySkills" style={{textAlign: 'center', color: '#282938', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>My Skills</div>
                        <div className="Content" style={{alignSelf: 'stretch', height: 77, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                            <div className="MyExpertise" style={{alignSelf: 'stretch', color: '#282938', fontSize: 64, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 76.80, wordWrap: 'break-word'}}>My Expertise</div>
                        </div>
                    </div>
                    <div className="Row" style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-start', gap: 42.67, display: 'inline-flex'}}>
                        <div className="Content" style={{flex: '1 1 0', padding: 32, background: '#F5FCFF', borderRadius: 10.67, borderBottom: '4px #5E3BEE solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
                            <div className="SectionTitle" style={{alignSelf: 'stretch', height: 351.33, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                <div className="StrategyDirection" style={{padding: 13.33, background: 'white', boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.10)', borderRadius: 10.67, justifyContent: 'center', alignItems: 'center', gap: 13.33, display: 'inline-flex'}}>
                                    <img className="ProductChain1" style={{width: 53.33, height: 53.33}} src="https://via.placeholder.com/53x53" />
                                </div>
                                <div className="Content" style={{alignSelf: 'stretch', height: 239.33, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 21.33, display: 'flex'}}>
                                    <div className="StrategyDirection" style={{alignSelf: 'stretch', color: '#282938', fontSize: 32, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 44.80, wordWrap: 'break-word'}}>Strategy & Direction</div>
                                    <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInErosElementumTristique" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                                </div>
                            </div>
                        </div>
                        <div className="Content" style={{flex: '1 1 0', padding: 32, background: '#F5FCFF', borderRadius: 10.67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
                            <div className="SectionTitle" style={{alignSelf: 'stretch', height: 306.33, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 21.33, display: 'flex'}}>
                                <div className="BrandingLogo" style={{padding: 13.33, background: 'white', boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.10)', borderRadius: 10.67, justifyContent: 'center', alignItems: 'center', gap: 13.33, display: 'inline-flex'}}>
                                    <img className="Tag1" style={{width: 53.33, height: 53.33}} src="https://via.placeholder.com/53x53" />
                                </div>
                                <div className="Content" style={{alignSelf: 'stretch', height: 205, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                    <div className="Skill2" style={{alignSelf: 'stretch', color: '#282938', fontSize: 32, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 44.80, wordWrap: 'break-word'}}>Skill #2</div>
                                    <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInErosElementumTristique" style={{alignSelf: 'stretch', color: 'black', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                                </div>
                            </div>
                        </div>
                        <div className="Content" style={{flex: '1 1 0', padding: 32, background: '#F5FCFF', borderRadius: 10.67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
                            <div className="SectionTitle" style={{alignSelf: 'stretch', height: 306.33, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 21.33, display: 'flex'}}>
                                <div className="UiUxDesign" style={{padding: 13.33, background: 'white', boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.10)', borderRadius: 10.67, justifyContent: 'center', alignItems: 'center', gap: 13.33, display: 'inline-flex'}}>
                                    <img className="FeatherPen1" style={{width: 53.33, height: 53.33}} src="https://via.placeholder.com/53x53" />
                                </div>
                                <div className="Content" style={{alignSelf: 'stretch', height: 205, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                    <div className="Skill3" style={{alignSelf: 'stretch', color: '#282938', fontSize: 32, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 44.80, wordWrap: 'break-word'}}>Skill #3</div>
                                    <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInErosElementumTristique" style={{alignSelf: 'stretch', color: 'black', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                                </div>
                            </div>
                        </div>
                        <div className="Content" style={{flex: '1 1 0', padding: 32, background: '#F5FCFF', borderRadius: 10.67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex'}}>
                            <div className="SectionTitle" style={{alignSelf: 'stretch', height: 306.33, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 21.33, display: 'flex'}}>
                                <div className="WebflowDevelopment" style={{padding: 13.33, background: 'white', boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.10)', borderRadius: 10.67, justifyContent: 'center', alignItems: 'center', gap: 13.33, display: 'inline-flex'}}>
                                    <img className="FeatherPen1" style={{width: 53.33, height: 53.33}} src="https://via.placeholder.com/53x53" />
                                </div>
                                <div className="Content" style={{alignSelf: 'stretch', height: 205, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                    <div className="Skill4" style={{alignSelf: 'stretch', color: '#282938', fontSize: 32, fontFamily: 'Roboto', fontWeight: '700', lineHeight: 44.80, wordWrap: 'break-word'}}>Skill #4</div>
                                    <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInErosElementumTristique" style={{alignSelf: 'stretch', color: 'black', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Image" style={{width: 884, height: 772, left: 816, top: 0, position: 'absolute'}}>
                    <div className="YellowBg" style={{width: 777, height: 877, left: 164, top: -105, position: 'absolute', background: '#5F5FB0'}}></div>
                    <div className="YellowBg" style={{width: 777, height: 877, left: 164, top: -105, position: 'absolute', background: '#5F5FB0'}}></div>
                    <img className="Samplebio21" style={{width: 'auto', height: '80vh', left: 327, top: 181, position: 'absolute'}} src="./samplebio2.png" />
                </div>
                <div className="Intro" style={{width: '100vw', height: '100vh', left: 181, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                    <div className="E3StrategicSolutions" style={{alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>E3 STRATEGIC SOLUTIONS</div>
                    <div className="Content" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                        <div style={{width:'30vw',color: '#25282B', fontSize: 64, fontFamily: 'Playfair Display', fontWeight: '700', wordWrap: 'break-word'}}>Hello, my name is Erica Opoku</div>
                        <div className="Subheadline" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                            <div className="Text" style={{width: '30vw', color: '#828282', fontSize: 24, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word',lineHeight: '1.5' }}>I have over twenty years of experience working in non-profits in Canada and Internationally and has spent the last 15 years working at the municipal level in grant making, health system transformation and healthy public policy.</div>
                        </div>
                    </div>
                    <div className="Button" style={{paddingLeft: 40, paddingRight: 40, paddingTop: 16, paddingBottom: 16, background: '#5F5FB0', boxShadow: '4px 5px 4px rgba(0, 0, 0, 0.25)', borderRadius: 40, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
                        <div className="Label" style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 1.60, wordWrap: 'break-word'}}>READ MORE</div>
                    </div>
                </div>
            </div>
        </div>
        )}
        {desktopState === 'Homedesktop1' && (
        <App />
        )}

        <div className="Navmenudesktop" style={{zIndex:1, width: 828, height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
        <div className="ListitemDesktopNaActive" style={{width: 207, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#FFD700', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div className="Label" style={{width: 131, textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}>About Us</div>
        </div>
        <div className="ListitemDesktopNa" style={{width: 207, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}>Services</div>
        </div>
        <div className="ListitemDesktopNa" style={{width: 207, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}>Blog</div>
        </div>
        <div className="ListitemDesktopNa" style={{width: 207, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}>Contact</div>
        </div>
        </div>

    </div>
    
  );
}

export default About;