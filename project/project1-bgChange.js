const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");


buttons.forEach(function(button)
{
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target.ig)
    
    if(e.target.id == "grey")
    {
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id == "white")
    {
      body.style.backgroundColor = e.target.id;
    }
     else if(e.target.id == "blue")
    {
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id == "yellow")
    {
      body.style.backgroundColor = e.target.id;
    }

  })
}
)