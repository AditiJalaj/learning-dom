
import './App.css';

const App=()=>{
  const click=()=>{
    //below will give the 2th child of element with id wrapper and element with classNamename span-name
    //console.log(document.querySelector('#wrapper li:nth-child(1)'))
    const spanList=(document.querySelectorAll('#wrapper  li .span-name'))
    spanList.forEach(function(item){
     console.log(item.textContent)
     //the above will give the text on that span


     const byclass=document.getElementsByClassName('list')
     console.log(byclass)
     console.log(typeof(byclass))
     Object.keys(byclass).map((i)=>
     {
       console.log('this is via object keys ',i)
     })

     Array.from(byclass).map((j)=>{
       console.log('this is via array from ',j)
     })
    })
  }



  return(
    <div id="wrapper">
    <ul>
    <li className="list">1st</li>
    <li className="list">2nd item</li>
    <li className="list-name">3rd
    <span className='span-name'> hello from inside list  </span>
    <span className='span-name'> hello from inside list 2    </span>
    </li>
    <span className="span-name">Hello namaste</span>
    <br></br>
    <button onClick={click}>CLICK to get the log</button>
    </ul>
    </div>

  )
}

export default App;
