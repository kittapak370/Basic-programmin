const score : number []= [10,23,26,30,33]

let sum: number = 0

for (let i = 0; i < score.length; i++) {
    sum = sum + score[i]
}

let avg = sum / score.length

console.log("total: ", sum)
console.log("Avg: ", avg)

const fullname: string = "เซน,เบล,รุ้ง,สร,เวฟ"

console.log(fullname.split(' ')[1])

console.log (fullname.slice (1,fullname.indexOf(' ')))

const animal: string = "กวาง*ช้าง*ม้า*วัว"

const AnimalToArray: string[] = animal.split('*')

console.log(animal)
console.log(AnimalToArray)

const animal: string = "กวาง*ช้าง*ม้า*วัว"

const AnimalToArray: string[] = animal.split('*')

console.log("ตั้งต้น", AnimalToArray)

AnimalToArray.pop()

console.log("เอาตัวสุดท้ายออก:", AnimalToArray)

AnimalToArray.push('ไดโนเสาร์')

console.log("ใส่ต่อท้าย", AnimalToArray)

AnimalToArray.shift()

console.log("เอาตัวหน้าออก", AnimalToArray)

AnimalToArray.unshift('หมูกินรำ')

console.log ("ใส่ตัวหน้า", AnimalToArray)



const me = {
    firstname: 'kittapak',
    lastname: 'kambudda',
    age: '18',
    numberphone:'0991955169',
}