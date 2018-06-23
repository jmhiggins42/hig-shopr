import React from 'react';
import EightBitBtn from './EightBitBtn';

const LibraryGames = ({ gamesObj, onSelect, onAddNew }) => {
  if (Object.values(gamesObj).length === 0) {
    return (
      <React.Fragment>
        <div className="col">Get some Games!</div>
        <div className="col">
          <EightBitBtn classType="success" clickHandler={onAddNew}>
            add one!
          </EightBitBtn>
        </div>
      </React.Fragment>
    );
  }
  return (
    <div className="col">
      <EightBitBtn classType="success" clickHandler={onAddNew}>
        add
      </EightBitBtn>
      <ul className="gameList">
        {Object.values(gamesObj).map(game => (
          <li key={game.id} onClick={onSelect}>
            {game.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LibraryGames;
