import { get } from "./util/http";
import { useEffect, useState } from "react";
import BlogPosts, {
  type BlogPost,
  type BlogPostResponse,
  BlogPostResponseSchema,
} from "./components/BlogPosts";
import fetchingImg from "./assets/data-fetching.png";

function App() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await get<BlogPostResponse>(
        "https://jsonplaceholder.typicode.com/posts",
        BlogPostResponseSchema,
      );

      const posts: BlogPost[] = response.map((blogPost) => {
        return {
          id: blogPost.id,
          title: blogPost.title,
          text: blogPost.body,
        };
      });

      setPosts(posts);
    }

    fetchPosts();
  }, []);

  return (
    <main>
      <img
        src={fetchingImg}
        alt="An abstract image depicting a data fetching process"
      />
      <BlogPosts posts={posts} />
    </main>
  );
}

export default App;
