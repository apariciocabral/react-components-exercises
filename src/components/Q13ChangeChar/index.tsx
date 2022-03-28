interface IQ13ChangeCharProps {
    value: string;
    value1: string;
    value2: string;
}

const Q13ChangeChar: React.FC<IQ13ChangeCharProps> = ({
    value,
    value1,
    value2,
}) => <>{value.replaceAll(value1, value2)}</>;

export default Q13ChangeChar;
