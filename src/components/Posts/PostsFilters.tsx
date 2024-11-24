import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectPostFilters,
  setLimit,
  setPage,
} from "../../store/slices/postFilters.slice";

const PostsFilters = () => {
  const dispatch = useAppDispatch();
  const { limit, page } = useAppSelector(selectPostFilters);

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    dispatch(setLimit(value));
  };

  const handlePageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    dispatch(setPage(value));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <div>
        <label htmlFor="limit">Limit:</label>
        <select
          name="limit"
          id="limit"
          value={limit}
          onChange={handleLimitChange}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
      </div>
      <div>
        <label htmlFor="page">Page:</label>
        <input
          name="page"
          id="page"
          type="number"
          placeholder="Page"
          value={page}
          onChange={handlePageChange}
          min={1}
        />
      </div>
    </div>
  );
};

export default PostsFilters;
