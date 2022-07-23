const obj = [
    {
        "nome" : "Cunha",
        "idade" : 25,
        "esta_empregado" : false,
        "detalhes_empregos" : {
            "profissao_procurada" : "programação",
            "o_que_sabes" : "Javascript + html + css + react; Python + django; SQL; GIT; ",
            "vontade_de_aprender" : true,
            "empresas_desejadas" : "A que trouxer felicidade"
        },
        "hobies" : ["Estudar","Programar","Jogar","Aprender","Exercicio fisico"]
    },{
        "nome" : "Bea",
        "idade" : 21,
        "esta_empregado" : true,
        "detalhes_empregos" : {
            "profissao_procurada" : "Front-Office manager",
            "o_que_sabes" : "Tudo - programação",
            "vontade_de_aprender" : true,
            "empresas_desejadas" : "A que trouxer felicidade"
        },
        "hobies" : ["Jogar","Aprender","Ler","nadar"]
    },{
        "nome" : "Ana",
        "idade" : 28,
        "esta_empregado" : false,
        "detalhes_empregos" : {
            "profissao_procurada" : null,
            "o_que_sabes" : "jogar",
            "vontade_de_aprender" : false,
            "empresas_desejadas" : null
        },
        "hobies" : ["Jogar"] 
    }
]

console.log(obj)

// JSON
// Converter OBJETO para JSON
const jsonData = JSON.stringify(obj)
console.log(jsonData)
// Isto é como se fosse um Post, estámos a querer inserir no sistema



// Converter JSON para OBJETO
const objData = JSON.parse(jsonData)
console.log(objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})