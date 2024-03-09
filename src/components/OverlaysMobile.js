const OverlaysMobile = ({ displayState, displayState2, SeroverlayLeft, handleButtonClick, desktopState, SerbuttonText,BlogoverlayLeft, handleButton2Click,BlogbuttonText }) => {
    return (  
        <div style={{ position: "absolute", bottom: 0, width: "100%"}}>

      <div id='HoverOverlay2-Mobile' className="HoverOverlay2-mobile" style={{zIndex:displayState2,opacity:displayState2,width: '100%', height: '100px', left: 0, bottom: 0, borderTop: "1px solid rgb(140, 132, 132)", borderBottom: "1px solid rgb(140, 132, 132)", flexDirection: 'column', alignItems: 'center', gap: 8, display: "none",transition: 'left 0.5s ease-in-out', justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.2)", position: "relative" }}>
          <div className="ButtonServices" style={{ zIndex:1,marginTop: 0, textAlign: 'center', color: '#DED8D8', fontSize: "32px", fontFamily: 'Roboto', fontWeight: '700', zIndex: 1, letterSpacing: 3, wordWrap: 'break-word', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent"}} onClick={() => handleButtonClick(desktopState)}>
            {SerbuttonText}
            </div>
        </div>
       
  
        {/* Blog */}
        <div id='HoverOverlay3-mobile' className="HoverOverlay3-mobile" style={{zIndex:displayState2,opacity:displayState2,width: '100%', height: '100px', left: 0, bottom: 0, borderTop: "1px solid rgb(140, 132, 132)", borderBottom: "1px solid rgb(140, 132, 132)", flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'none',transition: 'left 0.5s ease-in-out', justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.2)", position: "relative" }}>
            <div className="ButtonBlog" style={{zIndex:1,color: '#DED8D8',textAlign:'center', fontFamily: 'Roboto', fontSize: "32px", fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word',display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent" }}onClick={() => handleButton2Click(desktopState)}>
                {BlogbuttonText}
                </div>
        </div>
        </div>

    );
}
 
export default OverlaysMobile;