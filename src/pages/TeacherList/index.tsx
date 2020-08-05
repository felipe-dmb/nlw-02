import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">

          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time"/>
          </div>

        </form>
      </PageHeader>

      <main>
        <TeacherItem 
          name="Felipe Barbosa" 
          subject="Química" 
          price="50,00"
          imgUrl="https://avatars2.githubusercontent.com/u/66565600?s=400&u=05777ccd3a50f6de9db06bd53c969a4bfc479127&v=4"
        >
          <p>
          Entusiasta das melhores tecnologias de química avançada.
          <br/><br/>
          Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. 
          Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>
        </TeacherItem>
      </main>
    </div>
  )
}

export default TeacherList;