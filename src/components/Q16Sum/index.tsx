interface IQ16SumProps {
    value: number;
    value1: number;
}

const Q16Sum: React.FC<IQ16SumProps> = ({ value, value1 }) => (
    <p>{value + value1}</p>
);

export default Q16Sum;
