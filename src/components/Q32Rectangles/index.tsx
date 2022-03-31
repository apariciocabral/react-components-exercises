import { useMemo } from 'react';

interface IQ32RectanglesProps {
    x: number;
    width: number;
    height: number;
    color: string;
}

const Q32Rectangles: React.FC<IQ32RectanglesProps> = ({
    x,
    width,
    height,
    color,
}) => {
    const rectangles = useMemo(() => {
        const r = [];
        for (let i = 1; i <= x; i += 1) {
            r.push(i);
        }
        return r;
    }, [x]);

    return (
        <div className="d-flex">
            {rectangles.map(index => (
                <div
                    key={index}
                    className="m-2"
                    style={{ height, width, backgroundColor: color }}
                />
            ))}
        </div>
    );
};

export default Q32Rectangles;
