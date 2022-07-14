import { randomNumber } from "../../services"
import { inputNumberValidation } from "../../Helpers";
import { RenderListItems } from "../../components/RenderListItems/RenderListItems";

const defaultFieldValues = {
	quantity: {
		value: "",
		validations: [inputNumberValidation]
	}
}

export const RandomNumber = () => <RenderListItems 
			defaultFieldValues={defaultFieldValues}
			initialValueProp={5} 
			services={randomNumber} 
			title={"Random Numbers"}
			withSearch={true} />