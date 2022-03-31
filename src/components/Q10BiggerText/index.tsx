interface IQ10BiggerTextProps {
    value: string;
    value1: string;
}

const Q10BiggerText: React.FC<IQ10BiggerTextProps> = ({ value, value1 }) => (
    <>{value.length > value1.length ? value : value1} </>
);

export default Q10BiggerText;
