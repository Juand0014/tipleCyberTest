import { Routes, Route, Navigate } from "react-router-dom"
import { Coincidence, GetBanknotes, IsPrime, RandomNumber } from "../pages"

export const mainRoutes = [
	{
		path: "/coincidence",
		element: <Coincidence />
	},
	{
		path: "/getBanknotes",
		element: <GetBanknotes />
	},
	{
		path: "/isPrime",
		element: <IsPrime />
	},
	{
		path: "/randomNumber",
		element: <RandomNumber />
	},
	{
		path: "/*",
		element: <Coincidence />
	}
]

export const AppRouter = () => {
	return (
		<Routes>
			{mainRoutes.map((route, index) => <Route key={index} path={route.path} element={route.element} />)}
		</Routes>
	)
}