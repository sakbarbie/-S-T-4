import React from "react";

const Image = (props) =>{
    return (
    <>
        <div className="logo">
            <img src={props.imglink} alt= "bookImage" className="image" />
        </div>
     </>   
    );
}

export default Image;