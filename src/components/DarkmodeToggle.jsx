import React from 'react'

const DarkmodeToggle = () => {
  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch" >
        <span className="label">Dark Mode</span>
        <label className="toggle-switch" for="darkmode-switch" aria-label="darkmode switch">
            <input type="checkbox" id="darkmode-switch" />
            <span className="slider round"></span>
        </label>
    </div>
)
}

export default DarkmodeToggle