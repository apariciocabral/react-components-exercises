import { useState } from 'react';

const Q37ReceiveText: React.FC = () => {
    const [text, setText] = useState('');
    const [resultText, setResultText] = useState('');

    return (
        <>
            <div className="mb-3">
                <p className="form-label">Texto</p>
                <input
                    type="text"
                    className="form-control"
                    value={text}
                    onChange={event => setText(event.target.value)}
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="btn btn-primary mb-3"
                    onClick={() => setResultText(text)}
                >
                    Enviar
                </button>
            </div>
            <div>{resultText}</div>
        </>
    );
};

export default Q37ReceiveText;
