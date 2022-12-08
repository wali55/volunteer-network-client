import React from "react";

const Service = ({ service }) => {
  const { name, picture } = service;
  return (
    <div className="col">
      <div className="card">
        <img src={service.picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{service.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Service;
