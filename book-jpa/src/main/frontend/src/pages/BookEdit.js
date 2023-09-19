/**
 * 
 */
import React, {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

export default function BookEdit(){
    const [id, setId] = useState(useParams().id);

    const [bookId, setBookId] = useState('');
    const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [publisher, setPublisher] = useState('');
	const [releaseDate, setReleaseDate] = useState('');
	const [isbn, setIsbn] = useState('');
    
    useEffect(()=>{
        axios.get('/${id}')
            .then((response)=>{
                setBookId(response.data.bookId);
                setTitle(response.data.title);
                setAuthor(response.data.author);
                setPublisher(response.data.publisher);
                setReleaseDate(response.data.releaseDate);
                setIsbn(response.data.isbn);
            })
            .catch((error)=>{
                console.log("Error to get Book Information : ",error);
            })
    },[]);

    const navigate = useNavigate();

    const handleSave = (event) =>{
        event.preventDefault();
        const tmpBook = {
            bookId : bookId,
            title : title,
            author : author,
            publisher : publisher,
            releaseDate : releaseDate,
            isbn : isbn
        };

        axios.put('/${id}', tmpBook)
            .then((response)=>{
                console.log("Book edit successfully.");
                navigate("/list");
            })
            .catch((error)=>{
                console.log("Error while editing book: ",error);
            });
    }

    return(
        <div className="container">
            <h2 className="text-center mt-5 mb-3">Book 수정</h2>
            <div className="card">
                <div className="card-header">
                    <Link className="btn btn-outline-primary mx-1" to="/">Home</Link>
                    <Link className="btn btn-outline-primary mx-1" to="/list">목록</Link>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="bookId">ID</label>
                            <input onChange={(event)=>{setBookId(event.target.value)}}
                                value={bookId} type="text" className="form-control"
                                id="bookId" name="bookId" required></input>
                            <label htmlFor="title">제목</label>
                            <input onChange={(event)=>{setTitle(event.target.value)}}
                                value={title} type="text" className="form-control"
                                id="title" name="title" required></input>
                            <label htmlFor="author">저자</label>
                            <input onChange={(event)=>{setAuthor(event.target.value)}}
                                value={author} type="text" className="form-control"
                                id="author" name="author" required></input>
                            <label htmlFor="publisher">출판사</label>
                            <input onChange={(event)=>{setPublisher(event.target.value)}}
                                value={publisher} type="text" className="form-control"
                                id="publisher" name="publisher" required></input>
                            <label htmlFor="releaseDate">출판일</label>
                            <input onChange={(event)=>{setReleaseDate(event.target.value)}}
                                value={releaseDate} type="text" className="form-control"
                                id="releaseDate" name="releaseDate" required></input>
                            <label htmlFor="isbn">ISBN</label>
                            <input onChange={(event)=>{setIsbn(event.target.value)}}
                                value={isbn} type="text" className="form-control"
                                id="isbn" name="isbn" required></input>
                        </div>
                        <button onClick={handleSave} type="button" className="btn btn-outline-primary mt-3">저장</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
