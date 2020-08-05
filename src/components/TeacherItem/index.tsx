import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
  name: string;
  imgUrl: string;
  subject: string;
  price: string;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">

    <header>
      <img src={props.imgUrl} alt="Foto"/>
      <div>
        <strong>{props.name}</strong>
        <span>{props.subject}</span>
      </div>
    </header>

    {props.children}
    
    <footer>
      <p>
        Preço/Hora
        <strong>R$ {props.price}</strong>
      </p>
      <button type="button">
        <img src={whatsAppIcon} alt="WhatsApp"/>
        Entrar em contato 
      </button>
    </footer>
    </article>
  );
}

export default TeacherItem;