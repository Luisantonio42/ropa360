import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/HomePage';
import { Switch , Route } from 'react-router';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage';
import {auth, createUserProfileDocument} from './firebase/FireBaseUtils';
import {setCurrentUser} from './redux/user/userActions'
class App extends React.Component {
  
  unsuscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        console.log(this.state);
        });
      }
      setCurrentUser(userAuth);

    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }

  render () {
    return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUpPage} />

      </Switch>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);