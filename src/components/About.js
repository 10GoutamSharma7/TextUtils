import React, { useState } from 'react'

export default function 
(props) {

let MyStyle = {
    backgroundColor: props.mode==='dark'?'#2f2f2f':'white',
    color: props.mode ==='dark'?'white':'black'
}

let MyStyle2 = {
    backgroundColor: props.mode==='dark'?'grey':'white',
    color: props.mode ==='dark'?'white':'black'
}

// const [MyStyle, setMyStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white',
// })

// const [btnText, setbtnText] = useState('Enable Dark Mode');

// const toggleStyle = ()=>{
//     if(MyStyle.color === 'black'){
//         setMyStyle({
//             color: 'white',
//             backgroundColor: 'black',
//             border: '1px solid white'
//         })
//         setbtnText('Enable Light Mode');
//     }
//     else {
//         setMyStyle({
//             color: 'black',
//             backgroundColor: 'white',
//             border: '1px solid black'
//         })
//         setbtnText('Enable Dark Mode');
//     }
// }

  return (
        <div className='container '>
        <div className= 'accordion py-3 px-5 rounded-5' id="accordionExample" style={MyStyle}>
            <h1 className='my-3'>About Us</h1>
            <div style={MyStyle} className="accordion-item">
                <h2 className="accordion-header">
                    <button style={MyStyle2} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong></button>
                </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div style={MyStyle} className="accordion-body">
                <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={MyStyle2} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div style={MyStyle} className="accordion-body">
                    <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button style={MyStyle2} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div style={MyStyle} className="accordion-body">
                    <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            {/* <div className="conatiner my-3">
                <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
            </div> */}
        </div>
        </div>
  )
}
