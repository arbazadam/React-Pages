import React from 'react'
import { Button } from 'reactstrap';
import {BrowserRouter as Router,Route,Switch} from 'react'
import App from './UseEffectComponent';
import RecipeReviewCard from './UserCardComponent'

  



export default function Abc() {
    return (
        <Router basename="/React-Pages">
            <Switch>
                <Route path="/one" component={App}></Route>
                <Route path="/two" component={RecipeReviewCard}></Route>
            </Switch>
        </Router>
    )
}


