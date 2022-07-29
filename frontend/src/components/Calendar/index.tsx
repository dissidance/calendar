import moment from 'moment'
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import { Event } from '../../../../shared/types/events';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/ru';

const localizer = momentLocalizer(moment);

type CalenderProps = {
  events: Event[] | undefined
  onSelectEvent: (event: Event) => void;
}

const Calendar = (props: CalenderProps) => {

  return (
    <div>
      <BigCalendar
        localizer={localizer}
        events={props.events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event) => props.onSelectEvent(event)}
        messages={{
          next: "Следующий",
          previous: "Предыдущий",
          today: "Сегодня",
          month: "Месяц",
          week: "Неделя",
          day: "День",
          agenda: 'Расписание дня'
        }}
      />
    </div>
  )
}

export default Calendar;