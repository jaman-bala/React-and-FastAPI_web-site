import React from "react";
import { Card } from "react-bootstrap";

const NewsCard = ({id, title, description, image_path, uploaded_at}) => {
    return (
        <>
        <h5>{title}</h5>
        <p>{description}</p>
        <p>{uploaded_at}</p>
        </>
    );
}

export default NewsCard;