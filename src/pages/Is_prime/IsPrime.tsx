import { primeNumbers } from "../../services"
import { inputNumberValidation } from "../../Helpers";
import { RenderListItems } from "../../components/RenderListItems/RenderListItems";

const defaultFieldValues = {
	quantity: {
		value: "",
		validations: [inputNumberValidation]
	}
}

export const IsPrime = () => <RenderListItems 
			defaultFieldValues={defaultFieldValues}
			initialValueProp={9} 
			services={primeNumbers} 
			title={"Prime Numbers"}
			withSearch={true} />