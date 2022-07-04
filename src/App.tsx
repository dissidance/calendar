import './App.css';
import { Calendar, DatePicker, Menu, Popup } from './components';

import { Button, FormControl } from '@mui/material';
import { TextField } from './components';
import { useState, FormEvent } from 'react';

function App() {
  const [isOpenedForm, setIsOpenedForm] = useState(false);

  const toggleCreateEventForm = () => setIsOpenedForm(!isOpenedForm);
  

  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(
    new Date(),
  );

  const handleChangeStartDate = (newValue: Date | null) => {
    setSelectedStartDate(newValue);
  };

  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(
    new Date(),
  );

  const handleChangeEndDate = (newValue: Date | null) => {
    setSelectedEndDate(newValue);
  };

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log('submit')
  }

  return (
    <div className="App">
      <header className='header'>
        <div className='container'>
          <Menu handleOpenCreateEventForm={toggleCreateEventForm} />
        </div>
      </header>
      <main>
        <div className='container'>
          <Calendar />
        </div>
        <Popup isOpened={isOpenedForm} handleClose={toggleCreateEventForm}>
          <form className='create-event-form' onSubmit={onSubmitForm}>
            <TextField name='name' placeholder='Добавьте название' />
            <DatePicker value={selectedStartDate} onChange={handleChangeStartDate} label='Выберите дату и время начала события' />
            <DatePicker value={selectedEndDate} onChange={handleChangeEndDate} label='Выберите дату и время окончания события' />
            <TextField name='description' placeholder='Добавьте описание' multiline />
            <TextField name='address' placeholder='Адрес' />
            <TextField name='site' placeholder='Сайт' />
            <Button type='submit' sx={{marginLeft: 'auto'}}>Создать</Button>
          </form>
        </Popup>
      </main>
    </div>
  );
}

export default App;
