import React, {
  useEffect,
  useState
} from 'react';
import './App.css';

function swap (bars,i,j) {
  let a = bars[i];
  bars[i] = bars[j];
  bars[j] = a;
}

function getAnimation (bars) {
  let arr = [];
  for (let i=0;i<bars.length-1;i++) {
    for (let j=0;j<bars.length-i-1;j++) {
      if (bars[j] > bars[j+1]) {
        swap(bars,j,j+1);
        arr.push([j,j+1,true]);
      }
      else{
        arr.push([j,j+1,false]);
      }
    }
  }
  return arr;
}

function App() {
  
  const bars = [64, 34, 25, 12, 22, 11, 70,54, 44, 21, 21, 29, 12, 70];

  function bubbleSort (bars) {
    let brr = getAnimation(bars);

    for (let i=0;i<brr.length;i++) {
      setTimeout(()=>{
        const Bar = document.getElementsByClassName('array-bar');  

        const [i_index,j_index,isSwap] = brr[i];

        Bar[i_index].style.backgroundColor = 'green';
        Bar[j_index].style.backgroundColor = 'green';

        if (isSwap) {

          let height = Bar[i_index].style.height;
          Bar[i_index].style.height = Bar[j_index].style.height;
          Bar[j_index].style.height = height;
        }
        else { 
          
        }
        if (i!==0) {
          Bar[i_index-1].style.backgroundColor = 'aqua';
        }
      },i*100);
    }
  }
  
  return (
    <div className="App">
      {
        bars.map((num,index)=>{
          return(
            <div className='array-bar' key={index} style={{height: num*10}}></div>
          )
        })
      }
      <button onClick={()=>bubbleSort(bars)}>Start</button>
    </div>
  );
}

export default App;
