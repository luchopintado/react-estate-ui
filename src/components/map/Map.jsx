import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

const position = [
    // -12.059615,
    // -77.041535,
    52.4797,
    -1.90269,
];

function Map({ items }) {
    return (
        <MapContainer center={position} zoom={7} scrollWheelZoom={false} className="map">
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
            items.map((item) => {
                return <Pin key={`pin-${item.id}`} item={item} />;
            })
        }
    </MapContainer>
    )
}

export default Map;
