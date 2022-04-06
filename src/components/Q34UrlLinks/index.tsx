import { ExternalLinkType } from '../../@types/ExternalLink';

interface IQ34UrlLinksProps {
    images: ExternalLinkType[];
}

const Q34UrlLinks: React.FC<IQ34UrlLinksProps> = ({ images }) => (
    <ul>
        {images.map(image => (
            <li key={image.label}>
                <a href={image.url} target="_blank" rel="noreferrer">
                    {image.label}
                </a>
            </li>
        ))}
    </ul>
);

export default Q34UrlLinks;
