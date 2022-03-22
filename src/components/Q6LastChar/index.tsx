interface IQ6LastCharProps {
    value: string;
}

const Q6LastChar: React.FC<IQ6LastCharProps> = ({ value }) => (
    <>{value.charAt(value.length - 1)}</>
);

export default Q6LastChar;
