// const obj = { width: 10, height: 15 };
// const area = obj.width * obj.heigth;

// console.log(area);

// const add = (a: number, b: number): number => {
//     return a + b;
// }

// console.log(add(3, 4))
// console.log(add(3, "drew"));

// type Point = {
//     x: number,
//     y: number,
//     z?: number,
// }

// const xyPoint: Point = {x: 500, y: 70}
// const point: Point = {x: 50, y: 700, z: 600}

// const options = {
//     fullPage: true,
//     x: 70,
//     y: 90,
//     name: "Andrew",
// }

// const screenshot = (coordinates: Point, options: Record<string, unknown>) => {
//     // do some stuff
// }

// screenshot(point, options);

import { Variable } from "./types"

// equivalent to string[]
type StringArray = {
    [index: number]: string,
}

const arr: StringArray = ["Andrew", "Khadder"]

type ResponseType = {
    [variableID: string]: Variable,
    meta: Variable
}

const response: ResponseType = {
    "VariableID87654": {
        "name": "blue-400",
        "value": "#563536"
    },
    "VariableID:667654": {
        "name": "blue-300",
        "value": "#563996"
    },
    "VariableID:55654": {
        "name": "blue-200",
        "value": "#560036"
    },
}