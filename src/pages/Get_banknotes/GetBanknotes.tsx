import { getBanknotes } from "../../services"
import { inputNumberValidation } from "../../Helpers";
import { RenderListItems } from "../../components/RenderListItems/RenderListItems";

const defaultFieldValues = {
	quantity: {
		value: "",
		validations: [inputNumberValidation]
	}
}

export const GetBanknotes = () => <RenderListItems 
defaultFieldValues={defaultFieldValues}
initialValueProp={2000} 
services={getBanknotes} 
title={"Banknotes"}
withSearch={true} />