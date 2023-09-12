/**
 * 
 */
import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {deleteBook} from './api';

export default function BookList(){
	const [bookList, setBookList] = useState([]);
	
	useEffect(()=>{
		fetchBookList()
	},[]);
	
	const fetchBookList = () => {
		axios.get('/')
			.then((response)=>{
				setBookList(response.data);
			})
			.catch((error)=>{
				console.log("Error while fetching books:",error);
			})
	}
	
	const handleDeleteConfirm = (id) => {
		if(window.confirm("정말로 삭제하시겠습니까?")){
			deleteBook(id)
				.then(()=>{
					console.log("Book deleted successfully");
					fetchBookList();
				})
				.catch((error) =>{
					console.log("Error while deleting book:",error);
				});
		}
	}
	
	return (
		<div className="container">
			<h2 className="text-center mt-5 mb-3">Book 목록</h2>
			<div className="card">
				<div className="card-header">
					<Link className="btn btn-outline-primary mx-1" to="/">Home</Link>
					<Link className="btn btn-outline-primary mx-1" to="/add">Book Register</Link>
				</div>
				<div className="card-body">
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>ID</th>
								<th>Title</th>
								<th>Author</th>
								<th width="220px">Action</th>
							</tr>
						</thead>
						<tbody>
							{booklist.map((book, key)=>{
								return (
									<tr key={key}>
										<td>{book.bookId}</td>
										<td>{book.title}</td>
										<td>{book.author}</td>
										<td>
											<Link to={'/view/${book.bookId}'} className="btn btn-outline-info mx-1">조회</Link>
											<Link to={'/edit/${book.bookId}'} className="btn btn-outline-success mx-1">수정</Link>
											<button onClick={()=>handleDeleteConfirm(book.bookId)} className="btn btn-outline-danger mx-1">
												삭제
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}