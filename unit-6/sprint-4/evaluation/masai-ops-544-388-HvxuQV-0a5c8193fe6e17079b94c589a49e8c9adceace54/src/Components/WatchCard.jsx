import React from "react";

const WatchCard = ({ id ,name,category,image}) => {
  return (
    <div data-testid={`watch-card-wrapper-${id}`} style={{boxShadow:"0 0 15px black",padding:"35px"}}>
      <div>
        <img data-testid="watch-card-image" src={image} alt={name} width="95%"/>
      </div>
      <div>
        <div data-testid="watch-name">{name}</div>
        <div data-testid="watch-category">{category}</div>
      </div>
    </div>
  );
};

export default WatchCard;