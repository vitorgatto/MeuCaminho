/*A nossa pessoa deseja atravessar a rua. 
Inicialmente, a pessoa está localizada em uma 
posição X, e deseja chegar a uma posição maior 
ou igual a Y. A cada passo que a nossa pessoa dá, 
ela percorre uma distância fixa que denominaremos Z. 
Na nossa função, você precisa: 

1) Contar a quantidade mínima de passos que a nossa 
pessoa precisa dar para atravessar a rua, ou seja, 
sair da posição X e chegar ou ultrapassar a posição Y.
Em nossa função, precisamos passar os parâmetros. Por exemplo, 
daremos 2 números inteiros, X, Y  e a função deverá 
retornar um número mínimo de passos que inicie da posição X 
e vá para uma posição maior ou igual a Y.

Dê os números de entrada:

X = 5; (posição inicial)
Y = 40; (posição final)

Ao dar um passo, deve ser somada a distância inicial + 
a distância do passo dado, ou seja:

Ao dar um passo = 5 + 1;

Dois passos: 5 + 1 + 1.

E assim, sucessivamente, até chegar ou passar a distância 
final de 40.
*/



function atravessarRua (X, Y, D) {
    let pontoInicial = X
    let pontoFinal = Y
    let passos = D 
    let passosDados = 0
    console.log (`Ponto Inicial: ${pontoInicial} metros.`)
    console.log (`Ponto Final: ${pontoFinal} metros.`)
   while (pontoFinal > 0) {
       pontoInicial += passos
       pontoFinal += -passos
       passosDados++
   }
   
   console.log (`Distância do passo: ${passos} metros.`)
   console.log (`Você precisou de ${passosDados} passos para chegar ate o destino.`)
}
atravessarRua(5, 50, 3)

