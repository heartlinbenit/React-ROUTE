import React, { useState } from 'react';
import Switch from '@mui/material/Switch';  

function Search() {
  const [checked, setChecked] = useState(false);  

  function handleChange(e) {
    setChecked(e.target.checked);  
  };

  return (
    <div>
     
      <Switch checked={checked} onChange={handleChange} />
      <span>{checked ? "ON" : "OFF"}</span>
    </div>
  );
}

export default Search;
