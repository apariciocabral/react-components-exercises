interface IQ8RepeatStringProps {
    value: string;
    value1: number;
}

const Q8RepeatString: React.FC<IQ8RepeatStringProps> = ({ value, value1 }) => (
    <span>{value.repeat(value1)}</span>
);

export default Q8RepeatString;
