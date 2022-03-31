interface IQ12LetAndNumProps {
    position: number;
    word: string;
}

const Q12LetAndNum: React.FC<IQ12LetAndNumProps> = ({ position, word }) => (
    <p>{position >= word.length ? 'Inválido' : word.charAt(position)}</p>
);

export default Q12LetAndNum;
