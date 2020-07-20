import React, { Component } from 'react';
//import List from './List'
import './styles.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
          />
        )}
        <button type='button' className='List-add-button'>+ Add Random Card</button>
      </div>
    </section>
  )
}

function Card(props) {
  return (
    <div className='Card'>
      <button type='button'>delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
export default App;