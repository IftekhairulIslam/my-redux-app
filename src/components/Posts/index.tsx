import Posts from "./Posts";
import PostsFilters from "./PostsFilters";

const PostsIndex = () => {
  return (
    <div>
      <PostsFilters />
      <Posts />
    </div>
  );
};

export default PostsIndex;
