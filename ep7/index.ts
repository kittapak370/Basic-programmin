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
    firstname: 'ufa888',
    lastname: 'tumjaibet',
    age: '30',
    currentaddressnumber: '1001',
    village: '1',
    road: 'utopian',
    subdistrict: 'mollow',
    district: 'Utopian1',
    province: 'tungjask',
    zipcode: '12345',
    Tel : '0999999999',
    numberphone:'0990000',
    email: 'user888@hotmail.com',
}

const aboutme = {
    firstname: 'ufa888',
    lastname: 'tumjaibet',
    age: '30',
    currentaddressnumber: '1001',
    village: '1',
    road: 'utopian',
    subdistrict: 'mollow',
    district: 'Utopian1',
    province: 'tungjask',
    zipcode: '12345',
    Tel : '0999999999',
    numberphone:'0990000',
    email: 'user888@hotmail.com',
    bestfriend : {
        bFriendname : 'atipat',
        blastname : 'lebron',
        btitle : 'Dekpre1',
    }
}
console.log(aboutme.bestfriend.btitle)

const myFriend = [{
    firstname: 'atipat',
    lastname: 'le del',
    AKA: 'superman',
    age: 18
}, {
    firstname: 'kittapak',
    lastname: 'kambudda',
    AKA: 'mairu',
    age: '18',
}, {
    fistname: 'Time',
    lastname: 'tai',
    AKA: 'Superman',
    age: 19
}, {
    firstname: 'Forthlee',
    lastname: 'lee01',
    AKA: 'Supergirl',
    age: 20
}]

console.log(myFriend[2].firstname)

const MyfriendAKA= myFriend.map(function(element, index){
    return ({
        firstname: element.firstname,
        AKA: element.AKA
    })
})

