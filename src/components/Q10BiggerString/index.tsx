interface IQ10BiggerStringProps {
    value: string;
    value1: string;
}

const Q10BiggerString: React.FC<IQ10BiggerStringProps> = ({
    value,
    value1,
}) => <>{value.length > value1.length ? value : value1} </>;

export default Q10BiggerString;
