import React from 'react';
import { Switch, Route } from 'react-router-dom'
import View1 from './pages/components/View1'
import View2 from './pages/components/View2'

export default () => {
    return ( <
        Switch >
        <
        Route exact path = "/" >
        <
        View1 / > <
        /Route> 

        <
        Route exact path = "/View2" >
        <
        View2 / >
        <
        /Route> < /
        Switch >
    )
}