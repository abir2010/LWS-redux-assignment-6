import Select from "./Select";
import Radio from "./Radio";

export default function SideBarContainer() {
  return (
    <aside>
      <div className="sidebar-items">
        <Select />
        <Radio />
      </div>
    </aside>
  );
}
