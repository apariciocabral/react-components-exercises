interface IQ19DivisionProps {
    value: number;
    value1: number;
}

const Q19Division: React.FC<IQ19DivisionProps> = ({ value, value1 }) =>
    value1 ? <p>{value / value1}</p> : <p>O divisor não pode ser zero</p>;

export default Q19Division;
