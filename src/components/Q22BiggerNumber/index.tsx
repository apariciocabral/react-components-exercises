interface IQ22BiggerNumberProps {
    value: number;
    value1: number;
}

const Q22BiggerNumber: React.FC<IQ22BiggerNumberProps> = ({
    value,
    value1,
}) => <p>{Math.max(value, value1)}</p>;

export default Q22BiggerNumber;
