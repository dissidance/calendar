import './App.css';
import { Calendar, Form, Menu, Popup } from './components';
import { useState } from 'react';

function App() {
  const [isOpenedForm, setIsOpenedForm] = useState(false);

  const toggleCreateEventForm = () => setIsOpenedForm(!isOpenedForm);

  const [selectedEvent, setSelectedEvent] = useState(null);

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
          <Form />
        </Popup>
      </main>
    </div>
  );
}

export default App;
