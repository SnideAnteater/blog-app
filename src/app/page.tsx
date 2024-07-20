import Image from "next/image";
import { getSortedPosts } from "./lib/post";
import PostListItem from "./components/PostListItem";

export default function Home() {
  const posts = getSortedPosts();
  return (
    <section className=" mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header className=" font-rokkitt font-light text-6xl text-neutral-50 text-center">
        <h1>Blog Site</h1>
      </header>
      <section className=" md:grid md:grid-cols-2 flex flex-col gap-10">
        {posts !== null
          ? posts.map((post, id) => (
              <PostListItem post={post} key={id}></PostListItem>
            ))
          : null}
      </section>
    </section>
  );
}
