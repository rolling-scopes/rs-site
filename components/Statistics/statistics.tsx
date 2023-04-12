import { Map } from './map';
import { MapPin, MapPinProps } from './map-pin';

interface StatisticsProps {
  locations: MapPinProps[];
}

export const Statistics = ({ locations }: StatisticsProps) => (
  <section className="bg-night-900">
    <Map>
      {locations.map(({ lat, lng, label }) => (
        <MapPin key={label} lat={lat} lng={lng} label={label} />
      ))}
    </Map>
  </section>
);
