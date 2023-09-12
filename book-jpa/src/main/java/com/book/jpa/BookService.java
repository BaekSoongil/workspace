package com.book.jpa;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class BookService {

	private final BookRepository bookRepository;
	
	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}
	
	// 모든 책 리스트 가져오기
	public List<Book> getAllBooks(){
		return bookRepository.findAll();
	}
	
	// 책 Id로 책정보 가져오기
	public Book getBookById(String id) {
		Optional<Book> book = bookRepository.findById(id);
		return book.get();
	}
	
	// 책정보 신규저장
	public void saveBook(Book book) {
		bookRepository.save(book);
	}
	
	// 책정보 수정
	public void updateBook(Book book) {
		bookRepository.save(book);
	}
	
	// 책정보 삭제
	public void deleteBook(String id) {
		bookRepository.deleteById(id);
	}
}
