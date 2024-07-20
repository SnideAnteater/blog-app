import React from "react";
import { GetStaticProps, NextApiRequest, NextApiResponse } from "next";
import { getSortedPosts } from "../lib/post";
import { PostItem } from "../types";

type Props = {
  posts: PostItem[];
};

const page = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const posts = getSortedPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

export default page;
