import React from "react";
import Link from "next/link";
import { PostItem } from "../types";
import Image from "next/image";

// interface Props {
//   category: string[];
//   posts: PostItem[];
// }

const PostListItem: React.FC<{ post: PostItem }> = ({ post }) => {
  // console.log(post.tags);
  return (
    <div className=" flex flex-col gap-5">
      <Image src={post.image} height={300} width={300} alt="hello"></Image>
      <div className=" flex flex-col gap-2.5 font-rokkitt text-2xl">
        <Link
          href={`/${post.title}`}
          className=" text-neutral-50 hover:text-amber-500 transition duration-150"
        >
          {post.title}
        </Link>
        <div className=" font-montserrat text-base">
          {post.tags.map((tag, id) => {
            const isLast = id === post.tags.length - 1;
            return isLast ? <>{tag}</> : <>{tag}, </>;
          })}
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
