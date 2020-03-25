# geo-distance-helper
Get distance between two points in kilometers, nautical miles

## API

Args              | Type     | Required | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
point1  | {lat: Float, lng: Float} | true | - | Point1 coordinates
point2  | {lat: Float, lng: Float} | true | - | Point2 coordinates
unit  | string | false | 'K' | 'K': Kilometers, 'N': Nautical miles

## Example Usage

```
import geoDistance from 'geo-distance-helper';
// const geoDistance = require('geo-distance-helper');

const point1 = {lat: 36, lng: 42};
const point2 = {lat: 64, lng: 21};

// distance in kilometers
const distance = geoDistance(point1, point2);

// distance in nautical miles
const distance = geoDistance(point1, point2, 'N');```
