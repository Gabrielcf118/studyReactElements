import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export default function Testimonial() {
  const [testimonials, SetTestimonials] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <div className="container m-auto">
      <Title text={"Testimonial"} />
      <Button
        text={"Posts"}
        icon={<BsFillFileEarmarkPostFill />}
        onClick={() => SetTestimonials("posts")}
      />
      <Button
        text={"Users"}
        icon={<FaUserAlt />}
        onClick={() => SetTestimonials("users")}
      />
      <Button
        text={"Comments"}
        icon={<BiCommentDetail />}
        onClick={() => SetTestimonials("comments")}
      />
      <Title
        text={!testimonials ? "Select from above!" : testimonials}
        classes={"subtitle text-primary"}
      />
      {!items
        ? null
        : items.map((item) => {
            return (
              <div className="card card-primary mb-2" key={item.id}>
                {item.name && <h2 className="card-header">{item.name}</h2>}
                <div className="card-body">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                {item.email && (
                  <small className="card-footer">{item.email}</small>
                )}
              </div>
            );
          })}
    </div>
  );
}
