interface IQ28OddEvenProps {
    value: number;
}

const Q28OddEven: React.FC<IQ28OddEvenProps> = ({ value }) => (
    <p>{value % 2 === 0 ? 'Par' : 'Ímpar'}</p>
);

export default Q28OddEven;
