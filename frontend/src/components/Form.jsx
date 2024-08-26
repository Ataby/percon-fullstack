import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import StarRateIcon from "@mui/icons-material/StarRate";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { addTodo, getAllTodo, updateTodo } from "../utils/HandleApi";

const Form = ({setreRender,selectedCategory, setSelectedCategory,title, setTitle,content, setContent}) => {

  //FORM SAYFAM VIDEONUN APP.JS SAYFASI
//HANDLE.API SAYFALARIMIZ AYNI


const handleClick = (item) => {
  setSelectedCategory(item );
  console.log(item ,"selectedCategory");
  //console.log(selectedCategory);
  //HATIRLATMA NOTU: This behavior occurs because the setSelectedCategory function is asynchronous. When you call setSelectedCategory(item), React schedules a state update, but it doesn't happen immediately. So, when you log selectedCategory right after calling setSelectedCategory, you're seeing the old value of selectedCategory because the state hasn't updated yet.
}

useEffect(() => {

}, [selectedCategory]);

const handleAdd = (e) => {
  //const buttonText = e.currentTarget.textContent;
  // if (buttonText === 'UPDATE'){
  //   setupdateMode(false);
  //   updateTodo();
  //   return;
  // } ŞİMDİLİK KALSIN BURASI


  addTodo(title,content,selectedCategory)
  setreRender((prev)=> !prev)
  getAllTodo();
  
}

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        padding: "10px",
        height: "100vh",
        backgroundColor: "#e2e8f0",
      }}
    >
      <Autocomplete
        disablePortal 
        id="combo-box-demo"
        options={noteCategories}
        sx={{ minWidth: "70%",  borderRadius: "5px", backgroundColor:"#fff",marginTop:"1rem" }}
        onChange={(e) => {
          handleClick(e.currentTarget.textContent);
        }}
        
        renderInput={(params) => (
          <TextField
            {...params}
            label={"Categories"}
            key={params.inputProps?.id || params.label}
            variant="outlined"
          />
        )}
        renderOption={(props, option) => {
          return (
            <Box
              component="li"
              sx={{ "& > img": { ml: 8, flexShrink: 0 },  }}
              {...props}
              key={option.label}
              
            >
              {option.icon} {option.label}
            </Box>
          );
        }}
      />

      <TextField
        id="outlined-multiline-static"
        margin="none"
        placeholder="Title"
        label="Title"
        rows={2}
        multiline
        sx={{
          minWidth: "70%",
          marginTop: "2rem",
          borderRadius: "5px",
          backgroundColor:"#fff"
        }}
        onChange={(e)=> {
            setTitle(e.target.value);
        }}
      />

      <TextField
        id="multiline-static"
        label="Content"
        placeholder="Content"
        multiline
        rows={6}
        sx={{
          minWidth: "70%",
          marginTop: "2rem",
          borderRadius: "5px",
           backgroundColor:"#fff"
        }}
        onChange={(e)=> {
            setContent(e.target.value);
        }}
      />

      <Button
        onClick={handleAdd}
        variant="contained"
        size="large"
        endIcon={<SendIcon />}
        color="primary"
        sx={{ width: "30%", marginTop: "3rem" }}
      >
        SAVE
      </Button>
    </Box>
  );
};
const noteCategories = [
  { label: "Daily Routines", icon: <AccessTimeIcon /> },
  { label: "Weekly Routines", icon: <DateRangeIcon /> },
  { label: "Monthly Routines", icon: <EventNoteIcon /> },
  { label: "Special Events", icon: <StarRateIcon /> },
];

export default Form;
