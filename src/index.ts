import { area, convert } from "./conversions";

const squareMeters = area.find((unit) => unit.unit === "meters²");
const acres = area.find((unit) => unit.unit === "acres");

console.log(`100 acres in square meters: ${convert(100, squareMeters, acres)}`);