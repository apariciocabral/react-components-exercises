interface IQ9StringCommaProps {
    vezes: number;
}

const Q9StringComma: React.FC<IQ9StringCommaProps> = ({ vezes }) => {
    const frase = [];

    for (let contador = 1; contador <= vezes; contador += 1) {
        frase.push('oi');
    }

    return <p>{frase.join(', ')}</p>;
};

export default Q9StringComma;
