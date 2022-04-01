import { useCallback, useState } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws',
});

const Q46SearchCep: React.FC = () => {
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getAddress = useCallback(async () => {
        try {
            setIsLoading(true);
            const { data } = await api.get(`/${cep}/json`);
            const { logradouro, bairro, localidade, uf } = data;
            setAddress(`${logradouro}, ${bairro}, ${localidade}, ${uf}`);
        } catch {
            setAddress('Não foi possível encontrar seu endereço');
        } finally {
            setIsLoading(false);
        }
    }, [cep]);

    return (
        <div className="m-3 d-flex flex-column">
            <div className="d-flex">
                <div style={{ width: 200 }}>
                    <input
                        type="search"
                        className="form-control"
                        onChange={e => setCep(e.target.value)}
                    />
                </div>

                <button
                    type="button"
                    className="btn btn-primary ms-3"
                    onClick={getAddress}
                >
                    Pesquisar
                </button>
            </div>
            <span className="mt-3">
                {isLoading ? (
                    <p className="placeholder-glow">
                        <span className="placeholder col-12" />
                    </p>
                ) : (
                    address
                )}
            </span>
        </div>
    );
};

export default Q46SearchCep;
