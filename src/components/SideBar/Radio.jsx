export default function Radio() {
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
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input type="radio" name="filter" id="lws-saved" className="radio" />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
}
