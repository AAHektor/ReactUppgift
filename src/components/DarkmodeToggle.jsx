import React from 'react'

const DarkmodeToggle = () => {
  return (
    <div id="darkmode-toggle-switch" class="btn-toggle-switch" >
        <span class="label">Dark Mode</span>
        <label class="toggle-switch" for="darkmode-switch" aria-label="darkmode switch">
            <input type="checkbox" id="darkmode-switch" />
            <span class="slider round"></span>
        </label>
    </div>
)
}

export default DarkmodeToggle