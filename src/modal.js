import React from 'react';

const Modal = ({ onClose, service }) => {
    return (
        <div className="portfolio-modal fade modal" style={{border:"solid black 4px", scrollBehavior:'', background:'gray',width:'90vw',top:'12%',left:'5vw',height:'80vh',position:'fixed', display:'flex', justifyContent: '', alignItems: '',zIndex:'6'}}>
            <div className="modal-content">
                <div style={{margin:'15px'}}>
                    <span className="close" style={{cursor:'pointer', fontSize:'40px', display:'flex',position:'absolute', right:20 }}onClick={onClose}>&times;</span>
                    <h2>{service.title}</h2>
                    <p>{service.description2}</p>
                </div>
                    <img src={service.image} alt={service.title} />
            </div>
          </div>
    );
};

export default Modal;
