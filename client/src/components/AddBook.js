import { useQuery,useMutation } from "@apollo/client";
import { getAuthorsQuery,addBookMutation } from "../queries/queries";
import React from "react";



function AddBook(){
  const [book,setBook] = React.useState("")
  const [genre,setGenre] = React.useState("")
  const [author,setAuthor] = React.useState("")

  const {loading, error, data } = useQuery(getAuthorsQuery);
    if(loading){
        return(<p>Loading authors...</p>)
    }

    if(error){
      return(<p>Something went wrong...</p>)
  }

  function SubmitForm(e){
    e.preventDefault()
    console.log(book,author,genre)
    useMutation(addBookMutation(book,author,genre))
  }

  return(
    <form id="add-book" onSubmit={SubmitForm}>
    <div className="field">
      <label>Book name:</label>
      <input onChange={(e)=>setBook(e.target.value)} type="text" />
    </div>

    <div className="field">
      <label>Genre:</label>
      <input onChange={(e)=>setGenre(e.target.value)}  type="text" />
    </div>

    <div className="field">
      <label>Author</label>
      <select onChange={(e)=>setAuthor(e.target.value)} >
        {data.authors.map((author) => (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))}
      </select>
    </div>

    <button>+</button>
  </form>
  )
}



export default AddBook