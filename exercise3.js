function carcurator(a, b, operator) {
    const numb1 = Number(a);
    const numb2 = Number(b);
    if (isNaN(numb1) || isNaN(numb2)) {
        return "Invalid input. Please provide valid numbers.";
    }
    switch (operator) {
        case "+":
            return numb1 + numb2;
        case "-":
            return numb1 - numb2;
        case "*":
            return numb1 * numb2
            case "/":
                if (numb1 === 0 || numb2 === 0) {
                    return "impossible to divide this number by 0"
                }
                return numb1 / numb2;
                defaut :
                return "error input operators";
            }
}
console.log(carcurator("100", "32", "-"));

