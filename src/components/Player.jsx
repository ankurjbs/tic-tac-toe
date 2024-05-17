import { useState } from 'react';
export default function Player({name,symbol}){
    const [isEditing,setIsEditing] = useState(false);
    function handlePlayer(){
        setIsEditing(true);
    }
    return(
        <li>
            <span className="player">
                {isEditing ? <span><input name="palyer" value={name} /> </span>: <span className="player-name">{name}</span>}
              
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handlePlayer}>Edit</button>
        </li> 
    );
}