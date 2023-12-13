/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { sortByData } from "../../features/filter/filterSlice";

export default function Select() {
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    dispatch(sortByData(e.target.value));
  };

  const { sortBy } = useSelector((state) => state.filter);

  let content;
  if (sortBy === "newest") {
    content = (
      <>
        <option value="">Default</option>
        <option selected value="newest">
          Newest
        </option>
        <option value="most_liked">Most Liked</option>
      </>
    );
  } else if (sortBy === "most_liked") {
    content = (
      <>
        <option value="">Default</option>
        <option value="newest">Newest</option>
        <option selected value="most_liked">
          Most Liked
        </option>
      </>
    );
  } else {
    content = (
      <>
        <option selected value="">
          Default
        </option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </>
    );
  }

  return (
    <div className="sidebar-content">
      <h4>Sort</h4>
      <select
        onChange={handleSelect}
        name="sort"
        id="lws-sort"
        className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
      >
        {content}
      </select>
    </div>
  );
}
