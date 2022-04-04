import axios from 'axios';
import { useCallback, useState } from 'react';

const api = axios.create();

const Q47DolToReal: React.FC = () => {
    const [dollar, setDollar] = useState(0);
    const [result, setResult] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const convertDol = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await api.get(
                'https://economia.awesomeapi.com.br/json/last/USD-BRL'
            );
            const { bid } = response.data.USD;
            console.log('bid', bid);
            setResult(dollar * parseFloat(bid));
        } catch {
            setResult(0);
        } finally {
            setIsLoading(false);
        }
    }, [dollar]);

    return (
        <div>
            <input
                className="m-3"
                type="number"
                onChange={e => setDollar(parseInt(e.target.value, 10))}
            />
            <span>
                <b>R$ </b>
                {isLoading ? (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    result
                )}
            </span>
            <div>
                <button
                    className="btn btn-primary ms-3"
                    type="button"
                    onClick={convertDol}
                >
                    Converter
                </button>
            </div>
        </div>
    );
};

export default Q47DolToReal;
