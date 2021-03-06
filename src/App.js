import React, { Component } from 'react';
import List from './List';
import './styles.css';


class App extends Component {
  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
}

handleDeleteItem = cardId => { 
    let listsCopy = [...this.state.lists]
    listsCopy.map(list => {
      list.cardIds = list.cardIds.filter(idName => 
        idName !== (cardId)) 
    })

    let allCardsCopy = {...this.state.allCards};
    delete allCardsCopy[cardId];
    this.setState({lists: listsCopy, allCards: allCardsCopy})
  //delete cardId from allCardsCopy
}


handleRandomItem=(listId)=>{

  const newCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

  const newLists = this.state.lists.map(list => {
    if (list.cardId === listId) {
return {
        ...list,
        cardIds: [...list.cardIds, newCard.id]
      };
    }
    return list;
  })
  // this.setState({lists: listsCopy, allCards: allCardsCopy})

this.setState({
    lists: newLists,
    allCards: {
      ...this.state.allCards,
      [newCard.id]: newCard
    }
})
}; 


  render() {
    //const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (
            <List
              key={list.id}
              listId={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
              onDeleteItem={this.handleDeleteItem}
              onRandomItem={this.handleRandomItem}
            />
          ))}
        </div>
      </main>
    );
  }
}

// handleClick = target => {
//   this.setState(
//     {Add: target}
// )}

export default App;