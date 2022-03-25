interface IQ15FirstUppercaseProps {
    value: string;
}

const Q15FirstUppercase: React.FC<IQ15FirstUppercaseProps> = ({ value }) => {
    const lower = value.toLowerCase().split(' ');
    for (let i = 0; i < lower.length; i += 1) {
        const d = lower[i];
        lower[i] = d[0].toUpperCase() + d.slice(1);
    }

    return <p>{lower.join(' ')}</p>;
};

export default Q15FirstUppercase;
