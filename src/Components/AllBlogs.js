import React from "react";
import Blog from "./Blog";
import "./Styles/AllBlogs.css";
import { useEffect, useState } from "react";

const AllBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let data = [
      {
        id: 1,
        title: "Lorem Ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper. Morbi suscipit mollis arcu vitae sollicitudin. Vestibulum vehicula et lectus id varius. Sed ut pretium odio, nec convallis tellus. Nullam id dui turpis. Integer suscipit in arcu non laoreet. In sit amet aliquam urna. Donec varius eros nec orci fringilla iaculis. Vestibulum dignissim purus et consectetur congue. Donec at efficitur velit. Ut elit enim, bibendum in lacinia ut, imperdiet nec nunc. Aliquam blandit a enim vehicula ornare.",
        image: "https://i.stack.imgur.com/y9DpT.jpg",
      },
      {
        id: 3,
        title: "Lorem Ipsum #2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper. Morbi suscipit mollis arcu vitae sollicitudin. Vestibulum vehicula et lectus id varius. Sed ut pretium odio, nec convallis tellus. Nullam id dui turpis. Integer suscipit in arcu non laoreet. In sit amet aliquam urna. Donec varius eros nec orci fringilla iaculis. Vestibulum dignissim purus et consectetur congue. Donec at efficitur velit. Ut elit enim, bibendum in lacinia ut, imperdiet nec nunc. Aliquam blandit a enim vehicula ornare.",
        image: "https://i.stack.imgur.com/y9DpT.jpg",
      },
      {
        id: 3,
        title: "Lorem Ipsum #3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper.",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis rhoncus dui ut semper. Morbi suscipit mollis arcu vitae sollicitudin. Vestibulum vehicula et lectus id varius. Sed ut pretium odio, nec convallis tellus. Nullam id dui turpis. Integer suscipit in arcu non laoreet. In sit amet aliquam urna. Donec varius eros nec orci fringilla iaculis. Vestibulum dignissim purus et consectetur congue. Donec at efficitur velit. Ut elit enim, bibendum in lacinia ut, imperdiet nec nunc. Aliquam blandit a enim vehicula ornare.",
        image: "https://i.stack.imgur.com/y9DpT.jpg",
      },
    ];
    setPosts(data);
  }, []);

  return (
    <div className="marginBox">
      <div>
        {posts.map((post) => {
          return <Blog post={post} />;
        })}
      </div>
    </div>
  );
};

export default AllBlogs;