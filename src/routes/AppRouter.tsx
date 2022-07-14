import { Routes, Route } from "react-router-dom"
import { Fibonacci, Coincidence, GetBanknotes, IsPrime, RandomNumber, Home } from "../pages"

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/concidence" element={<Coincidence />} />
			<Route path="/getBanknotes" element={<GetBanknotes />} />
			<Route path="/isPrime" element={<IsPrime />} />
			<Route path="/randomNumber" element={<RandomNumber />} />
			<Route path="/fibonacci" element={<Fibonacci />} />
			<Route path="/*" element={<Home/>}/>
		</Routes>
	)
}