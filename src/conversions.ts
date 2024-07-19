export const DIMENSIONS = [
    "distance",
    "area",
    "volume",
    "time",
    "mass",
    "data",
    "force",
    "word",
    "power",
    "energy",
    "temperature",
    "speed",
    "pressure",
    "angle",
];
export type Dimension = typeof DIMENSIONS[number];

export type Conversion = {
    units: string[];
    dimension: Dimension;
    ratio: number;
    offset?: number;
};

export type ConversionResult = {
    dimension: Dimension;
    from: string;
    to: string;
    input: number;
    converted: number;
}

export const conversions: Conversion[] = [
    {
        units: ["meter", "meters", "m"],
        ratio: 1,
        dimension: "distance"
    },
    {
        units: ["kilometer", "kilometers", "km"],
        ratio: 0.001,
        dimension: "distance"
    },
    {
        units: ["mile", "miles", "mi"],
        ratio: 0.000621371,
        dimension: "distance"
    },
    {
        units: ["yard", "yards", "yd"],
        ratio: 1.09361,
        dimension: "distance"
    },
    {
        units: ["foot", "feet", "ft"],
        ratio: 3.28084,
        dimension: "distance"
    },
    {
        units: ["inch", "inches", "in"],
        ratio: 39.3701,
        dimension: "distance"
    },
    {
        units: ["centimeter", "centimeters", "cm"],
        ratio: 100,
        dimension: "distance"
    },
    {
        units: ["millimeter", "millimeters", "mm"],
        ratio: 1000,
        dimension: "distance"
    },
    {
        units: ["nautical mile", "nautical miles", "nm"],
        ratio: 0.000539957,
        dimension: "distance"
    },
    {
        units: ["square meter", "square meters", "sq meter", "sq meters", "m²"],
        ratio: 1,
        dimension: "area"
    },
    {
        units: ["square kilometer", "square kilometers", "sq kilometer", "sq kilometers", "km²"],
        ratio: 0.000001,
        dimension: "area"
    },
    {
        units: ["hecatare", "hecatares", "ha"],
        ratio: 0.0001,
        dimension: "area"
    },
    {
        units: ["square mile", "square miles", "sq mile", "sq miles", "mi²"],
        ratio: 0.000000386102159,
        dimension: "area"
    },
    {
        units: ["acre", "acres"],
        ratio: 0.000247105381,
        dimension: "area"
    },
    {
        units: ["square yard", "square yards", "sq yard", "sq yards", "yd²"],
        ratio: 1.195990046,
        dimension: "area"
    },
    {
        units: ["square foot", "square feet", "sq foot", "sq feet", "ft²"],
        ratio: 10.763910417,
        dimension: "area"
    },
    {
        units: ["square inch", "square inches", "sq inch", "sq inches", "in²"],
        ratio: 1550.0031,
        dimension: "area"
    },
    {
        units: ["liter", "liters", "L"],
        ratio: 1000,
        dimension: "volume"
    },
    {
        units: ["milliliter", "milliliters", "mL"],
        ratio: 1000000,
        dimension: "volume"
    },
    {
        units: ["cubic meter", "cubic meters", "m³"],
        ratio: 1,
        dimension: "volume"
    },
    {
        units: ["cubic kilometer", "cubic kilometers", "km³"],
        ratio: 0.000000001,
        dimension: "volume"
    },
    {
        units: ["cubic foot", "cubic feet", "ft³"],
        ratio: 35.3147,
        dimension: "volume"
    },
    {
        units: ["cubic inch", "cubic inches", "in³"],
        ratio: 61023.7,
        dimension: "volume"
    },
    {
        units: ["gallon", "gallons", "gal"],
        ratio: 264.172,
        dimension: "volume"
    },
    {
        units: ["quart", "quarts", "qt"],
        ratio: 1056.69,
        dimension: "volume"
    },
    {
        units: ["pint", "pints", "pt"],
        ratio: 2113.38,
        dimension: "volume"
    },
    {
        units: ["fluid ounce", "fluid ounces", "fl oz"],
        ratio: 33814,
        dimension: "volume"
    },
    {
        units: ["second", "seconds", "s"],
        ratio: 1,
        dimension: "time"
    },
    {
        units: ["minute", "minutes", "min"],
        ratio: 1 / 60,
        dimension: "time"
    },
    {
        units: ["hour", "hours", "hr"],
        ratio: 1 / 3600,
        dimension: "time"
    },
    {
        units: ["day", "days"],
        ratio: 1 / 86400,
        dimension: "time"
    },
    {
        units: ["week", "weeks"],
        ratio: 1 / 604800,
        dimension: "time"
    },
    {
        units: ["month", "months"],
        ratio: 1 / 2628000,
        dimension: "time"
    },
    {
        units: ["year", "years", "yr"],
        ratio: 1 / 31536000,
        dimension: "time"
    },
    {
        units: ["millisecond", "milliseconds", "ms"],
        ratio: 1000,
        dimension: "time"
    },
    {
        units: ["gram", "grams", "g"],
        ratio: 1000,
        dimension: "mass"
    },
    {
        units: ["kilogram", "kilograms", "kg"],
        ratio: 1,
        dimension: "mass"
    },
    {
        units: ["pound", "pounds", "lbs"],
        ratio: 2.20462,
        dimension: "mass"
    },
    {
        units: ["ounce", "ounces", "oz"],
        ratio: 35.274,
        dimension: "mass"
    },
    {
        units: ["tonne", "tonnes", "t"],
        ratio: 0.001,
        dimension: "mass"
    },
    {
        units: ["byte", "bytes", "B"],
        ratio: 1,
        dimension: "data"
    },
    {
        units: ["kilobyte", "kilobytes", "KB"],
        ratio: 0.001,
        dimension: "data"
    },
    {
        units: ["megabyte", "megabytes", "MB"],
        ratio: 0.000001,
        dimension: "data"
    },
    {
        units: ["gigabyte", "gigabytes", "GB"],
        ratio: 0.000000001,
        dimension: "data"
    },
    {
        units: ["terabyte", "terabytes", "TB"],
        ratio: 0.000000000001,
        dimension: "data"
    },
    {
        units: ["petabyte", "petabytes", "PB"],
        ratio: 0.000000000000001,
        dimension: "data"
    },
    {
        units: ["newton", "newtons", "N"],
        ratio: 1,
        dimension: "force"
    },
    {
        units: ["pound-force", "pounds-force", "lbf"],
        ratio: 0.224809,
        dimension: "force"
    },
    {
        units: ["dyne", "dynes", "dyn"],
        ratio: 100000,
        dimension: "force"
    },
    {
        units: ["joule", "joules", "J"],
        ratio: 1,
        dimension: "energy"
    },
    {
        units: ["calorie", "calories", "cal"],
        ratio: 0.239006,
        dimension: "energy"
    },
    {
        units: ["kilocalorie", "kilocalories", "kcal"],
        ratio: 0.000239006,
        dimension: "energy"
    },
    {
        units: ["BTU", "BTUs"],
        ratio: 0.000947817,
        dimension: "energy"
    },
    {
        units: ["kelvin", "kelvins", "K"],
        ratio: 1,
        dimension: "temperature",
        offset: 273.15,
    },
    {
        units: ["°C", "degrees celsius", "degree celcius", "celcius" ],
        ratio: 1,
        dimension: "temperature"
    },
    {
        units: ["°F", "degrees fahrenheit", "degree fahrenheit", "fahrenheit"],
        ratio: 1.8,
        dimension: "temperature",
        offset: 32,
    },
    {
        units: ["mile per hour", "miles per hour", "mph"],
        ratio: 1,
        dimension: "speed"
    },
    {
        units: ["meter per second", "meters per second", "m/s"],
        ratio: 0.44704,
        dimension: "speed"
    },
    {
        units: ["kilometer per hour", "kilometers per hour", "km/h"],
        ratio: 1.60934,
        dimension: "speed"
    },
    {
        units: ["knot", "knots"],
        ratio: 0.868976,
        dimension: "speed"
    },
    {
        units: ["pascal", "pascals", "Pa"],
        ratio: 1,
        dimension: "pressure"
    },
    {
        units: ["atmosphere", "atmospheres", "atm"],
        ratio: 0.00000986923,
        dimension: "pressure"
    },
    {
        units: ["bar", "bars"],
        ratio: 0.00001,
        dimension: "pressure"
    },
    {
        units: ["millibar", "millibars", "mbar"],
        ratio: 0.01,
        dimension: "pressure"
    },
    {
        units: ["inch of mercury", "inches of mercury", "inHg"],
        ratio: 0.0002953,
        dimension: "pressure"
    },
    {
        units: ["millimeter of mercury", "millimeters of mercury", "mmHg"],
        ratio: 0.00750062,
        dimension: "pressure"
    },
    {
        units: ["radian", "radians", "rad"],
        ratio: 1,
        dimension: "angle"
    },
    {
        units: ["degree", "degrees", "°"],
        ratio: 57.2958,
        dimension: "angle"
    },
];

export const convert = (input: string): ConversionResult => {
    
    const pattern = /^(\d+\.?\d*) ([\w\s]+) in ([\w\s]+)$/;
    const match = input.match(pattern);
    if (!match) {
        throw new Error("Invalid input");
    }
    
    const value = parseFloat(match[1]);
    const from = match[2];
    const to = match[3];
    
    // guess the dimension
    const fromConversionOptions = conversions.filter(c => c.units.includes(from));
    if (fromConversionOptions.length === 0) {
        throw new Error(`Cannot match a from-unit for ${from}`);
    }

    const toConversionOptions = conversions.filter(c => c.units.includes(to));
    if (toConversionOptions.length === 0) {
        throw new Error(`Cannot match a to-unit for ${to}`);
    }
    
    const dimension = DIMENSIONS.find(d => {
        return fromConversionOptions.some(c => c.dimension === d) && toConversionOptions.some(c => c.dimension === d);
    })
    if (!dimension) {
        throw new Error("Cannot match a dimension between the two units");
    }

    // pick the correct units for this dimension
    const fromConversion = fromConversionOptions.find(c => c.dimension === dimension);
    const toConversion = toConversionOptions.find(c => c.dimension === dimension);

    // convert the value
    const fromOffset = fromConversion.offset || 0;
    const toOffset = toConversion.offset || 0;
    const converted = (((value - fromOffset) * toConversion.ratio) / fromConversion.ratio) + toOffset;

    return {
        dimension: dimension!,
        from: fromConversion.units[0],
        to: toConversion.units[0],
        input: value,
        converted
    };
}