import './App.css';
import { Event } from '../../shared/types/events';
import { Calendar, Form, Menu, Popup } from './components';
import { useState } from 'react';


function App() {
  const [isOpenedForm, setIsOpenedForm] = useState(false);

  const toggleCreateEventForm = () => setIsOpenedForm(!isOpenedForm);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const now = new Date();
  const events: Event[] = [
    {
        id: '14',
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
        description: 'description',
        address: '1111'
    },
    {
        id: '15',
        title: 'Point in Time Event',
        start: now,
        end: now,
        address: '22222'
    },
  ]

  const onSelectEvent = (event: Event) => {
    setSelectedEvent(event);
    toggleCreateEventForm()
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
          <Calendar events={events} onSelectEvent={onSelectEvent} />
        </div>
        <Popup isOpened={isOpenedForm} handleClose={toggleCreateEventForm}>
          <Form value={selectedEvent} />
        </Popup>
      </main>
    </div>
  );
}

export default App;
