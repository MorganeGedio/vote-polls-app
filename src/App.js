import React, { Component } from 'react';
import './App.css';

import { Container } from 'reactstrap';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

//lo siguiente es pagina que describe un item
import QuestionList from "./Components/question-list/question-list";
import QuestionDetails from "./Components/question-details/question-details";

class App extends Component {
    render() {
        return (
            <div className="App">
              <Container>
                <BrowserRouter>
                  <Switch>
                    <Route path="/questions/:question_id" component={QuestionDetails} />
                    <Route path="/" component={QuestionList} />
                  </Switch>
                </BrowserRouter>
              </Container>
            </div>
        );
    }
    // render() {
    //     return (
    //         <div className="App">
    //             <Container>
    //                 <QuestionDetails />
    //             </Container>
    //         </div>
    //     );
    // }


}

export default App;
