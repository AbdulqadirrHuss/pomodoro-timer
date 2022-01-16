import React, {useState,useEffect} from 'react'
import './App.css';


function App() {

    const [minutes,SetMinutes] = useState(25);
    const [seconds,SetSeconds] = useState(0);
    

    useEffect (()=>{
        let interval = setInterval(()=>{
            clearInterval(interval);

            if (seconds === 0){
                if (minutes !== 0){
                    SetSeconds(59);
                    SetMinutes(minutes-1);
                }else {

                }
            } else {
                SetSeconds (seconds-1)
            }
        },1000)
    },[seconds])


     return (<div>

         <div className='time'>       
                {minutes}:{seconds}
                </div> 


  </div>


 
    );
}

export default App;