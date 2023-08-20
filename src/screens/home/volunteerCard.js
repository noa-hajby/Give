import React from 'react';
import demoImage from '../../assets/image2.jpeg';
import { BsFillEyeFill } from 'react-icons/bs';

const VolunteerCard = ({title, description, img, onClick}) => {
    return (
        <div className="card" id="x" style={{ width: "30rem", border: "1px solid grey" }} >
            <img className="card-img-top" src={img || demoImage} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href="#" className="btn btn-secondary" style={{ color: 'white', minWidth: '100px' }} onClick={onClick}><BsFillEyeFill /> view</a>
            </div>
        </div>
    )
}

export default VolunteerCard;