import {FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import {VisibilityOffOutlined, VisibilityOutlined} from "@mui/icons-material";
import './InputField.modules.scss'

export const InputField = (props) => {
	return (
		<FormControl error={props.error.condition} className={"input-field"} variant="outlined">
			<label htmlFor={props.id}>{props.label}</label>
			<OutlinedInput  id={props.id} value={props.input.value} onChange={props.input.handleChange} type={props.input.type}
							placeholder={props.input.placeholder} endAdornment={ (props.id==='password' || props.id==='confirmpassword') ?
				<InputAdornment position="end">
					<IconButton
						aria-label="toggle password visibility"
						onClick={props.input.hClickShowPassword}
						edge="end"
					>
						{props.input.sPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
					</IconButton>
				</InputAdornment> : null
			}/>
			<FormHelperText>{props.error.erroMessageCondition ? props.error.Errormsg :" "}</FormHelperText>
		</FormControl>
	)
}