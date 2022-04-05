import { useState } from 'react';
import { ImLocation } from 'react-icons/im';
import GoogleMapReact from 'google-map-react';
import { MarkerStyles, TitleStyles } from './styles';

interface IMarkerProps {
    lat: number;
    lng: number;
}

const Marker: React.FC<IMarkerProps> = () => (
    <MarkerStyles>
        <ImLocation color="red" className="fs-3" />
    </MarkerStyles>
);

const Q41Maps: React.FC = () => {
    const [latitude, setLatitude] = useState(-22.5465);
    const [longitude, setLongitude] = useState(-44.365);
    const [coordinate, setCoordinate] = useState([latitude, longitude]);

    return (
        <div>
            <div className="mt-5">
                <TitleStyles className="align-items-center">
                    <h4 className="fw-bold">Latitude</h4>
                    <div className="mb-2">
                        <input
                            type="text"
                            className="form-control"
                            value={latitude}
                            onChange={e =>
                                setLatitude(parseInt(e.target.value, 10))
                            }
                        />
                    </div>
                    <h4>Longitude</h4>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={longitude}
                            onChange={e =>
                                setLongitude(parseInt(e.target.value, 10))
                            }
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setCoordinate([latitude, longitude])}
                        >
                            Pesquisar
                        </button>
                    </div>
                </TitleStyles>

                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: `${process.env.REACT_APP_GOOGLE_KEY}`,
                        }}
                        defaultCenter={{
                            lat: coordinate[0],
                            lng: coordinate[1],
                        }}
                        defaultZoom={15}
                        yesIWantToUseGoogleMapApiInternals
                    >
                        <Marker lat={coordinate[0]} lng={coordinate[1]} />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    );
};

export default Q41Maps;
