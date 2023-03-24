import { determinant } from "./algebra_utils.js";
import { isPoint, isColinear } from "./axioms.js";

//Calculate the euclidean distance between points 'a' and 'b', if 'b' not present, between a and (0,0)
export function euclidean_distance(a, b) {
    if (!a && !b) return 0;
    else if (!isPoint(a)) {
        throw new Error('not-a-point');
    }
    if (a && !b) {
        let b = {
            x: 0,
            y: 0
        }
    }
    return Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2))
}

//Return the two nearest points to the target, within an pointArray
export function two_nearest(target, pointArray) {
    let min = euclidean_distance(target, pointArray[0]);
    let res = [pointArray[0]];
    pointArray.forEach((point) => {
        if (euclidean_distance(point, target) < min) {
            res.push(point);
        }
    })
    return res.slice(-2);
}

//Calculate the euclidean area inside three points
export function triangle_area(a, b, c) {
    let matrix = [Array(a.x, a.y, 1), Array(b.x, b.y, 1), Array(c.x, c.y, 1)];
    console.log(matrix);
    return determinant(matrix) / 2;
}

//Calculate the euclidean area of a polygon represented by an pointArray.
//Decompose the polygon into triangles
export function polygon_area(pointArray) {
    if (pointArray.length < 3) return 0;
    if (pointArray.length === 3) {
        if (!isColinear(pointArray)) return triangle_area(pointArray)
        else return 0;
    }
    if (pointArray.length === 4) {
        return triangle_area(pointArray.slice(0, 3)) +
            triangle_area(two_nearest(pointArray[3], pointArray.slice(4)))
    }
    else {
        return triangle_area(pointArray.slice(0, 3)) + polygon_area(pointArray.slice(3))
    }
}