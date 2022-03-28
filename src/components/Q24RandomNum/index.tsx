interface IQ24RandomNumProps {
    value: number;
    value1: number;
}

const Q24RandomNum: React.FC<IQ24RandomNumProps> = ({ value, value1 }) => (
    <p>
        {value >= value1
            ? 'Inválido'
            : Math.floor(Math.random() * (value - value1 + 1)) + value1}
    </p>
);

export default Q24RandomNum;
