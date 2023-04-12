import styles from './styles.module.scss';

// mercator projection
function latLngToXY(lat: number, lng: number) {
  const x = 0.5 + lng / 360;
  const siny = Math.sin(lat * (Math.PI / 180));
  const y = 0.5 - (0.5 * Math.log((1 + siny) / (1 - siny))) / (2 * Math.PI);
  return { x, y };
}

// map.svg is cropped to the nearest land from all sides. We have to manually adjust
// bounding box of the world map for coordinates conversion to work correctly
const CROP = {
  nw: latLngToXY(83.64, -169),
  se: latLngToXY(-58.6, 190.35)
};

function cropped({ x, y }: { x: number; y: number }): { x: number; y: number } {
  const w = CROP.se.x - CROP.nw.x;
  const h = CROP.se.y - CROP.nw.y;
  const croppedX = (x - CROP.nw.x) / w;
  const croppedY = (y - CROP.nw.y) / h;
  return { x: croppedX, y: croppedY };
}

export interface MapPinProps {
  lat: number;
  lng: number;
  label: string;
}

export const MapPin = ({ lat, lng, label }: MapPinProps) => {
  const { x, y } = cropped(latLngToXY(lat, lng));
  const left = `${x * 100}%`;
  const top = `${y * 100}%`;

  return <div className={styles.pin} style={{ left, top }} title={label} />;
};
