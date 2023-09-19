package com.book.jpa;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/books")
public class BookController {
	
	private BookService bookService;
	
	public BookController(BookService bookService) {
		this.bookService = bookService;
	}
	
	@GetMapping("")
	public List<Book> getAllBooks(Model model) {
		return bookService.getAllBooks();
	}
	
	@GetMapping("/{id}")
	public Book viewBook(@PathVariable("id") String id) {
		return bookService.getBookById(id);
	}
	
	@PostMapping("")
	public void saveBook(@RequestBody Book book) {
		bookService.saveBook(book);
	}
	
	@PutMapping("/{id}")
	public void updateBook(@PathVariable("id") String id, @RequestBody Book book) {
		book.setBookId(id);
		bookService.updateBook(book);
	}
	
	@DeleteMapping("/{id}")
	public void deleteBook(@PathVariable("id") String id) {
		bookService.deleteBook(id);
	}
}
