/**
 * 
 */
import React, {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

import { deleteBook } from './api';

export default function BookView(){
    const [id, setId] = useState(useParams().id);
    const [book, setBook] = useState({bookId:'', title:'', author:'', publisher:'', releaseDate:'', isbn:''});

    useEffect(()=>{axios.get('/${id}')
            .then((response)=>{
                setBook(response.data);
            })
            .catch((error)=>{
                console.log("Error with getting Book : ",error);
            })
    },[]);

    const navigate = useNavigate();

    const handleDeleteConfirm = (id) => {
        if(window.confirm("정말로 삭제하시겠습니까?")){
            deleteBook(id)
                .then(()=>{
                    console.log("Book delete successfully.");
                    navigate("/list");
                })
                .catch((error)=>{
                    console.log("Error while deleting book :", error);
                });
        }
    }

    return(
        <div className="container">
            <h2 className="text-center mt-5 mb-3">Book 조회</h2>
            <div className="card">
                <div className="card-header">
                    <Link className="btn btn-outline-primary mx-1" to="/">Home</Link>
                    <Link className="btn btn-outline-primary mx-1" to="/list">Book 목록</Link>
                    <Link className="btn btn-outline-primary mx-1" to="/edit/${book.bookId}">수정</Link>
                    <button onClick={()=>handleDeleteConfirm(book.bookId)} className="btn btn-outline-danger mx-1">삭제</button>
                </div>
                <div className="card-body">
                    <b className="text-muted">ID:</b>
                    <p>{book.bookId}</p>
                    <b className="text-muted">제목:</b>
                    <p>{book.title}</p>
                    <b className="text-muted">저자:</b>
                    <p>{book.author}</p>
                    <b className="text-muted">출판사:</b>
                    <p>{book.publisher}</p>
                    <b className="text-muted">출판일:</b>
                    <p>{book.releaseDate}</p>
                    <b className="text-muted">ISBN</b>
                    <p>{book.isbn}</p>
                </div>
            </div>
        </div>
    );
}