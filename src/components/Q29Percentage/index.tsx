interface IQ29PercentageProps {
    value: number;
    value1: number;
}

const Q29Percentage: React.FC<IQ29PercentageProps> = ({ value, value1 }) => (
    <p>{(value / value1) * 100}%</p>
);

export default Q29Percentage;
