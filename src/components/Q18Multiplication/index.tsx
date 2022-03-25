interface IQ18MultiplicationProps {
    value: number;
    value1: number;
}

const Q18Multiplication: React.FC<IQ18MultiplicationProps> = ({
    value,
    value1,
}) => <p>{value * value1}</p>;

export default Q18Multiplication;
