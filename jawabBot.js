const pertanyaan  = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")
let init = 0


const botSay = (data) => {
    return [ 
        "Perkenalkan saya gamcutz bot, siapa nama kamu?" ,            
        `Halo ${data?.nama}, berapa usia kamu?` ,
        `Ohhh ${data?.usia}, btw hobi kamu apa?` ,
        `Wuihh sama dong, aku juga suka ${data?.hobi}, oiyaa kamu udah punya pacar?`,
        `ohhh ${data?.pacar}, ya udahh itu aja sih yang mau aku tanya, udahan ye?`,
        ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart(){
    if (jawaban.value.length < 1 ) {
        return alert('silahkan isi terlebih dahulu')
    }
    init++
    if (init == 1) {
       botDelay({nama: jawaban.value})
    } else if (init == 2) {
        botDelay({usia: jawaban.value})
    } else if (init == 3) {
        botDelay({hobi: jawaban.value})
    } else if (init == 4) {
        botDelay({pacar: jawaban.value}) 
    } else if (init == 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, 1250);
    userData.push(jawaban.value)
    jawaban.value = ""
}
        
    

function finishing() {
    pertanyaan.innerHTML = `Thank u udah mampir ${userData[0]}, walaupun hanya sementara 😊, kali - kali kita main ${userData[2]}`
    
}

function botEnd() {
    alert(`Terimakasih ${userData[0]} sudah berkunjung, anda di arahkan ke halaman utama`)
    window.location.reload()
    
}
    