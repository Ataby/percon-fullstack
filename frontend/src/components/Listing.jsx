import React, { useState, useEffect } from "react";
import ListedItem from "./ListedItem";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import StarRateIcon from "@mui/icons-material/StarRate";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { addTodo, getAllTodo, updateTodo,deleteTodo } from "../utils/HandleApi";

const Listing = ({
  toDo,
  handleSettoDo,
  handleSetfilterCategory,
  reRender,
  setreRender
}) => {
  const handleInit = async () => {
    const data = await getAllTodo();
    handleSettoDo(data);
  };

  const handleClick = async (id) => {
    await setSelectedId(id);
    console.log("selected id",id)
    await updateTodo(selectedId,newContent);
    setreRender(!reRender);

  };


  useEffect(() => {
    handleInit();
    //dependency kısmına updateMode ekle
  }, [reRender]);

  const [updateMode, setupdateMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [newContent,setNewContent] = useState("")


  return (
    <>
      <div className="flex justify-between bg-orange-300">
        <Autocomplete
          disablePortal
          onChange={(event, newValue) => {
            handleSetfilterCategory(newValue);
            console.log(newValue);
          }}
          options={filterCategories}
          sx={{ minWidth: "50%", padding: "1rem" }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Filtering by category"
              sx={{ backgroundColor: "white", borderRadius: "5px" }}
            />
          )}
          renderOption={(props, option) => {
            console.log(option.icon);
            return (
              <Box
                component="li"
                sx={{ "& > img": { ml: 8, flexShrink: 0 } }}
                {...props}
              >
                {option.icon} {option.label}
              </Box>
            );
          }}
        />
        <div className="filtering p-2 flex justify-end items-center gap-1 bg-orange-300">
          <TextField
            margin="none"
            placeholder="Searching Title ?"
            rows={1}
            sx={{
              "& .MuiInputBase-input::placeholder": {
                fontFamily: "serif",
                fontSize: "18px",
                fontStyle: "italic",
              },
              minWidth: "70%",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
            // onChange={(e) => {
            //   setsearchValue(e.target.value);
            // }}
          />
          <SearchIcon sx={{ fontSize: "36px" }} />
        </div>
      </div>
      <div className="flex-col justify-items-stretch">
        {toDo
          ?.slice()
          .reverse()
          .map((item) => {
            return (
              <ListedItem
                updateMode={updateMode}
                setupdateMode={setupdateMode}
                title={item?.title || "no title"}
                content={item?.content || "no content"}
                category={item?.selectedCategory || "no category"}
                key={item._id}
                id={item._id}
                isSelected={selectedId !== item._id}
                onClick={handleClick}
                reRender={reRender}
                setreRender={setreRender}
                setNewContent={setNewContent}
                
              />
            );
          })}
      </div>
    </>
  );
};
const filterCategories = [
  { label: "Daily Routines", icon: <AccessTimeIcon /> },
  { label: "Weekly Routines", icon: <DateRangeIcon /> },
  { label: "Monthly Routines", icon: <EventNoteIcon /> },
  { label: "Special Events", icon: <StarRateIcon /> },
];

export default Listing;
