import { useState } from 'react';

const Q43PlusOneNum: React.FC = () => {
    const [plusOne, setPlusOne] = useState(0);

    return (
        <div>
            <span className="me-3" id="count">
                {plusOne}
            </span>

            <button
                type="submit"
                id="incrementor"
                onClick={() => setPlusOne(plusOne + 1)}
            >
                Adicionar
            </button>
        </div>
    );
};

export default Q43PlusOneNum;
