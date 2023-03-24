import { determinant } from "./algebra_utils"

export function isPoint(a) {
    if (a.x && a.y) {
        return true
    }
    else {
        return false
    }
}

export function isLinear(a, b) {
    if (isPoint(a) && isPoint(b) && (a.x !== b.x || a.y !== b.y)) {
        return true
    }
    else {
        return false
    }
}

export function isColinear(a, b, c) {
    if(isPoint(a) && isPoint(b) && isPoint(c)){
        let matrix = [Array(a.x, a.y, 1), Array(b.x, b.y, 1), Array(c.x, c.y, 1)]
        let det = determinant(matrix)
        if (det === 0) return true;
        else return false;
    }
    else return false;
}