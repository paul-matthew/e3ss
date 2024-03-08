import * as React from "react";

function MobileMenu({ handleAboutClick, handleServicesClick, handleBlogClick, handleContactClick, desktopState}) {
  const menuContentRef = React.useRef(null);
  const [openMenuContent, setOpenMenuContent] = React.useState(false);
  const [currentState, setCurrentState] = React.useState(false);

  const handleClickBurgerMenu = (event) => {
    setOpenMenuContent((prevState) => !prevState);
  };

  const _handleAboutClick = () => {
    handleAboutClick()
    setCurrentState("AboutUs")
  }

  const _handleServicesClick = () => {
    handleServicesClick()
    setCurrentState("Services")
  }

  const _handleBlogClick = () => {
    handleBlogClick()
    setCurrentState("Blog")

  }

  const _handleContactClick = () => {
    handleContactClick()
    setCurrentState("Contact")
  }

  return (
    <div
      id="mobile-menu"
      style={{
        zIndex: 2,
        position: "absolute",
        right: 0,
        top: 0,
        display: "none",
        width: "100px", 
        height: "10vh"
      }}
    >
      <div style={{ position: "relative", width:"100%", height: "100%"}}>
      <div id="burger-menu-container" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "center" }}>
        <button id="burger-menu" className={openMenuContent ? "close" : ""} onClick={handleClickBurgerMenu}>
          <span></span>
        </button>
      </div>
        {openMenuContent && (
          <div id="menu-content" style={{ backgroundColor: "#000", position: "absolute", left: "2px", width: "100%" }}>
            <div className={desktopState === "AboutUs" ? "active-menu-mobile": "ListitemDesktopNa"} style={{ width: 'clamp(83px, 3vw, 16px)', height: '100%', padding: "8px 18px", background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <div className="Label" style={{ width: "100%", textAlign: 'left', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word', cursor: "pointer" }} onClick={_handleAboutClick}>About Us</div>
            </div>

            <div className={desktopState === "Services" ? "active-menu-mobile": "ListitemDesktopNa"} style={{ width: 'clamp(83px, 3vw, 16px)', height: '100%',  padding: "8px 18px", background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <div className="Label" style={{ width: "100%", textAlign: 'left', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word', cursor: "pointer" }} onClick={_handleServicesClick}>Services</div>

            </div>

            <div className={desktopState === "Blog" ? "active-menu-mobile": "ListitemDesktopNa"} style={{ width: 'clamp(83px, 3vw, 16px)', height: '100%',  padding: "8px 18px", background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <div className="Label" style={{ width: "100%", textAlign: 'left', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word', cursor: "pointer" }} onClick={_handleBlogClick}>Blog</div>

            </div>

            <div className={desktopState === "Contact" ? "active-menu-mobile": "ListitemDesktopNa"} style={{ width: 'clamp(83px, 3vw, 16px)', height: '100%',  padding: "8px 18px", background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <div className="Label" style={{ width: "100%", textAlign: 'left', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word', cursor: "pointer" }} onClick={_handleContactClick}>Contact</div>
            </div>
          </div>
        )}
      </div>
      

      
    </div>
  );
}

export default MobileMenu;
