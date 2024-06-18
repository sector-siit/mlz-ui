import React from 'react';
import './Card.css'; // Asegúrate de tener tu archivo de estilos CSS

interface CardProps {
  title: string;
  content: string;
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};