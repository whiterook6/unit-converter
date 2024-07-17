export type Conversion = {
    unit: string;
    ratio: number;
};

export const distance: Conversion[] = [{
    unit: "meters",
    ratio: 1
}, {
    unit: "kilometers",
    ratio: 0.001
}, {
    unit: "miles",
    ratio: 0.000621371
}, {
    unit: "yards",
    ratio: 1.09361
}, {
    unit: "feet",
    ratio: 3.28084
}, {
    unit: "inches",
    ratio: 39.3701
}, {
    unit: "centimeters",
    ratio: 100
}, {
    unit: "millimeters",
    ratio: 1000
}, {
    unit: "nautical miles",
    ratio: 0.000539957
}];

export const area: Conversion[] = [...distance.map((unit) => {
    return {
        unit: unit.unit + "²",
        ratio: unit.ratio ** 2
    };
}), ...[{
    unit: "hectares",
    ratio: 0.0001
}, {
    unit: "acres",
    ratio: 0.000247105
}]];

export const volume: Conversion[] = [...distance.map((unit) => {
    return {
        unit: unit.unit + "³",
        ratio: unit.ratio ** 3
    };
}), ...[{
    unit: "liters",
    ratio: 1000
}, {
    unit: "gallons",
    ratio: 264.172
}, {
    unit: "quarts",
    ratio: 1056.69
}, {
    unit: "pints",
    ratio: 2113.38
}, {
    unit: "cups",
    ratio: 4226.75
}, {
    unit: "fluid ounces",
    ratio: 33814
}]];

export const time: Conversion[] = [{
    unit: "seconds",
    ratio: 1
}, {
    unit: "minutes",
    ratio: 1 / 60
}, {
    unit: "hours",
    ratio: 1 / 3600
}, {
    unit: "days",
    ratio: 1 / 86400
}, {
    unit: "weeks",
    ratio: 1 / 604800
}, {
    unit: "months",
    ratio: 1 / 2628000
}, {
    unit: "years",
    ratio: 1 / 31536000
}, {
    unit: "milliseconds",
    ratio: 1000
}];

export const mass: Conversion[] = [{
    unit: "grams",
    ratio: 1
}, {
    unit: "kilograms",
    ratio: 0.001
}, {
    unit: "pounds",
    ratio: 0.00220462
}, {
    unit: "ounces",
    ratio: 0.035274
}, {
    unit: "tons",
    ratio: 0.000001
}, {
    unit: "metric tons",
    ratio: 0.000001
}];

export const convert = (value: number, from: Conversion, to: Conversion): number => {
    return value * from.ratio / to.ratio;
}