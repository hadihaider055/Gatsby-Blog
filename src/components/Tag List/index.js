import React from "react";
import { Link } from "gatsby";
import setupTags from "../../utils/setupTags";
import slugify from "slugify";

const TagList = ({ blogs }) => {
  const newTags = setupTags(blogs);
  return (
    <div className="order-0 flex flex-col">
      <h4 className="mb-2 font-serif text-2xl">Blogs</h4>
      <div className="grid md:grid-cols-1 grid-cols-3">
        {newTags.map((tag, index) => {
          const [text, value] = tag;
          const slug = slugify(text, { lower: true });
          return (
            <Link
              to={`/tags/${slug}`}
              key={index}
              className="capitalize block text-gray-500 transition-all duration-300 ease-in-out hover:text-purple-700 font-serif md:text-lg text-sm"
            >
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagList;
