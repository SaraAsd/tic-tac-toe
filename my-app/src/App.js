import React from 'react';
import {useState} from 'react';


function App(){
  const  [buttonlist,setbutton]=useState(["","","","","","","","",""])
  const [xisnext,setxisnext]=useState(true);
  const s = [...buttonlist];
  
  const restart = () =>{
     setbutton(Array(9).fill(""));
  }
  const check=(s)=>{
      if(s[0]&&s[1]&&s[2]&&s[0]==s[1] && s[1]==s[2]){
        setbutton(Array(9).fill(""));
        alert(" you win!");
      }
      if(s[3]&&s[4]&&s[5]&&s[3]==s[4] && s[4]==s[5]){
        setbutton(Array(9).fill(""));
        alert(" you win!");
      }
      if(s[6]&&s[7]&&s[8]&&s[6]==s[7] && s[7]==s[8]){
        setbutton(Array(9).fill(""));
        alert(" you win!");
      }
      if(s[0]&&s[3]&&s[6]&&s[0]==s[3] && s[3]==s[6]){
        setbutton(Array(9).fill(""));
        alert(" you win!");
      }
      if(s[1]&&s[4]&&s[7]&&s[1]==s[4] && s[4]==s[7]){
        setbutton(Array(9).fill(""));
        alert(" you win!");
      }
      if(s[2]&&s[5]&&s[8]&&s[2]==s[5] && s[5]==s[8]){
        setbutton(Array(9).fill(""));
        alert(" you win!");
      }
      if(s[0]&&s[4]&&s[8]&&s[0]==s[4] && s[4]==s[8]){
        setbutton(Array(9).fill(""));
        alert(" you win!");
      }
      if(s[2]&&s[4]&&s[6]&&s[2]==s[4] && s[4]==s[6]){
        setbutton(Array(9).fill(""));
        alert(" you win!");
      }
  }
  const ha =(i) =>{

    if(s[i])return;
    s[i] = xisnext ? "x" : "o";
    setbutton(s)
    
    setxisnext(!xisnext)
    check(s);
    
  }
    const rebt = (i) =>{
      return(
        <button onClick={()=>ha(i)} >{s[i]}</button>
      )
    }
    return(
       
      <div className='App'>
          <h1 align ='center'>Let's play</h1>
          
          <div align ='center'>
          {rebt(0)}
          {rebt(1)}
          {rebt(2)}
          </div>
          <div align ='center'>
          {rebt(3)}
          {rebt(4)}
          {rebt(5)}
          </div>
          <div align ='center'>
          {rebt(6)}
          {rebt(7)}
          {rebt(8)}
          </div>
          <div >
          <button className='btn'  onClick={restart}>Restart</button>
          </div>
          
      </div>

    )


}



export default App;

