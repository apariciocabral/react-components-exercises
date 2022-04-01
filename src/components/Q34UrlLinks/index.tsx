import { ExternalLinksType } from '../../@types/ExternalLinks';

type NewType = ExternalLinksType;

interface IQ34UrlLinksProps {
    oneArray: NewType[];
}

const Q34UrlLinks: React.FC<IQ34UrlLinksProps> = ({ oneArray }) => {
    return (
        <ul>
            {oneArray.map(item => (
                <li key={item.label}>
                    <a href={item.url} target="_blank" rel="noreferrer">
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Q34UrlLinks;
