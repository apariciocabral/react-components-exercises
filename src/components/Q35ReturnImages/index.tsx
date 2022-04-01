interface IQ35ReturnImagesProps {
    urls: string[];
    size: number;
}

const Q35ReturnImages: React.FC<IQ35ReturnImagesProps> = ({ urls, size }) => {
    return (
        <div className="d-flex">
            {urls.map(url => (
                <img
                    className="m-3"
                    height={size}
                    width={size}
                    src={url}
                    alt="foto"
                />
            ))}
        </div>
    );
};

export default Q35ReturnImages;
