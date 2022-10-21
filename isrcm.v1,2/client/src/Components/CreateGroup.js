import React from 'react'
import { ActiButton } from './ActiButton'
import BasicSelect from './BasicSelect'
import Checkboxes from './Checkboxes'

function CreateGroup() {
  return (
    <div className="CreateGroup">
        <ActiButton/>
        <BasicSelect/>
        <b1>Empleados</b1>
        <Checkboxes/>
        <b1>Empleados que harán curso de "____"</b1>
        <Checkboxes/>
    </div>
  )
}

export default CreateGroup