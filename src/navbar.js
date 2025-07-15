import './navbar.css'
import React, { useState } from 'react';

import { evaluate } from 'mathjs';

function Navbar() {
    const [data,setData]=useState("");
    const [predata,setPredata]=useState(0);
     const [label,setLabel]=useState('C');
     const [cal,setCal]=useState(false)
    const calculator=()=>{
        const expression = data.replace(/x/g, '*').replace(/÷/g, '/');
    const result = evaluate(expression);
    setData(result.toString());
    setCal(true)
    }
const getValue=(event)=>{
    if(label!=='AC')
        setCal(false)
    if(label==='AC' && event.target.value!=='AC')
        setLabel('C')
    if(/^\d$/.test(event.target.value))
    setData(data.concat(event.target.value))
else if(event.target.value==="C" && cal===true)
{
    setPredata(data)
    setData('')
    setLabel("AC")
}
else if(event.target.value==="C" && cal===false)
{
    setData('')
    setLabel("AC")
}
else if(event.target.value==="AC")
{
    setPredata(0)
    setData('')
    setLabel("C")
}
else if(event.target.value==='DEL')
    setData(data.substring(0,data.length-1))
else if(event.target.value==='.' || event.target.value==='+'|| event.target.event==='-' || event.target.value==='x' || event.target.value==='÷')
    setData(data.concat(event.target.value))
else 
calculator()
}
  return (
<>
<nav className="nav"> 
            <div className="l">Simple Calculator </div>
</nav>
    <div className="output">
        <div className="previous-operand">{predata}</div>
        <input className="current-operand" placeholder='0' value={data} style={{textAlign:"right"}}></input>
    </div>
    
<div className="calculator-grid">
    <button className="span-two" onClick={getValue} value={label} >{label}</button>
    <button onClick={getValue} value='DEL'>DEL</button>
    <button onClick={getValue} value='÷'>÷</button>
    <button onClick={getValue} value='1'>1</button>
    <button onClick={getValue} value='2'>2</button>
    <button onClick={getValue} value='3'>3</button>
    <button onClick={getValue} value='x'>x</button>
    <button onClick={getValue} value='4'>4</button>
    <button onClick={getValue}value='5'>5</button>
    <button onClick={getValue}value='6'>6</button>
    <button onClick={getValue}value='+'>+</button>
    <button onClick={getValue}value='7'>7</button>
    <button onClick={getValue}value='8'>8</button>
    <button onClick={getValue}value='9'>9</button>
    <button onClick={getValue}value='-'>-</button>
    <button onClick={getValue}value='.'>.</button>
    <button onClick={getValue}value='0'>0</button>
    <button className="span-two" onClick={getValue}value='='>=</button>
    
    
</div>
</>
);
}

export default Navbar;