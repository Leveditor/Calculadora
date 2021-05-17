 
 const numbers = (calcBtns, setData, data) => {

     // ARRAY DE NUMEROS DA CALCULADORA
     [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.', '%'].forEach(item => {
        calcBtns.push(
          // PEGANDO OS VALOR DOS BOTÕES 
          <button onClick={e => { setData(data + e.target.value) }} value={item} key={item}>
            {/* COLOCANDO OS NUMEROS EM CADA BOTÃO */}
            {item}
          </button>
        )
      })
 }

 export default numbers;