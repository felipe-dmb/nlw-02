import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import './styles.css';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  cost: number;
  subject: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }
  return (
    <article className="teacher-item">

    <header>
      <img src={teacher.avatar} alt="Foto"/>
      <div>
        <strong>{teacher.name}</strong>
        <span>{teacher.subject}</span>
      </div>
    </header>
    <p>{teacher.bio}</p>
    <footer>
      <p>
        Preço/Hora
        <strong>R$ {teacher.cost}</strong>
      </p>
      <a 
        href={`https://wa.me/${teacher.whatsapp}`} 
        onClick={createNewConnection}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsAppIcon} alt="WhatsApp"/>
        Entrar em contato 
      </a>
    </footer>
    </article>
  );
}

export default TeacherItem;