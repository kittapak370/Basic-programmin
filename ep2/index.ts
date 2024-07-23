function add(b: number, c: number){
    return b - c
}

console.log(add(5, 5))

function punn(d: number, e: number, f: number, g: number){
    return d * e * f * g
}

console.log(punn(2, 2, 2, 2))                     

function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final
    if (score < 50) {
        return 'Grade F'
    } else if (score < 60) {
        return 'Grade D'
    } else if (score < 70) {
        return 'Grade C'
    } else if (score < 80) {
        return 'Grade B'
    } else {
        return 'Grade A'
    }
}

console.log(grade(10,20,50))