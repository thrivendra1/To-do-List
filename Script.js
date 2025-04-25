let inputbox=document.getElementById('input-box');
let ListContainer=document.getElementById('list_container');


inputbox.addEventListener("keypress",function(event)
{
  if(event.key==="Enter")
  {
    event.preventDefault();
    addtask();
  }
})

function addtask()
{
  if(inputbox.value=='')
  {
    alert("You must write something ")
  }
  else
  {
    let li=document.createElement('li');
    li.innerHTML=inputbox.value;

    let span=document.createElement('span');
    span.innerHTML="\u00d7";
    li.appendChild(span)
    ListContainer.appendChild(li);

  }

  inputbox.value='';
  saveData();

}


  ListContainer.addEventListener("click",function(e)
{
  if(e.target.tagName=="LI")
  {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName=="SPAN")
  {
    e.target.parentElement.remove();
    saveData();
  }
},false);

    // storing the dat to local storage
    
    function saveData()
    {
      localStorage.setItem("data",ListContainer.innerHTML);
    }

    function calltheTask()
    {
      ListContainer.innerHTML=localStorage.getItem("data");
    }
    calltheTask();

