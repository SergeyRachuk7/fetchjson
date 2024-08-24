import axios from "axios";

const url =  'https://jsonplaceholder.typicode.com/todos/1';    

interface Todo {
  id: number; 
  title: string;
  finshed: boolean
}

axios.get(url).then(response =>  {
  const todo = response.data as Todo; 

  const ID = todo.id;
  const title = todo.title;
  const finshed = todo.finshed; 


  console.log(`The Todo with ID:  ${ID} 
  Has a title of: ${title} 
  Is it finshed? ${finshed}
  `); 
});


