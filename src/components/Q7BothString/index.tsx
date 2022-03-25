interface IQ7BothStringProps {
    value: string;
    value1: string;
}

const Q7BothString: React.FC<IQ7BothStringProps> = ({ value, value1 }) => (
    <span>{`${value} ${value1}`}</span>
);

export default Q7BothString;
