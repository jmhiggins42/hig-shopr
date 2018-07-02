import React from 'react';
import EightBitBtn from './EightBitBtn';

const LibraryGames = ({ games, onSelect, onAddNew, onDelete }) => (
  <div className="col-sm-6">
    <div className="row">
      <div className="col">
        <EightBitBtn classType="success" clickHandler={onAddNew}>
          add
        </EightBitBtn>
      </div>
    </div>
    <div className="row">
      <div className="col">
        {games.length === 0 ? (
          <div className="col">Get some Games!</div>
        ) : (
          <ul className="game-list">
            {games.map(game => (
              <li key={game._id} onClick={() => onSelect(game)} className="game-list-item">
                {game.title}{' '}
                <EightBitBtn classType="danger" clickHandler={e => onDelete(e, game._id)}>
                  remove
                </EightBitBtn>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

export default LibraryGames;
