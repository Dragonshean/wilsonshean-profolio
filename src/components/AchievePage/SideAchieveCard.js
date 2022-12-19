import { Col } from "react-bootstrap";
import React from 'react'

export const SideAchieveCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgBox">
        <img className="proj-img" src={imgUrl} alt="img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <span>{description}</span>
          </a>
        </div>
      </div>
    </Col>
  );
};
