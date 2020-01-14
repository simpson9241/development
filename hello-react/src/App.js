import React, { Component, Fragment } from 'react';
import './App.css'
// import MyName from './MyName';
import Counter from './Counter';
import Counter_LifeCycle from './Counter_LifeCycle';

class App extends Component {
  render(){
    return(
      // <MyName name="리액트"/>
        <Counter />
        // <Counter_LifeCycle />
    );
  }

  // render() {
  //   return(
  //     <div className="App">
  //       리액트
  //     </div>
  //   );
  //   }
  // return (
  //   <Fragment>
  //     <div>
  //       Hello
  //     </div>
  //     <div>
  //       Bye
  //     </div>
  //   </Fragment>
  // );
  // const name = 'react';
  // return(
  //   <div>
  //     hello {name}!
  //   </div>
  // );
  // const value = 1;
  // return(
  // <div>
  //   {
  //     1+1===3 ? (<div>맞아요!</div>) : (<div>틀려요!</div>)
  //   }
  // </div>
  // <div>
  //   {
  //     1+1 === 2 && (<div>맞아요!</div>)
  //   }
  // </div>
  //   <div>
  //     {
  //       (function(){
  //         if (value === 1) return (<div>하나</div>);
  //         if (value === 2) return (<div>둘</div>);
  //         if (value === 3) return (<div>셋</div>);
  //       })()
  //     }
  //   </div>
  // );
}

export default App;
