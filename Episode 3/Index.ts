function helloworld() {

  console.log ("สวัสดีครับ")
}

helloworld ()

function helloworld(name: string) {
  console.log (name)
}

helloworld ('punn')

function getPi() {
  return 3.14 
}
console.log(getPi())



function st(bname: string, cname: string) {

  if (bname === 'mix' && cname === 'zane'){
    console.log ('เริ่มการสอน')
  } else {
    console.log ('ไม่สอน')
  }
}

st ('mix', 'zane')


function st(dname: string, ename: string, fname: string) {
  
  if (!(fname === 'mix' ename === 'zane' fname === 'punn')) {
    console.log ('พร้อมเรียน')
  } else {
    console.log ('ยังไม่พร้อม
  }
}
