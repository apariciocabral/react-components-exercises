import { useCallback, useState } from 'react';
import axios from 'axios';

const api = axios.create({ baseURL: 'https://pokeapi.co/api/v2/pokemon' });

const Q49Pokemon: React.FC = () => {
    const [pokemon, setPokemon] = useState('');
    const [pokemonPic, setPokemonPic] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const getPokemon = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await api.get(`/${pokemon}`);
            const { front_default: frontDefault } = response.data.sprites;
            setPokemonPic(frontDefault);
        } catch {
            setPokemon('');
        } finally {
            setIsLoading(false);
        }
    }, [pokemon]);

    return (
        <div>
            {isLoading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <img src={pokemonPic} alt="Pokemon" />
            )}
            <select
                className="form-select mb-3"
                onChange={e => setPokemon(e.target.value)}
            >
                <option value="">Escolha seu Pokemon</option>
                <option value="charmander">Charmander</option>
                <option value="squirtle">Squirtle</option>
                <option value="caterpie">Caterpie</option>
                <option value="pidgey">Pidgey</option>
                <option value="bulbasaur">Bulbasaur</option>
            </select>
            <button
                type="button"
                className="btn btn-primary"
                onClick={getPokemon}
            >
                Escolher
            </button>
        </div>
    );
};

export default Q49Pokemon;
