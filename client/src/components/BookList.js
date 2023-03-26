import React from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";




export default function BookList() {
    const {loading, error, data } = useQuery(getBooksQuery);
    if(loading){
        return(<p>Loading books...</p>)
    }

    if(error){
        return(<p>Something went wrong...</p>)
    }

    return (
      <div>
        <ul>
        {data.books && data.books.map((book) => (
          <li key = {book.id}>{book.name}</li>
        ))}
        </ul>
      </div>
    );
  
  }