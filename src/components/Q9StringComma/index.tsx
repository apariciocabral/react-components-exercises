interface IQ9StringCommaProps {
    value: number;
}

const Q9StringComma: React.FC<IQ9StringCommaProps> = ({ value }) => {
    const frase = [];

    for (let contador = 1; contador <= value; contador += 1) {
        frase.push('oi');
    }

    return <p>{frase.join(', ')}</p>;
};

export default Q9StringComma;
