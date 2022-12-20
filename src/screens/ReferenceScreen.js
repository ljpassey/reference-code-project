import React from 'react'
import StateComponent from '../components/StateComponent'
import EffectComponent from '../components/EffectComponent'
import RefComponent from '../components/RefComponent'
import ContextComponent from '../components/ContextComponent'
import Interact from '../components/Interact'
import ReduxComponent from '../components/ReduxComponent'

const ReferenceScreen = () => {
  return (
    <div className="col-container">
        
        <StateComponent />
        <EffectComponent />
        <RefComponent />
        <ContextComponent />
        <Interact />
        <ReduxComponent />
    </div>
  )
}

export default ReferenceScreen