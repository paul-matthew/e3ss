import React, { useRef, useEffect } from 'react';

function MobileMenu({ handleAboutClick, handleServicesClick, handleBlogClick, handleContactClick, desktopState }) {
  const [openMenuContent, setOpenMenuContent] = React.useState(false);
  const menuRef = useRef(null);

  // Handle clicking outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuContent(false);
      }
    };

    // Add the event listener when the menu is open
    if (openMenuContent) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenuContent]);

  const handleClickBurgerMenu = () => {
    setOpenMenuContent((prevState) => !prevState);
  };

  const _handleAboutClick = () => {
    handleAboutClick();
    setOpenMenuContent(false);
  };

  const _handleServicesClick = () => {
    handleServicesClick();
    setOpenMenuContent(false);
  };

  const _handleBlogClick = () => {
    handleBlogClick();
    setOpenMenuContent(false);
  };

  const _handleContactClick = () => {
    handleContactClick();
    setOpenMenuContent(false);
  };

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
        height: "10vh",
      }}
      ref={menuRef} // Attach the ref to the main div
    >
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <div
          id="burger-menu-container"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <button
            id="burger-menu"
            className={openMenuContent ? "close" : ""}
            onClick={handleClickBurgerMenu}
          >
            <span></span>
          </button>
        </div>
        {openMenuContent && (
          <div
            id="menu-content"
            style={{
              backgroundColor: "#000",
              position: "absolute",
              left: 0,
              width: "119px",
              transform: "translateX(1px)",
            }}
          >
            <div
              className={desktopState === "AboutUs" ? "active-menu-mobile" : "ListitemDesktopNa"}
              style={{
                width: "100%",
                height: "100%",
                padding: "8px 18px",
                background: "#0E0E0E",
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Label"
                style={{
                  width: "100%",
                  textAlign: "left",
                  color: "white",
                  fontSize: "clamp(13px, 2vw, 16px)",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  letterSpacing: 2,
                  wordWrap: "break-word",
                  cursor: "pointer",
                }}
                onClick={_handleAboutClick}
              >
                About Us
              </div>
            </div>

            <div
              className={desktopState === "Services" ? "active-menu-mobile" : "ListitemDesktopNa"}
              style={{
                width: "100%",
                height: "100%",
                padding: "8px 18px",
                background: "#0E0E0E",
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Label"
                style={{
                  width: "100%",
                  textAlign: "left",
                  color: "white",
                  fontSize: "clamp(13px, 2vw, 16px)",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  letterSpacing: 2,
                  wordWrap: "break-word",
                  cursor: "pointer",
                }}
                onClick={_handleServicesClick}
              >
                Services
              </div>
            </div>

            <div
              className={desktopState === "Blog" ? "active-menu-mobile" : "ListitemDesktopNa"}
              style={{
                width: "100%",
                height: "100%",
                padding: "8px 18px",
                background: "#0E0E0E",
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Label"
                style={{
                  width: "100%",
                  textAlign: "left",
                  color: "white",
                  fontSize: "clamp(13px, 2vw, 16px)",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  letterSpacing: 2,
                  wordWrap: "break-word",
                  cursor: "pointer",
                }}
                onClick={_handleBlogClick}
              >
                Blog
              </div>
            </div>

            <div
              className={desktopState === "Contact" ? "active-menu-mobile" : "ListitemDesktopNa"}
              style={{
                width: "100%",
                height: "100%",
                padding: "8px 18px",
                background: "#0E0E0E",
                justifyContent: "center",
                alignItems: "center",
                display: "inline-flex",
              }}
            >
              <div
                className="Label"
                style={{
                  width: "100%",
                  textAlign: "left",
                  color: "white",
                  fontSize: "clamp(13px, 2vw, 16px)",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  letterSpacing: 2,
                  wordWrap: "break-word",
                  cursor: "pointer",
                }}
                onClick={_handleContactClick}
              >
                Contact
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileMenu;

