import { Link } from "react-router-dom";

const Tabs = ({ todos, selectedTab, setSelectedTab }) => {
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className='tab-container'>
      {tabs.map((tab) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((todo) => !todo.complete).length
            : todos.filter((todo) => todo.complete).length;

        return (
          <Link key={tab} to={`/${tab}`}>
            <button
              onClick={() => setSelectedTab(tab)}
              className={
                "tab-button " + (tab === selectedTab ? "tab-selected" : "")
              }>
              <h4>
                {tab} <span>({numOfTasks})</span>
              </h4>
            </button>
          </Link>
        );
      })}
      <hr />
    </nav>
  );
};
export default Tabs;
