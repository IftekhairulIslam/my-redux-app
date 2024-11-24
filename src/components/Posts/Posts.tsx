import { usePosts } from "../../hooks/usePosts";
import PostType from "../../types/Post.type";

const Posts: React.FC = () => {
  const { data, isFetching, error } = usePosts();

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (data.length === 0) return <p>No data found</p>;

  return (
    <ul>
      {data.map((post: PostType) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Posts;
