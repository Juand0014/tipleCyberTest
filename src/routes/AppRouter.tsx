import { Routes, Route, Navigate } from "react-router-dom"
import { Fibonacci, Coincidence, GetBanknotes, IsPrime, RandomNumber, Home } from "../pages"

export const mainRoutes = [
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/fibonacci",
		element: <Fibonacci />
	},
	{
		path: "/concidence",
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
		element: <Home />
	}
]

export const AppRouter = () => {
	return (
		<Routes>
			{mainRoutes.map((route, index) => <Route key={index} path={route.path} element={route.element} />)}
		</Routes>
	)
}