import React, {useState, FormEvent} from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([{
    week_day: 0, from: '', to: ''
  }]);

  function addScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      {week_day: 0, from: '', to: ''}
    ]);
  }

  function setScheduleItem(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem,index) => {
      if (index === position) {
        return {...scheduleItem, [field]: value}
      }
      return scheduleItem;
    });
    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e:FormEvent) {
    e.preventDefault();
    api.post('classes',{
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro');
    });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>

            <Input 
              name="name" 
              label="Nome Completo"
              value={name}
              onChange={(e) => {setName(e.target.value)}}
            />
            <Input 
              name="avatar" 
              label="Avatar" 
              value={avatar}
              onChange={(e) => {setAvatar(e.target.value)}}
            />
            <Input 
              name="whatsapp" 
              label="WhatsApp" 
              value={whatsapp}
              onChange={(e) => {setWhatsapp(e.target.value)}}
            />
            <Textarea 
              name="bio" 
              label="Biografia" 
              value={bio}
              onChange={(e) => {setBio(e.target.value)}}
            />

          </fieldset>
          <fieldset>
            <legend>Sobre a Aula</legend>

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
              value={subject}
              onChange={(e) => {setSubject(e.target.value)}}
            />
            <Input 
              name="cost" 
              label="Custo da sua Hora por aula" 
              value={cost}
              onChange={(e) => {setCost(e.target.value)}}
            />

          </fieldset>
          <fieldset>
            <legend>
              Horários Disponíveis
              <button type="button" onClick={addScheduleItem}>
                + Novo Horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select 
                    name="week_day" 
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    options={[
                      {value: '0', label:'Domingo'},
                      {value: '1', label:'Segunda-feira'},
                      {value: '2', label:'Terça-feira'},
                      {value: '3', label:'Quarta-feira'},
                      {value: '4', label:'Quinta-feira'},
                      {value: '5', label:'Sexta-feira'},
                      {value: '6', label:'Sábado'}
                    ]}
                    onChange={e => setScheduleItem(index,'week_day',e.target.value)}
                  />
                  <Input 
                    name="from" 
                    type="time" 
                    label="Das"
                    value={scheduleItem.from}
                    onChange={e => setScheduleItem(index,'from',e.target.value)}
                  />
                  <Input 
                    name="to" 
                    type="time" 
                    label="Até"
                    value={scheduleItem.to}
                    onChange={e => setScheduleItem(index,'to',e.target.value)}
                  />
                </div>
              );
            })}

            
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso"/>
              Importante <br/>
              Preencha todos os Dados
            </p>
            <button type="submit">
              Salvar Cadastro
            </button>

          </footer>
        </form>
      </main>

    </div>
  )
}

export default TeacherForm;