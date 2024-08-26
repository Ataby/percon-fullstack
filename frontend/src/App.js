import "./App.css";
import Form from "./components/Form";
import Listing from "./components/Listing";
import Header from "./components/Header";
import { useState ,useEffect} from "react";

function App() {
  const [toDo, settoDo] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [reRender, setreRender] = useState(true);
  const [searchValue, setsearchValue] = useState("");
  const [filterCategory, setfilterCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);


  return (
    <div >
      <div className="">
        <Header />
      </div>
      <div className="flex">
        <div className=" w-1/2 max-h-full">
          <Form title={title} setTitle={setTitle} content={content} setContent={setContent} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setreRender={setreRender} />
        </div>

        <div className="w-1/2  max-h-full">
          <Listing toDo={toDo} handleSettoDo={(value)=>settoDo(value)} searchValue={searchValue} setsearchValue={setsearchValue} filterCategory={filterCategory} handleSetfilterCategory={(value)=>setfilterCategory(value)} reRender={reRender} setreRender={setreRender} />
        </div>
      </div>
    </div>
  );
}

export default App;
