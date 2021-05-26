import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector';
class App extends Component {
  
  unsubscribeFromAuth = null;
  componentDidMount() {
      this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=> {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            this.props.setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            });
          });
     
        } 
          this.props.setCurrentUser(userAuth);
        
      });
    }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }  
  render() { 
    console.log(this.props.currentUser);
    return ( 
      <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route exact path='/signin' render={() => this.props.currentUser? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}></Route>
        <Route exact path='/checkout' component={CheckoutPage}></Route>
      </Switch>
    </div>
     );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

