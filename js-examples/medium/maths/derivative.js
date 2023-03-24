export default function derivative(polynomial) {
    let degree = polynomial.length - 1
    if (degree === 0) return 0;
    else {
        let derivative_equation = [];

        polynomial.forEach((factor, index) => {
            if (degree == index) derivative_equation.push(null);
            else derivative_equation.push(factor * (degree - index));
        })
        return derivative_equation.slice(0, -1);
    }
}
