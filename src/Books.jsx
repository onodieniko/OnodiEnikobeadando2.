import React, { useState, useEffect } from 'react';

export default function Books() {
  const [books, setBooks] = useState([]);
  const [titleInput, setTitleInput] = useState('');
  const [pagesInput, setPagesInput] = useState('');
  const [averagePages, setAveragePages] = useState(0);
  const [bookCount, setBookCount] = useState(0);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (books.length > 0) {
      const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
      setAveragePages(totalPages / books.length);
    } else {
      setAveragePages(0);
    }
  }, [books]);

  useEffect(() => {
    setBookCount(books.length);
  }, [books]);

  const handleAddOrUpdateBook = () => {
    if (titleInput.trim() !== '' && pagesInput.trim() !== '' && !isNaN(pagesInput)) {
      if (editId === null) {
        const newBook = {
          id: Date.now(),
          title: titleInput,
          pages: parseInt(pagesInput),
        };
        setBooks([...books, newBook]);
      } else {
        const updatedBooks = books.map(book =>
          book.id === editId
            ? { ...book, title: titleInput, pages: parseInt(pagesInput) }
            : book
        );
        setBooks(updatedBooks);
        setEditId(null);
      }
      setTitleInput('');
      setPagesInput('');
    } else {
      alert('Adj meg helyes címet és oldalszámot!');
    }
  };

  const handleDeleteBook = (bookId) => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  const handleEditBook = (book) => {
    setTitleInput(book.title);
    setPagesInput(book.pages);
    setEditId(book.id);
  };

  return (
    <div>
      <h1>Könyvkezelő</h1>
      <div className="input-container">
        <input
          type="text"
          value={titleInput}
          placeholder="Könyv címe"
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <input
          type="number"
          value={pagesInput}
          placeholder="Oldalszám"
          onChange={(e) => setPagesInput(e.target.value)}
        />
        <button onClick={handleAddOrUpdateBook}>
          {editId === null ? 'Könyv hozzáadása' : 'Könyv mentése'}
        </button>
      </div>
      <ul className="book-list">
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> ({book.pages} oldal)
            <div className="buttons">
              <button onClick={() => handleDeleteBook(book.id)}>Törlés</button>
              <button onClick={() => handleEditBook(book)}>Szerkesztés</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="stats">
        <p>Könyvek száma: {bookCount}</p>
        <p>Átlagos oldalszám: {averagePages.toFixed(2)}</p>
      </div>
    </div>
  );
}
