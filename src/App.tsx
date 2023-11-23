import TimersContextProvider from "./store/timers-store";

import Header from "./components/Header";
import Timers from "./components/Timers";
import AddTimer from "./components/AddTimer";
import { get } from "./utils/http";
import { ReactNode, useEffect, useState } from "react";
import BlogPosts, { type BlogPost } from "./components/BlogPosts";
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[] | undefined>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        //TODO convert to zod as an example

        const data = (await get("https://jsonplaceholdex.typicode.com/posts")) as RawDataBlogPost[];

        if (data.length > 0) {
          const blogPosts: BlogPost[] = data.map(rawPost => {
            return {
              id: rawPost.id,
              title: rawPost.title,
              text: rawPost.body,
            };
          });
          setFetchedPosts(blogPosts);
        }

        setIsFetching(false);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        }
      }
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  if (isFetching) {
    content = <p>Fetching posts..</p>;
  }
  if (errorMessage) {
    content = <ErrorMessage text={errorMessage} />;
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
