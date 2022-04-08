interface IQ35ReturnImagesProps {
    images: string[];
    size: number;
}

const Q35ReturnImages: React.FC<IQ35ReturnImagesProps> = ({ images, size }) => {
    return (
        <div className="d-flex">
            {images.map(image => (
                <div
                    className="m-3"
                    background-Image={image}
                    style={{
                        width: size,
                        height: size,
                    }}
                />
            ))}
        </div>
    );
};

export default Q35ReturnImages;
