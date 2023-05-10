import React from 'react'
import ReactDOM from 'react-dom'

//const App = () => {
//  const now = new Date()
//  const a = 10
//  const b = 20

//  return (
//    <div>
//      <p>Hello world, it is {now.toString()}</p>
//      <p>
//        {a} plus {b} is {a + b}
//      </p>
//    </div>
//  )
//}


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <h1>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>  
      </h1>
    </div>
  )
}

const App = () => {
  const name = 'Peter CONST'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello />
      <Hello name="George" />
      <Hello name="Daisy" />
      <Hello name="Kevin Flores"  age={27 + 10}/>
      <Hello name="Akuma Takeshi" />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}




ReactDOM.render(<App />, document.getElementById('root')) 
