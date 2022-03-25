interface IQ20ElevatedByTwoProps {
    value: number;
}

const Q20ElevatedByTwo: React.FC<IQ20ElevatedByTwoProps> = ({ value }) => (
    <p>{value ** 2}</p>
);

export default Q20ElevatedByTwo;
