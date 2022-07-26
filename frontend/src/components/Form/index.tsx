import { Button } from "@mui/material"
import { FormEvent, useState } from "react"
import DatePicker from "../DatePicker"
import TextField from "../TextField"

const Form = () => {

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

  return(
    <form className='create-event-form' onSubmit={onSubmitForm}>
      <TextField name='name' placeholder='Добавьте название' />
      <DatePicker value={selectedStartDate} onChange={handleChangeStartDate} label='Выберите дату и время начала события' />
      <DatePicker value={selectedEndDate} onChange={handleChangeEndDate} label='Выберите дату и время окончания события' />
      <TextField name='description' placeholder='Добавьте описание' multiline />
      <TextField name='address' placeholder='Адрес' />
      <TextField name='site' placeholder='Сайт' />
      <Button type='submit' sx={{marginLeft: 'auto'}}>Создать</Button>
    </form>
  )
}

export default Form;