import React, {useState,  useEffect } from 'react';


function Therd(): JSX.Element {
    const [count, setCount] = useState(20);
    useEffect(() => {
      const countdownInterval = setInterval(() => {
        if (count > 0) {
          setCount(count - 1);
        } else {
          clearInterval(countdownInterval);
        }
      }, 1000);
      return () => {
        clearInterval(countdownInterval);
      };
    }, [count]);

  return (
    <>
            <h3>Common component #3</h3>
          <div>{count > 0 ? <h1>Обратный отсчёт: {count}</h1> : <h1>Поехали!</h1>}</div> 
      </>
    )
 }

 export default Therd