import { useEffect, useMemo, useState } from "react"
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Lists } from "../../components"
import { randomNumber } from "../../services"
import { Alert, Button, Stack } from "@mui/material";
import { inputNumberValidation } from "../../Helpers";
import { useFields } from "../../hooks";

const defaultFieldValues = {
	quantity: {
		value: "",
		validations: [inputNumberValidation]
	}
}

export const RandomNumber = () => {
	const initialStateValue: number[] = randomNumber(5)
	const [number, setNumber] = useState<number[]>(initialStateValue)
	const { values, errors, reset, handleChange, handleBlur } =
		useFields(defaultFieldValues);

	const handleSubmit = useMemo(() => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault(); 
		setNumber(randomNumber(Number(values.quantity || 5)))
	}, [values]);

	
	return (
		<>
			<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-quantity">Quantity</InputLabel>
          <OutlinedInput
            id="outlined-adornment-quantity"
            value={values.quantity || ""}
            onChange={handleChange}
						onBlur={handleBlur}
            label="quantity"
						name="quantity"
          />
					<Stack spacing={2} direction="row">
						<Button variant="outlined" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)}>Submit</Button>
						<Button variant="outlined" onClick={reset} color="success">Reset</Button>
					</Stack>

        </FormControl>
    </Box>
		<Box
			sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			{ errors?.quantity 
				? <Alert severity="error">{errors?.quantity}</Alert>
				: <Lists title={`Valores Aleatorios: ${number.length}`} items={number}/>
			}
		</Box>
		</>
	)
}