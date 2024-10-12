import { useEffect } from "react";
import RectionButton from "./ReactionButton";

import { usePostsSelector,usePostStatus, useFetchPosts } from "./state/hooks";

const PostsList = (props) => {
  const posts = usePostsSelector();
  const status = usePostStatus()

  const callFetchPost = useFetchPosts()

  useEffect(() => {
    callFetchPost()
  }, []);

  if (status === "loading") return <h2>Loading...</h2>;

  if (status === "failed") return <h2>We are working on it, stay alert...</h2>;

  return (
    <>
      <h2>Posts</h2>
      <section>
        {posts.map((post) => {
          return (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <RectionButton post={post} />
            </article>
          );
        })}
      </section>
    </>
  );
};
export default PostsList;
