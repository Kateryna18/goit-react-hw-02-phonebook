import React from 'react'
import css from 'components/Filter/Filter.module.css'

export function Filter({handleChange, value}) {
  
    return (
    <div className={css.filterBox}>
        <input className={css.filterInput} placeholder='Search contacts' type="text" value={value} onChange={handleChange} name="filter"/>
    </div>
  )
}