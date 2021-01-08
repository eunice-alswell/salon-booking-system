import React, {useState} from 'react'
import Pages from './pages'

import {Redirect, Route, Switch} from 'react-router-dom'

const Router = () => {

    const [isLogin,setLoginState] =useState(false)
    const [authUser,setAuthUser] =useState("");

  
  function handleLoginstate(isLogin, user) {
    setLoginState(isLogin);
    setAuthUser(user);
  }

    return(
        <React.Suspense fallback={<h6>Loading...</h6>}>
            <Switch>
                <Route path='/login' component={()=><Pages.Login handleLoginstate={handleLoginstate}/>}/>
                <Route path='/signup' component={Pages.Signup}/>
                <Route path='/home' component={()=><Pages.Home isLogin={isLogin} username={typeof authUser === "object" ?authUser.name:null} />}/>
                <Route path='/book' component={Pages.Book}/>
                <Redirect from = '*' to ='/login'/>
            </Switch>


        </React.Suspense>
    )
}

export default Router;
