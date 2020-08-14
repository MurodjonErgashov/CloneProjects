import React from "react";
import "../styles/AppCovid.css";
import { FormControl, MenuItem, Select } from "@material-ui/core";

function AppCovid() {
  return (
    <div className="c_app">
      <div className="c_app_header">
        <h1>Lets Build COVID 19 TRACKER lets gooooo......</h1>
        <FormControl className="c_app_dropdown">
          <Select variant="outlined" value="abc">
            <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">WorldWide</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + Select input dropdown field */}
      {/* InfoBoxs */}
      {/* InfoBoxs */}
      {/* InfoBoxs */}
      {/* Table */}
      {/* Graph */}
      {/* Map */}
    </div>
  );
}

export default AppCovid;
