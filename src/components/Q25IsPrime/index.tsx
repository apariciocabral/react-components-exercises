interface IQ25IsPrimeProps {
    value: number;
}

const Q25IsPrime: React.FC<IQ25IsPrimeProps> = ({ value }) => {
    if (value <= 1) return <p>Não</p>; // negatives
    if (value % 2 === 0 && value > 2) return <p>Não</p>; // even numbers
    const s = Math.sqrt(value); // store the square to loop faster
    for (let i = 2; i < s; i += 1) {
        if (value % i === 0) return <p>Não</p>;
    }
    return <p>Sim</p>;
};

export default Q25IsPrime;
