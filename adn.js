const ARNm = (ADN = "") => {
    const data = [...ADN.toUpperCase()]
    const bases_complementarias = { A: "U", U: "A", T: "A", G: "C", C: "G" }
    for (const base of data) {
        if (!Object.keys(bases_complementarias).includes(base)) {
            throw new Error(`"${base}" no es un valor aceptado`)
        }
    }
    return data.map(base => bases_complementarias[base]).join("")
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
const findCodon = (input = "") => {
    let arn_mensajero = input.replace(/-/g, '')
    const starter = "AUG"
    const enders = ["UGA", "UAA", "UAG"]
    let codon;
    for (let k = 0; k < arn_mensajero.length; k++) {
        if (arn_mensajero.slice(k, k + 3) == starter) {
            codon = arn_mensajero.slice(k, arn_mensajero.length)
            break;
        }
    }
    for (let k = 3; k < arn_mensajero.length; k++) {
        if (enders.includes(codon.slice(k, k + 3))) {
            codon = codon.slice(0, k + 3)
        }
    }

    return codon
}

const findPeptidos = (input = "") => {
    const arnm = []
    for (let k = 0; k < input.length; k += 3) {
        arnm.push(input.slice(k, k + 3))
    }
    const result = []

    const codon = arnm.map(v => [...v])
    const table = {
        U: {
            U: {
                U: "Phe",
                C: "Phe",
                A: "Leu",
                G: "Leu"
            },
            C: {
                U: "Ser",
                C: "Ser",
                A: "Ser",
                G: "Ser"
            },
            A: {
                U: "Tyr",
                C: "Tyr",
                A: "Stop",
                G: "Stop"
            },
            G: {
                U: "Cys",
                C: "Cys",
                A: "Stop",
                G: "Trp"
            }
        },
        C: {
            U: {
                U: "Leu",
                C: "Leu",
                A: "Leu",
                G: "Leu"
            },
            C: {
                U: "Pro",
                C: "Pro",
                A: "Pro",
                G: "Pro"
            },
            A: {
                U: "His",
                C: "His",
                A: "Gin",
                G: "Gin"
            },
            G: {
                U: "Arg",
                C: "Arg",
                A: "Arg",
                G: "Arg"
            }
        },
        A: {
            U: {
                U: "lle",
                C: "lle",
                A: "lle",
                G: "Met"
            },
            C: {
                U: "The",
                C: "The",
                A: "The",
                G: "The"
            },
            A: {
                U: "Asn",
                C: "Asn",
                A: "Lys",
                G: "Lys"
            },
            G: {
                U: "Ser",
                C: "Ser",
                A: "Arg",
                G: "Arg"
            }
        },
        G: {
            U: {
                U: "Val",
                C: "Val",
                A: "Val",
                G: "Val"
            },
            C: {
                U: "Ala",
                C: "Ala",
                A: "Ala",
                G: "Ala"
            },
            A: {
                U: "Asp",
                C: "Asp",
                A: "Giu",
                G: "Giu"
            },
            G: {
                U: "GLy",
                C: "GLy",
                A: "GLy",
                G: "GLy"
            }
        },
    }
    for (dimensions of codon) {
        const [x, y, z] = dimensions
        const peptido = (x && y && z) ? table[x][y][z] : "Pnd"
        result.push(peptido)
    }
    return result.join("-")
}
const ADN2ARN = ADN => {
    const arnm = ARNm(ADN)
    if (!arnm.length) {
        throw new Error("La cadena esta vacia")
    }
    const codon = findCodon(arnm)
    return ARNt(codon)
}
const allAboutIt = (adn = "") => {
    const arnm = ARNm(adn)
    if (!arnm.length) {
        throw new Error("La cadena esta vacia")
    }
    const codon = findCodon(arnm)
    const arnt = ARNt(codon)
    const peptidos = findPeptidos(codon)
    return {
        arnm, arnt, codon, peptidos
    }
}

exports = {
    ARNm,
    ARNt,
    findCodon,
    findPeptidos,
    ADN2ARN,
    allAboutIt
}
