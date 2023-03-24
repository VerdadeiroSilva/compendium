import { get_y } from "./calc.js";
export function secant_approximation(polynomial, x0, x1, epson) {
    let dif = Math.abs(x0 - x1)
    while (dif >= epson) {
        let new_x = x1 - (get_y(polynomial, x0) * (x1 - x0) / (get_y(polynomial, x1) - get_y(polynomial, x0)))
        dif = Math.abs(x1, new_x);
        x0 = x1;
        x1 = new_x;
    }
    return new_x;
}