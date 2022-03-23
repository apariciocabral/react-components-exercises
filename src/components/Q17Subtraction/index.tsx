interface IQ17SubtractionProps {
    value: number;
    value1: number;
}

const Q17Subtraction: React.FC<IQ17SubtractionProps> = ({ value, value1 }) => (
    <p>{value - value1}</p>
);

export default Q17Subtraction;
