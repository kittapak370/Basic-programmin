function size(Size: string) {
    switch (Size) {
        case ('S'):
            console.log ('ผอม')
            break
        case ('M'):
            console.log ('ผอม')
            break
        case ('L'):
            console.log ('ท้วม')
            break
        case ('XL'):
            console.log ('อ้วน')
            break
        case ('2XL'):
            console.log ('อ้วน')
            break
            
            default: 
            console.log ('กกกกกก')
            break
    }
}

function Manage(a: number) {
    const x = a.toLocaleString()
    return x
}
console.log(Manage(30000))

function mfane (sto: string, indexs: string) {
    if (sto.includes(indexs)) {
        console.log(sto.indexOf(indexs))
    } else {
        console.log('ไม่พบคำที่ค้นหา')
    }
}

mfane ('อยากนอนไหม', 'นอน')