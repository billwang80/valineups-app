import React from "react"
import {Link} from "react-router-dom"
import store from "../store/store"

function AgentPanel(props) {
    function dispatchAgent() {
        store.dispatch({ type: 'agent/selectAgent', payload: props.name })
    }

    return (
        <div className="agentPanel">
            <div class="agentPanelTitle"><h2>{props.name}</h2></div>
            <Link to={{ pathname: props.link }}>
                <span onClick={ dispatchAgent }>
                    <img src={props.imgurl} alt={props.name}/>
                </span>
            </Link>
        </div>
    )
}

export default AgentPanel