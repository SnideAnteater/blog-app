import fs from "fs";
import path from "path";
import moment from "moment";

import type { PostItem } from "../types";

const PostDirectory = path.join(process.cwd(), "src/app/data");

export const getSortedPosts = (): PostItem[] => {
  // const filename = fs.readdirSync(PostDirectory);

  const filePath = path.join(PostDirectory, "post.json");
  // return filePath;
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const jsonData = JSON.parse(fileContents);
  // console.log(jsonData);

  const allPostData = jsonData.posts.map((post: any) => {
    return {
      id: post.id,
      title: post.title,
      author: post.author,
      date: post.date,
      content: post.content,
      tags: post.tags || "", // Assuming category may not be present
      image: post.image,
    };
  });

  return allPostData.sort((a: any, b: any) => {
    const dateOne = moment(a.date);
    const dateTwo = moment(b.date);
    if (dateOne.isBefore(dateTwo)) {
      return -1;
    } else if (dateTwo.isAfter(dateOne)) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const getPostData = async (title: string) => {
  const filePath = path.join(PostDirectory, "post.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const jsonData = JSON.parse(fileContents);

  const post = jsonData.posts.find(
    (item: { title: string }) => item.title === title
  );
  return post;
};
