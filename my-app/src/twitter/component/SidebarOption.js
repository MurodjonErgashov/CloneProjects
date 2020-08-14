import React from "react";
import "../style/SidebarOption.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`t_sidebarOption ${active && "t_sidebarOption_active"}`}>
      <Icon fontSize="large" />
      <h5 className="t_sidebarOption_text">{text}</h5>
    </div>
  );
}

export default SidebarOption;
