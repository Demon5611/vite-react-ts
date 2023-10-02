import React, { useMemo } from 'react';


function First(): JSX.Element {
  const num = (): number => Math.floor(Math.random() * 11);
  const getNumber = useMemo(() => num(), []);

  return (
    <>
  
      <h1>#1</h1>
      <h1>Случайное число {getNumber}</h1>
      </>
    )
 }

 export default First