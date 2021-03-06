import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h2 className={styles.title}>Card Preview</h2>
      <ul className={styles.cards}>
        {Object.keys(cards).map((key) => (
          <Card key={key} card={cards[key]} />
          // state를 오브젝트로 관리하기 때문에 오브젝트의 키들을 맵으로 돌린다
          // maker 에서 state 에 지정한 id 1 2 3 이 key 다
        ))}
      </ul>
    </section>
  );
};

export default Preview;
