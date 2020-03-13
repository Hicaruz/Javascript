const ARNm = ADN => {
    const data = [...ADN.toUpperCase()]
    for (const base of data) {
        if (!data.includes(base)) {
            return ""
        }
    }
    const bases_complementarias = { A: "U", U: "A", T: "A", G: "C", C: "G" }
    return data.map(base => bases_complementarias[base]).join("")
}
const Codon = (arn_mensajero = "") => {
    const starter = "AUG"
    const enders = ["UGA", "UAA", "UAG"]
    let codon;
    for (let k = 0; k < arn_mensajero.length; k++) {
        if (arn_mensajero.slice(k, k + 3) == starter) {
            codon = arn_mensajero.slice(k, arn_mensajero.length)
            break;
        }
    }
    for (let k = 0; k < arn_mensajero.length; k++) {
        if (enders.includes(codon.slice(k, k + 3))) {
            codon = codon.slice(0, k + 3)
        }
    }

    return codon
}
const ARNt = codon => {
    const anti_bases = { G: "C", C: "G", A: "U", U: "A" }
    const partes = []
    for (let k = 0; k < codon.length; k += 3) {
        const triplete = codon.slice(k, k + 3)
        const anti_codon = [...triplete].map(base => anti_bases[base])
        partes.push(anti_codon.join(""))
    }
    return partes.join("-")
}

const ADN2ARN = ADN => {
    const arnm = ARNm(ADN)
    if (!arnm.length) {
        console.error("La cadena esta vacia")
    }
    const codon = Codon(arnm)
    return ARNt(codon)
}

const ADN = "GTGGTACCACGACAGAGGAATTCAGTT"
// const arnm = ARNm(ADN)
// const codon = Codon(arnm)
// const arnt = ARNt(codon)

console.log(ADN2ARN(ADN))