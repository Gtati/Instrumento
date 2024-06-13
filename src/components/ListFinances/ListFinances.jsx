import React from 'react'
import { NavLink } from 'react-router-dom'
export const ListFinances = ({content, route}) => {
        return (
          <li><NavLink  to={route} >{content}</NavLink></li>
        )
    }
