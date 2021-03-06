import React from 'react';

export default 

function Card(props) {
  return (
    <div className='Card'>
      <button
        onClick={() => props.onDeleteItem(props.cardId)} 
        type='button'>
        delete
      </button>

      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

Card.defaultProps = {
  item: {}
}
