import { geoDistance } from "./geoDistance";

const point1 = {
  lat: 11.124,
  lng: -110.98,
};

const point2 = {
  lat: 15.213,
  lng: 20.12,
};

const point3_w = {
  latitude: 20,
  long: 21,
};

const point4_w = {
  lat: "12.213",
  lng: "23.546",
};

test("Distance between same points must be 0", () => {
  expect(geoDistance(point1, point1)).toBe(0);
});

test("Distance between same points must be calculated accurately", () => {
  expect(geoDistance(point1, point2)).toBe(13884.842587740884);
});

test("Point1 with wrong keys should throw error", () => {
  expect(() => {
    // @ts-ignore
    geoDistance(point3_w, point1);
  }).toThrow("Points must have valid lat and lng attributes");
});

test("Point2 with wrong keys should throw error", () => {
  expect(() => {
    // @ts-ignore
    geoDistance(point1, point3_w);
  }).toThrow("Points must have valid lat and lng attributes");
});

test("Points with wrong lat | lng types should throw error", () => {
  expect(() => {
    // @ts-ignore
    geoDistance(point4_w, point1);
  }).toThrow("Point-1 must have valid lat and lng attributes");
});

test("Points with wrong lat | lng types should throw error", () => {
  expect(() => {
    // @ts-ignore
    geoDistance(point1, point4_w);
  }).toThrow("Point-2 must have valid lat and lng attributes");
});
