
import derivative from "./derivative.js";
import { get_y } from "./calc.js"

export function newton_approximation(polynomial, x, epson) {
    let d = derivative(polynomial);
    if (!epson) {
        epson = 0.00000001;
    }
    let new_x = Math.random();
    let dif = Math.abs(x - new_x);
    while (dif >= epson) {
        new_x = x - (get_y(polynomial, x) / get_y(d, x))
        dif = Math.abs(x - new_x)
        x = new_x;
    }
    return x;
}
