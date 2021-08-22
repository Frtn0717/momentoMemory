const taskField = document.getElementById('task06');
const text = document.getElementById('task06__str_enter_field');
const resultBtn = document.getElementById('task06__result_btn');
const resetBtn = document.getElementById('task06__reset_btn');
const div = document.createElement('div');


resultBtn.addEventListener('click', () => {
  const str = text.value;
  
  if (str) {
    taskField.appendChild(div);
    div.innerHTML = makePermutation(str);
    resultBtn.classList.remove('block');
    resultBtn.classList.add('hidden');
    resetBtn.classList.remove('hidden');
    resetBtn.classList.add('block');
  }

});

resetBtn.addEventListener('click', () => {
  resetBtn.classList.remove('block');
  resetBtn.classList.add('hidden');
  resultBtn.classList.remove('hidden');
  resultBtn.classList.add('block');

  taskField.removeChild(div);
})

function makePermutation(str) {
  let result = [str];

  function buildWords(word) {
    const arr = word.split('');
  
    if (result.length > 1 && result[0] === word) {
      return result;
    } else {
      for (let i = 0; i < arr.length - 1; i++) {
  
        arr.splice(i, 2, arr[i + 1], arr[i]);
        result.push(arr.join(''));
  
      }
      return buildWords(result[result.length - 1]);
    } 
  }

  buildWords(str);
  return [...new Set(result)].sort();

};
