import axios from "axios";

const baseURL = "http://localhost:3000";

const getAllTodo = async () => {
  try {
    const { data } = await axios.get(`${baseURL}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

const addTodo = async (title, content, selectedCategory) => {
  try {
    await axios.post(`${baseURL}/save`, {
      title,
      content,
      selectedCategory,
    });
  } catch (e) {
    console.log(e);
  }
};

const updateTodo = async (_id,  content) => {
  try {   
    await axios.post(`${baseURL}/update`, {
      _id: _id,
      content: content,
    })
    .then((data)=> {
      getAllTodo()
    })

  } catch (error) {
    console.log("update error", error);
  }
};

const deleteTodo = async (_id) => {
  await axios.post(`${baseURL}/delete`, { _id });
};

export { getAllTodo, addTodo, updateTodo, deleteTodo };
