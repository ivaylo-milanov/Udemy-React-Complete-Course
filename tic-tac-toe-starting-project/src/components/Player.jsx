import { useState } from "react";
import PropTypes from 'prop-types';

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(editing => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  const btnCaption = isEditing ? 'Save' : 'Edit';

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing && <input type="text" required value={playerName} onChange={handleNameChange}/>}
        {!isEditing && <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}


Player.propTypes = {
  initialName: PropTypes.string,
  symbol: PropTypes.string,
  isActive: PropTypes.bool,
  onChangeName: PropTypes.func
}