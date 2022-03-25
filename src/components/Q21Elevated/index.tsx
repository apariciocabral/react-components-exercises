interface IQ21ElevatedProps {
    value: number;
    value1: number;
}

const Q21Elevated: React.FC<IQ21ElevatedProps> = ({ value, value1 }) => (
    <p>{value ** value1}</p>
);

export default Q21Elevated;
