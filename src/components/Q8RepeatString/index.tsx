interface IQ8RepeatStringProps {
    prop1: string;
    prop2: number;
}

const Q8RepeatString: React.FC<IQ8RepeatStringProps> = ({ prop1, prop2 }) => (
    <span>{prop1.repeat(prop2)}</span>
);

export default Q8RepeatString;
