import React from 'react'
import Pages from './pages'
import {Redirect, Route, Switch} from 'react-router-dom'

const Router = () => {
    return(
        <React.Suspense fallback={<h6>Loading...</h6>}>
            <Switch>
                <Route path='/login' component={Pages.Login}/>
                <Route path='/signup' component={Pages.Signup}/>
                <Route path='/home' component={Pages.Home}/>
                <Route path='/book' component={Pages.Book}/>
                <Redirect from = '*' to ='/login'/>
            </Switch>


        </React.Suspense>
    )
}

export default Router;