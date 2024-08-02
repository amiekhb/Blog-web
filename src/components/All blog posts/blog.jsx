import React from "react";

const Blog = () => {
  return (
    <div className="mt-32">
      <p className="text-xl font-bold mb-10">All Blog Post </p>
      <div className="flex justify-between">
        <ul className="flex gap-5">
          <li>All</li>
          <li>Design</li>
          <li>Travel</li>
          <li>Fashion</li>
          <li>Technology</li>
          <li>Branding</li>
        </ul>
        <ul>
          <li>View All</li>
        </ul>
      </div>
      <div className="grid grid-cols-3"></div>
    </div>
  );
};

export default Blog;
