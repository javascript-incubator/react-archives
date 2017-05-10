import React from 'react'

const RouteInput = props =>
  <span className="input">
    <input className={props.routeError?"animated shake input__field input__field--minoru":"input__field input__field--minoru"}
      type="text"
      id="input-13"
      value={props.value}
      onChange={(e) =>props.changeEmitter(e.target.value)}
    />
    <label className="input__label input__label--minoru" htmlFor="input-13">
      <span className="input__label-content input__label-content--minoru" onClick={() => window.open(`${props.api}${props.value}`)}>{`${props.api}${props.value}`}</span>
    </label>
  </span>

export default RouteInput
