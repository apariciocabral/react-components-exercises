import { useState } from 'react';

const Q38SumInput: React.FC = () => {
    const [value, setValue] = useState(0);
    const [value1, setValue1] = useState(0);
    const [sum, setSum] = useState(0);
    const result = value + value1;

    return (
        <>
            <div className="mb-3">
                <p className="form-label">Primeiro Valor</p>
                <input
                    type="text"
                    className="form-control"
                    value={value}
                    onChange={ev => setValue(parseInt(ev.target.value, 10))}
                />
            </div>
            <div className="mb-3">
                <p className="form-label">Segundo Valor</p>
                <input
                    type="text"
                    className="form-control"
                    value={value1}
                    onChange={ev => setValue1(parseInt(ev.target.value, 10))}
                />
            </div>
            <div>
                <button
                    className="btn btn-primary mb-3"
                    type="button"
                    onClick={() => setSum(result)}
                >
                    Somar
                </button>
            </div>
            <input readOnly className="form-control" value={sum} />
        </>
    );
};

export default Q38SumInput;
