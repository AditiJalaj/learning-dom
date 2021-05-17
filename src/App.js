
import './App.css';

const App=()=>{


  //below will give the 2th child of element with id wrapper and element with classNamename span-name
  const click=()=>{
    //console.log(document.querySelector('#wrapper li:nth-child(1)'))
    const spanList=(document.querySelectorAll('#wrapper  li .span-name'))
    spanList.forEach(function(item){
      console.log(item)
    })
  }



  return(
    <div id="wrapper">
    <ul>
    <li className="list">1st</li>
    <li className="list">2nd item</li>
    <li className="list-name">3rd
    <span className='span-name'> hello from inside list </span>
    <span className='span-name'> hello from inside list 2</span>
    </li>
    <span className="span-name">Hello namaste</span>
    <br></br>
    <button onClick={click}>CLICK to get the log</button>
    </ul>
    </div>

  )
}

export default App;
