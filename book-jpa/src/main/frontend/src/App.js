import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import BookAdd from './pages/BookAdd';
import BookEdit from './pages/BookEdit';
import BookView from './pages/BookView';

export default function App(){
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home/>} />
				<Route path='/list' element={<BookList/>} />
				<Route path='/add' element={<BookAdd/>} />
				<Route path='/edit/:id' element={<BookEdit/>} />
				<Route path='/view/:id' element={<BookView/>} />
			</Routes>
		</BrowserRouter>
	);
};
