import { InputLabel, TextField as MUTextField, FormHelperText, TextFieldProps } from "@mui/material"
import './textField.scss';

type InputProps = {
  name: string
  label?: string
  helperText?: string
} & TextFieldProps

const TextField = (props: InputProps) => {
  const { label, helperText, name } = props;

  return (
    <div className='input'>
      { label && <InputLabel htmlFor={ name }>{ label }</InputLabel> }
      <MUTextField {...props} id={ name } aria-describedby={`${name}-helper`} fullWidth={true} variant='standard' autoComplete="off" />
      { helperText && <FormHelperText id={`${name}-helper`}>{ helperText }</FormHelperText> }
    </div>
  )
}

export default TextField;