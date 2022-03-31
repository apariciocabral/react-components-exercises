interface IQ24RandomNumProps {
    max: number;
    min: number;
}

const Q24RandomNum: React.FC<IQ24RandomNumProps> = ({ max, min }) => (
    <p>
        {min >= max
            ? 'Inválido'
            : Math.floor(Math.random() * (max - min + 1)) + min}
    </p>
);

export default Q24RandomNum;
