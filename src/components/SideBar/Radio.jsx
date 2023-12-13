import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByData } from "../../features/filter/filterSlice";

export default function Radio() {
  const [check, setCheck] = useState("");
  // console.log(check);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByData(check));
  }, [dispatch, check]);

  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        {/* handle filter on button click */}
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            defaultChecked
            className="radio"
            onChange={(e) => e.target.checked && setCheck("")}
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-saved"
            className="radio"
            onChange={(e) => e.target.checked && setCheck("saved")}
          />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
}
