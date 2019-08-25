import React from 'react'

import {Route, Switch} from 'react-router-dom'

import Dashboard from '../components/dashboard/Dashboard'
import Form from '../components/form/Form'

export default(

    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/add' component={Form}/>
        <Route path='/edit/:id' component={Form}/>

    </Switch>
)