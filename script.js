const body = document.body
const arr = ['asd', 'asfd', 'xcv', 'qwre']

// const input1 = document.querySelector('.input1');
// const input2 = document.querySelector('.input2');
// const input3 = document.querySelector('.input3');
// const input4 = document.querySelector('.input4');
// body.addEventListener('input', (event) => {
//   if (event.target === input1) {
//     input2.value = event.target.value;
//   } else if (event.target === input2) {
//     input1.value = event.target.value;
//   }
// })

// bindTwoWay(input3, input4);

// function bindTwoWay(inputA, inputB) {
//   inputA.addEventListener('input', () => inputB.value = inputA.value)
//   inputB.addEventListener('input', () => inputA.value = inputB.value)
// }


buildAllWayInputPage(arr)

function buildAllWayInputPage(inputNames) {
  for (const name of inputNames) {
    const input = document.createElement('input')
    input.name = name
    input.className = 'input'
    input.placeholder = 'Type something'
    body.append(input)
  }

  const inputs = document.getElementsByTagName('input')
  
  body.addEventListener('input', (e) => {
    if (e.target.className === 'input') {
      for (const input of inputs) {
        input.value = e.target.value
        
      }
    }
  })

}