interface IQ7BothStringProps {
    prop1: string;
    prop2: string;
}

const Q7BothString: React.FC<IQ7BothStringProps> = ({ prop1, prop2 }) => (
    <span>{`${prop1} ${prop2}`}</span>
);

export default Q7BothString;
