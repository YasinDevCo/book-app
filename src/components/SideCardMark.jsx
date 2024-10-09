import React from "react";
import styles from './SideCardsFM.module.css'
function SideCardMark({ data: { title, image } }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  );
}

export default SideCardMark;
