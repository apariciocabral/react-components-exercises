interface IQ30ZeroToHundredProps {
    value: number;
}

const Q30ZeroToHundred: React.FC<IQ30ZeroToHundredProps> = ({ value }) => {
    let count = 0;
    for (let i = 0; i <= 100; i += 1) {
        if (i % 10 === value) {
            count += 1;
        }
        if (Math.trunc(i / 10) === value) {
            count += 1;
        }
    }
    return <span>{count}</span>;
};

export default Q30ZeroToHundred;
