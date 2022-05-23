import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
  
const TabMenu = () => {
  const [value, setValue] = React.useState(2);
  
  return (
    <div
      style={{
        marginLeft: "20%",
        marginRight: "20%"
      }}
    >
      <h2>React Tabs</h2>
      <Paper square>
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Tab label="Menu 1" />
          <Tab label="Menu 2" />
          <Tab label="Menu 3 desahabilitado" disabled />
          <Tab label="Menu 4" />
        </Tabs>
        <h3>Estas en el menú: {value +1} </h3>
      </Paper>
    </div>
  );
};
  
export default TabMenu;