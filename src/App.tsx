import TimersContextProvider from "./store/timers-store";

import Header from "./components/Header";
import Timers from "./components/Timers";
import AddTimer from "./components/AddTimer";
import { get } from "./utils/http";
import { ReactNode, useEffect, useState } from "react";
import BlogPosts, { type BlogPost } from "./components/BlogPosts";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[] | undefined>();

  useEffect(() => {
    async function fetchPosts() {
      const data = (await get("https://jsonplaceholder.typicode.com/posts")) as RawDataBlogPost[];

      const blogPosts: BlogPost[] = data.map(rawPost => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        };
      });

      setFetchedPosts(blogPosts);
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
      {content}
    </TimersContextProvider>
  );
}

export default App;
