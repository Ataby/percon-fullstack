import React, { useEffect,useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import { addTodo, getAllTodo, updateTodo,deleteTodo } from "../utils/HandleApi";

const ListedItem = ({
  title,
  content,
  category,
  deleteMode,
  updateMode,
  id,setNewContent,
  isSelected,
  onClick,
  reRender,setreRender
}) => {
    const handleUpdate = async () => {
 
        // await updateTodo();
        // await getAllTodo();
        // setreRender(!reRender);
      
    };

  // useEffect(() => {
  //   console.log(isSelected,id);
  // }, [isSelected]);

const [isEdittable, setisEdittable] = useState(false)

const handleContentChange= (e)=> {

  if(isEdittable){
    setNewContent(e.target.value)
  }
};

const handleKeyDown = (e)=> {
  if(e.key ==='Enter'){
    e.preventDefault();
    console.log(reRender);
    setreRender(!reRender);
  }
}


const toogleEdit = ()=> {
  setisEdittable(!isEdittable);
}

const handleDelete = async () => {
  await deleteTodo(id);
  await getAllTodo();
  setreRender(!reRender);
};


 useEffect(() => {
 
 }, [reRender])




return (
    <div className="p-1 border-2 border-red-300 flex flex-col items-center mt-4">
      <div className="flex gap-2 items-end">
        <div className="title text-2xl font-serif py-1">{title}</div>
        <div className="title italic text-slate-600 font-serif py-1">
          , {category}
        </div>
      </div>

      <TextField
        margin="none"
        maxRows={3}
        onChange={handleContentChange}
        onKeyDown={handleKeyDown}
        multiline
        variant="outlined"
        defaultValue={content}
        sx={{
          minWidth: "80%",
          fontFamily: "serif",
        }}
      />
      <div
        onClick={() => {
          onClick(id);
          toogleEdit();
        }}
        className="icons mt-2 flex gap-4 border-2 rounded-md px-1"
      >
        {isSelected ? <EditIcon /> : <CheckIcon onClick={()=> onClick(id)} />}
        <DeleteIcon onClick={()=> handleDelete(id)} />
      </div>
    </div>
  );
};

export default ListedItem;
