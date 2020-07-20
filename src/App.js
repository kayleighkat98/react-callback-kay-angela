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

function List(key, header, cards){
  document.getElementById("root");
  ReactDOM.render(document.getElementById("root"));
}

export default App;

// import React from 'react';
// import STORE from './store';

// function App(store) { 
//   return (
//     <main className='App'>
//       <List cards={store.lists}/>
//     </main>
//   ); 
// }

// function Card(title, content){
//   return(
//     <div className='Card'>
//       <button type="button">Delete</button>
//       <h3>Card</h3>
//       <p>Info</p>
//     </div>
//   );
// }

// function List(cards){
//   return <div className="list-cards">
//     <GetCards cards={cards}/>
//   </div>
// }

// function GetCards(cards) {
//   console.log(cards);
//   return (cards.map(card => function() {
//     return <Card />;
//   }));
// }


// export default App;
