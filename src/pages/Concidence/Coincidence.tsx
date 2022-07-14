import { coincidence } from "../../services"
import { inputNumberValidation } from "../../Helpers";
import { RenderListItems } from "../../components/RenderListItems/RenderListItems";

const defaultFieldValues = {
	quantity: {
		value: "",
		validations: [inputNumberValidation]
	}
}

export const Coincidence = () => <RenderListItems 
		defaultFieldValues={defaultFieldValues}
		initialValueProp={5} 
		services={coincidence} 
		title={"Coincidences"}
		withSearch={false} />