import React, { useState } from "react";
import { books as bookData } from "../constants/mockData";
import BookCard from "./BookCard";
import SideCardLike from "./SideCardLike";
import SideCardMark from "./SideCardMark";
import styles from "./Books.module.css";
import SearchBox from "./SearchBox";
function Books() {
  const [books, setBooks] = useState(bookData);
  const [liked, setLiked] = useState([]);
  const [marked, setMarked] = useState([]);
  const [search, setSearch] = useState([]);
  const handleLikedList = (book, statusLike) => {
    if (statusLike) {
      const newListLiked = liked.filter((i) => i.id !== book.id);
      setLiked(newListLiked);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  const handleMarkedList = (book, statusMark) => {
    if (statusMark) {
      const newListMarked = marked.filter((i) => i.id !== book.id);
      setMarked(newListMarked);
    } else {
      setMarked((marked) => [...marked, book]);
    }
  };
  const searchHandler = () => {
    if (search) {
      const newBooks = bookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(bookData);
    }
  };
  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handleLikedList={handleLikedList}
              handleMarkedList={handleMarkedList}
            />
          ))}
        </div>
        <div className={styles.fav_sav}>
          {!!liked.length && (
            <div className={styles.favorites}>
              <h4>Favorites :</h4>
              {liked.map((bookLike) => (
                <SideCardLike key={bookLike.id} data={bookLike} />
              ))}
            </div>
          )}
          {!!marked.length && (
            <div className={styles.saved}>
              <h4>Saved :</h4>
              {marked.map((bookMark) => (
                <SideCardMark key={bookMark.id} data={bookMark} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Books;
