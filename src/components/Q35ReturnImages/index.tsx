interface IQ35ReturnImagesProps {
    images: string[];
    size: number;
}

const Q35ReturnImages: React.FC<IQ35ReturnImagesProps> = ({ images, size }) => {
    return (
        <div className="d-flex">
            {images.map(image => (
                <div
                    key={image}
                    className=" m-3"
                    style={{
                        width: size,
                        height: size,
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                    }}
                />
            ))}
        </div>
    );
};

export default Q35ReturnImages;
