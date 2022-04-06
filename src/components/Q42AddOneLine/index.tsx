import { useCallback, useState } from 'react';

const Q42AddOneLine: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [otherLines, setOtherLines] = useState<string[]>([]);

    const addNewLine = useCallback(() => {
        setOtherLines([...otherLines, inputText]);
    }, [inputText, otherLines]);

    return (
        <>
            <div className="mb-2">
                <input
                    type="text"
                    className="form-control"
                    value={inputText}
                    onChange={event => setInputText(event.target.value)}
                />
            </div>
            <div>
                <button
                    type="button"
                    className="btn btn-primary mb-2"
                    onClick={() => addNewLine()}
                >
                    Add Line
                </button>
            </div>
            {otherLines.map((otherLine, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <p key={index}>{otherLine}</p>
            ))}
        </>
    );
};

export default Q42AddOneLine;
