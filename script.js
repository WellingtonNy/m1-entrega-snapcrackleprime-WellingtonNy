function primo(num) {
    let divisores = 0
    for (let i = 1; i <= num; i++)
        if (num % i == 0) {
            divisores++
        }
    if (divisores == 2) {
        return "Prime"
    } else {
        return "NotPrime"
    }
}
console.log(primo(7));



function snapCrackle(maxValue) {
    let string = ""
    for (let i = 1; i <= maxValue; i++) {
        if (i % 5 === 0 && i % 2 === 1 && primo(i) == "Prime") {
            string += "SnapCracklePrime, "
        }
        else if (i % 5 === 0 && primo(i) == "Prime") {
            string += "CracklePrime, "
        }
        else if (i % 2 === 1 && primo(i) == "Prime") {
            string += "SnapPrime, "
        }

        else if (primo(i) == "Prime") {
            string += "Prime, "
        }
        else if (i % 5 === 0 && i % 2 === 1) {
            string += "SnapCrackle, "
        }
        else if (i % 5 === 0) {
            string += "Crackle, "
        }
        else if (i % 2 === 1) {
            string += "Snap, "
        }

        else if (i % 2 === 0) {
            string += i + ", "
        }
    }
    return string.slice(0, -2)
}
console.log(snapCrackle(15));
