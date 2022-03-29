interface IQ27FactorialProps {
    value: number;
}

const Q27Factorial: React.FC<IQ27FactorialProps> = ({ value }) => {
    let result = 1;

    for (let i = value; i >= 2; i -= 1) {
        result *= i;
    }
    return <p>{result}</p>;
};

export default Q27Factorial;
