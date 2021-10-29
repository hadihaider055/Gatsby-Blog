import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogList = ({ blogs = [] }) => {
  return (
    <div className="grid gap-x-4 gap-y-8 lg:grid-cols-3 pb-12 sm:grid-cols-2 md:grid-cols-2">
      {blogs.map((blog) => {
        const { title, slug, author, date, thumbnail } = blog;
        const pathToImage = getImage(thumbnail);
        return (
          <Link key={slug} to={`/blogs/${slug}`} className="block">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="h-60 rounded-lg md:h-44 sm:h-40"
            />
            <h5 className="mb-0 mt-1 text-gray-900 font-medium font-serif line-clamp-1">
              {title}
            </h5>
            <div className="flex items-center justify-between mt-4">
              <p className="text-gray-400 font-lato font-light text-sm">
                {author}
              </p>
              <p className="text-gray-400 font-lato font-light text-sm">
                {date}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogList;
