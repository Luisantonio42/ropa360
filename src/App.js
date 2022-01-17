import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import { Switch , Route } from 'react-router';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage';
import {auth, createUserProfileDocument} from './firebase/FireBaseUtils';

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        console.log(this.state);
        });
      }
      this.setState({currentUser: userAuth});

    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render () {
    return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUpPage} />

      </Switch>
    </div>
    );
  }
}

export default App;