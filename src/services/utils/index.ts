const isPrime = (number: number): Boolean => {
	for (let i = 2; i < number; i++) {
			if (number % i === 0) return false;
	}
	return true;
}

const fibonnacciSequence = (quantity: number): number[] => {
	return Array.apply(null, Array(quantity)).reduce((acc: number[], curr: unknown, idx: number) => {
		return idx > 2 ? acc.concat(acc[idx - 1] + acc[idx - 2]) : acc
	}, [0,1,1])
}

export const randomNumber = (quantity: number = 5, maxValue: number = 100): number[] => {
	const numbers: number[] = [];
	for (let i = 0; i < quantity; i++) {
		const number: number = Math.floor(Math.random() * maxValue) + 1;
		numbers.includes(number) ? i-- : numbers.push(number);
		if(numbers.length === 20) break;
	}
	return numbers;
}

export const getBanknotes = (quantity: number) =>  {
	const banknotes = [2000, 1000, 500, 200, 100, 50, 25, 10, 5, 1];
	const banknotesFound = banknotes.map(banknote => {
		const cantidad = ~~(quantity / banknote);
		quantity = quantity % banknote;
		return { cantidad, banknote };
	}).filter(banknote => banknote.cantidad > 0);
	return banknotesFound;
}

export const primeNumbers = (quantity: number = 9): number[] => {
	let primeNumbers: number[] = [];
	let i: number = 2;
	while (primeNumbers.length < quantity) {
			if (isPrime(i)) {
					primeNumbers.push(i);
			}
			i++;
	}
	return primeNumbers;
}

export const coincidence = (): number[] => {
	let primesNumbers: number[] = []
	randomNumber(20, 30).forEach(element => isPrime(element) 
		&& primesNumbers.push(element)
	);
	const mayorValue = Math.max(...primesNumbers)
	const serie = fibonnacciSequence(mayorValue);
	return serie
}
