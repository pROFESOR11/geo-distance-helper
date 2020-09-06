export type GeoPoint = {
  lat: number;
  lng: number;
  [key: string]: any;
};

export function geoDistance(
  point1: GeoPoint,
  point2: GeoPoint,
  unit: "K" | "N" = "K"
): Number {
  const { lat: lat1 = undefined, lng: lng1 = undefined } = point1;
  const { lat: lat2 = undefined, lng: lng2 = undefined } = point2;

  if (!lat1 || !lng1 || !lat2 || !lng2) {
    throw new Error("Points must have valid lat and lng attributes");
  }

  if (typeof lat1 != "number" || typeof lng1 != "number") {
    throw new Error("Point-1 must have valid lat and lng attributes");
  }
  if (typeof lat2 != "number" || typeof lng2 != "number") {
    throw new Error("Point-2 must have valid lat and lng attributes");
  }
  if (lat1 === lat2 && lng1 === lng2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lng1 - lng2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === "K") {
      dist = dist * 1.609344;
    }
    if (unit === "N") {
      dist = dist * 0.8684;
    }
    return dist;
  }
}
