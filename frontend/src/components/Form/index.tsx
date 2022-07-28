import { Button } from "@mui/material"
import { FormEvent, useState } from "react"
import { Event } from '../../../../shared/events';
import DatePicker from "../DatePicker"
import TextField from "../TextField"

type FormProps = {
  value: Event | null;
}

const Form = (props: FormProps) => {

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log('submit')
  }

  return(
    <form className='create-event-form' onSubmit={onSubmitForm}>
      <TextField name='name' placeholder='Добавьте название' value={props.value?.title} />
      <DatePicker value={props.value ? props.value.start : null} onChange={() => console.log('change')} label='Выберите дату и время начала события' />
      <DatePicker value={props.value ? props.value.start : null} onChange={() => console.log('change')} label='Выберите дату и время окончания события' />
      <TextField name='description' placeholder='Добавьте описание' multiline value={props.value?.description} />
      <TextField name='address' placeholder='Адрес' value={props.value?.address} />
      <TextField name='site' placeholder='Сайт' value={props.value?.site} />
      <Button type='submit' sx={{marginLeft: 'auto'}}>{props.value?.id ? 'Обновить' : 'Создать'}</Button>
    </form>
  )
}

export default Form;