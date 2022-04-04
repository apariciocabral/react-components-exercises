import axios from 'axios';
import { useCallback, useState } from 'react';

const api = axios.create();

const Q48Advice: React.FC = () => {
    const [showAdvice, setShowAdvice] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getAdvice = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await api.get('https://api.adviceslip.com/advice');
            const { advice } = response.data.slip;
            setShowAdvice(advice);
        } catch {
            setShowAdvice('');
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div>
            <span>
                {isLoading ? (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    showAdvice
                )}
            </span>
            <div>
                <button
                    className="btn btn-primary ms-3"
                    type="button"
                    onClick={getAdvice}
                >
                    Mostrar Conselho
                </button>
            </div>
        </div>
    );
};

export default Q48Advice;
