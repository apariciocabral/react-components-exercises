import { useState } from 'react';

const Q44ChangeColorText: React.FC = () => {
    const [text, setText] = useState('');
    const [color, setColor] = useState('');

    return (
        <>
            <div>
                <span style={{ color }}>{text}</span>
            </div>
            <div className="mb-2">
                <input
                    type="text"
                    value={text}
                    onChange={event => setText(event.target.value)}
                />
            </div>
            <div>
                <button
                    type="button"
                    className="btn btn-danger me-2"
                    onClick={() => setColor('red')}
                >
                    Vermelho
                </button>
                <button
                    type="button"
                    className="btn btn-success mx-2"
                    onClick={() => setColor('green')}
                >
                    Verde
                </button>
                <button
                    type="button"
                    className="btn btn-primary mx-2"
                    onClick={() => setColor('blue')}
                >
                    Azul
                </button>
                <button
                    type="button"
                    className="btn btn-warning mx-2"
                    onClick={() => setColor('yellow')}
                >
                    Amarelo
                </button>
                <button
                    type="button"
                    className="btn btn-dark mx-2"
                    onClick={() => setColor('black')}
                >
                    Preto
                </button>
            </div>
        </>
    );
};

export default Q44ChangeColorText;
