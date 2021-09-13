import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from '@material-ui/icons/ImportExport';
import movies from "./movies";
import "./table.css";
import Fab from '@material-ui/core/Fab';

import Button from "@material-ui/core/Button";
import StarIcon from '@material-ui/icons/Star';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { makeStyles } from '@material-ui/core/styles';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';

export default function App() {
  const [button, setButton] = React.useState("Click");
  //const [lang, setLang] = React.useState(0);
  const styles = theme => ({
    fab: {
      margin: "2px",
    },
    extendedIcon: {
      top: "190px",
left: "1513px",
width: "67px",
height: "17px",
textalign: "left",
font: "normal normal bold 14px/20px Helvetica Neue",
letterSpacing: "-0.08px",
color: "#FFFFFF",
opacity: "1",
borderRadius: "45px",
  
    },
  });
  
  const classes = styles();

  let columns = [
    {
      name: "Session information",
      selector: "year",
      sortable: true
    },
    {
      name: "Full name",
      selector: "year",
      sortable: true
    },
    {
      name: "Profession",
      selector: "year",
      sortable: true,
      right: true
    },
    {
        name: "Email",
        selector: "year",
        sortable: true,
        right: true
      },
   
      {
        cell:(row) => <div><StarIcon   style = {{color:"orange",border:"20px"}} />
         <CloseSharpIcon color={'disabled'} size={'100%'}   /></div>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
      {
        cell:(row) =><Fab variant="extended" aria-label="Delete" className={classes.fab}>
        
        <HelpOutlineIcon className={classes.extendedIcon} > Questions</HelpOutlineIcon>
        Questions
        
      </Fab>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      }
  ];
function handleButtonClick (state) {
    console.log('clicked');
    
  };
  let lang = {
    rowsPerPageText: "Rows per page:",
    rangeSeparatorText: "of"
  };

 
  console.log("Reader");
  return (
    <div style={{width:"1100px",marginLeft:"200px",marginTop:"-50px"}} className="App">
      <Card>
        <DataTable
          columns={columns}
          data={movies}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          pagination
          subHeader
          paginationComponentOptions={{
            rowsPerPageText: lang.rowsPerPageText,
            rangeSeparatorText: lang.rangeSeparatorText,
            noRowsPerPage: false
          }}
        />
      </Card>

    </div>
  );
}

