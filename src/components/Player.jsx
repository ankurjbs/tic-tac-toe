import { useState } from "react";
export default function Player({ initialName, symbol }) {
  // we can use same state if we want to manage different piece of work
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    // we can set variable if ant types below

    // {isEditing ? setIsEditing(false) : setIsEditing(true)};
    //setIsEditing(isEditing ? false : true);
    // but in boolean case above code is unnecessary in java script
    //setIsEditing(!isEditing); // schedule a state update to true

    //now In react, when updating your state base on the previous value of that state we cant use like above, we shoud pass a function to that state updating function. This is strong recommendation of the Reat team. This fn will automatically be called by React and will create the guaranteed latest state value (instatntly). if we intilize two times above fn. o/p should be true then false. but this not will work as expted (take 1/2 mili second).

    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    //  onChange will triger for every keystroke, will provide an event object,contains the value entered by the user. So we use event object and this event provide argument for setPalyerName.This event have a 'target' property which will refer the element
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonCaption = "Edit";
  if (isEditing) {
    // this value prop does not change because this 'value' props sets the value that's shown in input box so we have to pass this through state
    editablePlayerName = (
      <input
        name="palyer"
        type="text"
        value={playerName}
        onChange={handleChange}
      />
    );
    // we are displaying the name and ulpdate name using onChange. this is known as two-way binding
    buttonCaption = "Save";
  }
  return (
    <li>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}
