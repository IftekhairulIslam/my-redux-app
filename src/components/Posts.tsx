import { useFetchPosts } from "../hooks/fetchPosts";
import PostType from "../types/Post.type";

const Posts = () => {
  const { data } = useFetchPosts();
  const posts: PostType[] = data ? data : [];

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: PostType) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
