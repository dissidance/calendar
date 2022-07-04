import { TextField } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import './datePicker.scss';

type DatePickerProps = {
  value: string | Date | null
  label?: string
  onChange: (value: Date | null) => void
}

const DatePicker = (props: DatePickerProps) => {
  const { value, onChange, label } = props;
  return (
    <div className='date-picker'>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          label={label}
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} variant='standard' fullWidth />}
        />
      </LocalizationProvider>
    </div>
  )
};

export default DatePicker;