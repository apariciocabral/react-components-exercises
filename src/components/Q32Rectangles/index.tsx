import { useEffect } from 'react';

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
    const rectangleArray = [] as number[];

    const getBuildRectanglesArray = (): void => {
        for (let i = 1; i <= x; i += 1) {
            rectangleArray.push(i);
        }
    };

    useEffect(() => {
        getBuildRectanglesArray();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="d-flex">
            {rectangleArray.map(index => (
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
