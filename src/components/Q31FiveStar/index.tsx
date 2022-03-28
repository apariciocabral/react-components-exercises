import { useMemo } from 'react';
import { AiFillStar } from 'react-icons/ai';

interface IQ31FiveStarProps {
    score: number;
}

const Q31FiveStar: React.FC<IQ31FiveStarProps> = ({ score }) => {
    const stars = useMemo(
        () => [...Array(5)].map((_, index) => index < score),
        [score]
    );

    return (
        <div className="d-flex">
            {stars.map(star => (
                <div className={`text-${star ? 'warning' : 'muted'}`}>
                    <AiFillStar className="fs-4" />
                </div>
            ))}
        </div>
    );
};

export default Q31FiveStar;
