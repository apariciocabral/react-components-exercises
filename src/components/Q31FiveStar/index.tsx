import { useMemo } from 'react';
import { AiFillStar } from 'react-icons/ai';

interface IQ31FiveStarProps {
    amount: number;
}

export const Q31FiveStar: React.FC<IQ31FiveStarProps> = ({ amount }) => {
    const priceArray = useMemo(
        () => [...Array(5)].map((_, index) => index < amount),
        [amount]
    );

    return (
        <ul>
            <li className="d-flex">
                {priceArray.map(price => (
                    <div className={`text-${price ? 'warning' : 'muted'}`}>
                        <AiFillStar className="fs-4" />
                    </div>
                ))}
            </li>
        </ul>
    );
};
