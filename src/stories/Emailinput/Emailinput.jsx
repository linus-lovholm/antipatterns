import React, {useState} from 'react';


export const Emailinput = () => {
  
  const [usernumber, setNumber] = useState(0);
  const [usernumbe2r, setNumber2] = useState(0);
console.log(usernumbe2r,usernumber)
  return (
    <>
      <p>emejl:</p> 
      <p>hur många tecken innehåller din mejladress?</p>
      <input id="usernumber" value={usernumbe2r} onChange={(event) => setNumber2(event.target.value)} type="number" />
      <button type="button" onClick={() => setNumber(usernumbe2r)}>
        Ja
      </button>
   
    <p>emelj:</p>
      <input type="text" maxLength={usernumber} />
    
    </>
  );
};

