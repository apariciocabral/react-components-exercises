import { useMemo } from 'react';

const isPrime = (num: number): boolean => {
    if (num < 2) {
        return false;
    }
    for (let i = 2; num > i; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

interface IQ26FirstPrimeNumProps {
    value: number;
}

const Q26FirstPrimeNum: React.FC<IQ26FirstPrimeNumProps> = ({ value }) => {
    const primes = useMemo(() => {
        const primeArray = [];
        let findPrime = 0;

        while (primeArray.length < value) {
            findPrime += 1;
            if (isPrime(findPrime)) {
                primeArray.push(findPrime);
            }
        }
        return [primeArray];
    }, [value]);
    return <span>{primes.join(', ')}</span>;
};

export default Q26FirstPrimeNum;
