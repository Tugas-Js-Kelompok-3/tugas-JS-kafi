
// soal 3
function array(value) {
  const result = value.map(el =>{
      const newarr = ""
      return el += newarr
  })
  const split = result[3].split(',')
  result.pop()
  console.log(result,split.join(' '))
}
array(['hallo','nama','saya',['kahfi','khoerul',['kelas','11',['rpl','2']]]])    


// soal 4
const obj = {
    nama: "khoerul",
    kelas: "RPL 2",
    umur: 17,
    nikah: false,
    Hp: {
      nama: "Infinix hot 10s",
      spesifikasiHp: {
          chipset: "Snapdragon 720G",
          ram: "4 gb",
          rom: "128 GB",
          camera: "64mp"
          }
      }
    }
console.log(obj.Hp);