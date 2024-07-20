import React from "react";
import Link from "next/link";
import { getPostData } from "../lib/post";
import Image from "next/image";

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const PostPage = async ({ params }: { params: { slug: string } }) => {
  // console.log(decodeURI(params.slug));
  const postData = await getPostData(decodeURI(params.slug));
  // console.log(postData);
  return (
    <section className=" mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
      <Image
        height={1000}
        width={1000}
        src={postData.image}
        alt="image"
      ></Image>
      <h2 className=" font-rokkitt text-4xl text-center">{postData.title}</h2>
      <h3 className=" font-rokkitt text-lg">
        By {postData.author} ● {postData.date}
      </h3>
      <div className=" flex justify-between font-montserrat text-base">
        {postData.content}
      </div>
      <div>
        Tags:
        {postData.tags.map((tag: any, id: number) => {
          const isLast = id === postData.tags.length - 1;
          return isLast ? (
            <>{capitalizeFirstLetter(tag)}</>
          ) : (
            <>{capitalizeFirstLetter(tag)}, </>
          );
        })}
      </div>
    </section>
  );
};

export default PostPage;
