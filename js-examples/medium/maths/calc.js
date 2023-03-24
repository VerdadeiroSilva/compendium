
export function get_y(polynomial, x) {
    let y = 0;
    let degree = polynomial.length - 1;
    polynomial.forEach((factor, index) => {
        if (degree === index) {
            y += factor;
        }
        else {
            y += factor * Math.pow(x, degree - index);
        }
    })
    return y
}
