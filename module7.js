const {readFile, writeFile} = require('fs')

//vamos usar uma callback function
//se tivermos erro vai returnar null e imprime na tela o erro
//se nao tivermos erro vai imprimir o resultado na consola
readFile('./content/first.txt', 'utf8', (err,result) => {
    if(err){ //verificar se há erro para o primeiro ficheiro
        console.log(err)
        return null
    }
    else{ //se nao tiver erro com o primeiro vamos avançar e ler o segundo ficheiro
        const first = result; 
        readFile('./content/second.txt', 'utf8', (err,result) => {
            if(err){ //verficar se há erro para o segundo ficheiro
                console.log(err)
                return null;
            }
            else{ //se nao tiver erro com o segundo ja vai dar para escrever o conteudo para o novo ficheiro que queremos criar
                const second = result;
                writeFile('./content/result-async.txt', `Here is the result ${first}, ${second}`, (err,result) => {
                    if(err){ //se tiver erro para escrever no ficheiro
                        console.log(err)
                        return null;
                    }
                    else{ //se nao tiver erro para escrever para o ficheiro
                        console.log(result)
                    }
                })
            }
        })
    }
})

