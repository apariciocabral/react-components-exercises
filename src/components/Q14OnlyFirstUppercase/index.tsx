interface IQ14OnlyFirstUppercaseProps {
    value: string;
}

const Q14OnlyFirstUppercase: React.FC<IQ14OnlyFirstUppercaseProps> = ({
    value,
}) => <p>{value[0].toUpperCase() + value.slice(1).toLowerCase()}</p>;

export default Q14OnlyFirstUppercase;
