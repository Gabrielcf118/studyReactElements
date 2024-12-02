import React, { useState } from "react";
import Title from "../../components/Title";
import { FaRegSmile } from "react-icons/fa";
import { AiOutlineComment, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import DogyDog from "./img/dog.jpg";

export default function LikePhoto() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  return (
    <div className="container text-center">
      <Title text={"Like Photo"} />
      <Title text={`Likes ${count}`} classes={"subtitle"} />

      <div
        className="card card-dark m-auto"
        style={{ width: 300, cursor: "pointer" }}
        onDoubleClick={toggleLike}
      >
        <div className="card-header fs-xl">
          <FaRegSmile className="mr-2" />
          <small>dogg</small>
        </div>
        <img src={DogyDog} alt="img" style={{ height: "fit-content" }} />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />

          {like ? (
            <AiFillHeart className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
}
