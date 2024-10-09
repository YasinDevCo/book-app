import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import style from "./BookCard.module.css";
function BookCard({ data, handleLikedList, handleMarkedList }) {
  const { image, language, title, author, pages } = data;
  const [like, setLike] = useState(false);
  const [mark, setMark] = useState(false);
  const likeHandler = () => {
    handleLikedList(data, like);
    setLike((like) => !like);
  };
  const markHandler = () => {
    handleMarkedList(data, mark);
    setMark((mark) => !mark);
  };
  return (
    <div className={style.card}>
      <img src={image} alt="" />
      <div className={style.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>

      <div className={style.btns}>
        <button onClick={markHandler}>
          <FaBookmark color={mark ? "black" : "#e0e0e0"} fontSize="1.5rem" />
        </button>

        <button onClick={likeHandler}>
          <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
        </button>
      </div>
    </div>
  );
}

export default BookCard;
