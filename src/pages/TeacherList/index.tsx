import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';
import Input from '../../components/Input';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select 
            name="subject" 
            label="Matéria"
            options={[
              {value: 'Artes', label:'Artes'},
              {value: 'Ciência', label:'Ciência'},
              {value: 'Biologia', label:'Biologia'},
              {value: 'Matemática', label:'Matemática'},
              {value: 'Português', label:'Português'},
              {value: 'História', label:'História'},
              {value: 'Geografia', label:'Geografia'}
            ]}
          />
          <Select 
            name="week_day" 
            label="Dia da Semana"
            options={[
              {value: '0', label:'Domingo'},
              {value: '1', label:'Segunda-feira'},
              {value: '2', label:'Terça-feira'},
              {value: '3', label:'Quarta-feira'},
              {value: '4', label:'Quinta-feira'},
              {value: '5', label:'Sexta-feira'},
              {value: '6', label:'Sábado'}
            ]}
          />
          <Input name="time" label="Horário" type="time"/>
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