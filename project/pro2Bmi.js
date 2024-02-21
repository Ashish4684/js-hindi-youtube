const form = document.querySelector('form')

form.addEventListener('submit' , function(e){
  const weight = parseInt(document.querySelector('#weight').value)
  const height = parseInt(document.querySelector('#height').value)
  const result = document.querySelector('#result')

  if(weight<0||weight==""||isNaN(weight))
  {
    result.innerHTML="<span>enter valid weight</span>"
  }
  else if(height<0||height==""||isNaN(height))
  {
    result.innerHTML="<span>enter valid height</span>"
  }
  else{
     const bmi =  weight/(height**2)
     result.innerHTML="<span>`your bmi is ${bmi}`</span>"
     <



  }

})
