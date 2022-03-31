interface IQ11IntersectionProps {
    value: string;
    value1: string;
}

const Q11Intersection: React.FC<IQ11IntersectionProps> = ({
    value,
    value1,
}) => <p>{value.includes(value1) ? 'Sim' : 'Não'}</p>;

export default Q11Intersection;
