interface IQ9StringCommaProps {
    value: string;
    amount: number;
}

const Q9StringComma: React.FC<IQ9StringCommaProps> = ({ value, amount }) => {
    const phrase = [];

    for (let i = 1; i <= amount; i += 1) {
        phrase.push(value);
    }

    return <p>{phrase.join(', ')}</p>;
};

export default Q9StringComma;
