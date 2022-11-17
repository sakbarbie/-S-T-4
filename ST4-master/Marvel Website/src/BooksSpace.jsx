import React from "react";
import booksData from './booksData';
import ShowBooks from "./ShowBooks";

const bookspace = () => {
    return (
        <>
            <div className = 'bookspace'>
             { booksData.map((val,index) => {
                  return(<ShowBooks srclink = {val.srclink}
                              bookname = {val.bookname}
                              imglink = {val.imglink}
                   /> 
                  );
                })}
                
            </div>
        </>
    );
}
export default bookspace;