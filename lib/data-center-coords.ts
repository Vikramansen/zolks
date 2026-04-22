import { geoDistance } from "d3-geo";

export type DataCenterCity = {
  city: string;
  lat: number;
  lng: number;
};

export const DATA_CENTER_CITIES: DataCenterCity[] = [
  { city: "Ashburn", lat: 39.0437, lng: -77.4875 },
  { city: "New York", lat: 40.7128, lng: -74.006 },
  { city: "Toronto", lat: 43.6532, lng: -79.3832 },
  { city: "Montreal", lat: 45.5017, lng: -73.5673 },
  { city: "Sao Paulo", lat: -23.5505, lng: -46.6333 },
  { city: "Santiago", lat: -33.4489, lng: -70.6693 },
  { city: "Dublin", lat: 53.3498, lng: -6.2603 },
  { city: "London", lat: 51.5072, lng: -0.1276 },
  { city: "Frankfurt", lat: 50.1109, lng: 8.6821 },
  { city: "Paris", lat: 48.8566, lng: 2.3522 },
  { city: "Amsterdam", lat: 52.3676, lng: 4.9041 },
  { city: "Madrid", lat: 40.4168, lng: -3.7038 },
  { city: "Stockholm", lat: 59.3293, lng: 18.0686 },
  { city: "Warsaw", lat: 52.2297, lng: 21.0122 },
  { city: "Milan", lat: 45.4642, lng: 9.19 },
  { city: "Tel Aviv", lat: 32.0853, lng: 34.7818 },
  { city: "Cape Town", lat: -33.9249, lng: 18.4241 },
  { city: "Johannesburg", lat: -26.2041, lng: 28.0473 },
  { city: "Doha", lat: 25.2854, lng: 51.531 },
  { city: "Dubai", lat: 25.2048, lng: 55.2708 },
  { city: "Mumbai", lat: 19.076, lng: 72.8777 },
  { city: "Chennai", lat: 13.0827, lng: 80.2707 },
  { city: "Hyderabad", lat: 17.385, lng: 78.4867 },
  { city: "Bengaluru", lat: 12.9716, lng: 77.5946 },
  { city: "Singapore", lat: 1.3521, lng: 103.8198 },
  { city: "Jakarta", lat: -6.2088, lng: 106.8456 },
  { city: "Tokyo", lat: 35.6762, lng: 139.6503 },
  { city: "Seoul", lat: 37.5665, lng: 126.978 },
  { city: "Taipei", lat: 25.033, lng: 121.5654 },
  { city: "Sydney", lat: -33.8688, lng: 151.2093 },
  { city: "Melbourne", lat: -37.8136, lng: 144.9631 },
  { city: "Auckland", lat: -36.8509, lng: 174.7645 },
];

export function latLngToVector3(lat: number, lng: number, radius: number): [number, number, number] {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return [x, y, z];
}

export function cityPulseWeight(city: DataCenterCity): number {
  const origin: [number, number] = [0, 0];
  const location: [number, number] = [city.lng, city.lat];
  const dist = geoDistance(origin, location);
  return 1 / (0.35 + dist);
}
