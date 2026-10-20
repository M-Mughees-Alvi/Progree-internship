import { useState } from "react";
import { products } from "../data";

function DataTable() {
  const [search_text, setSearchText] = useState("");
  const [first_column, setFirstColumn] = useState("category");
  const [first_direction, setFirstDirection] = useState("asc");
  const [second_column, setSecondColumn] = useState("revenue");
  const [second_direction, setSecondDirection] = useState("desc");
  const filtered_list = products.filter(function (item) {
    const text = search_text.toLowerCase();
    return (
      item.name.toLowerCase().includes(text) ||
      item.category.toLowerCase().includes(text) ||
      item.region.toLowerCase().includes(text)
    );
  });

  // compare two rows using one column
  function compareValues(a, b, column, direction) {
    let result = 0;
    if (a[column] < b[column]) {
      result = -1;
    } else if (a[column] > b[column]) {
      result = 1;
    }
    if (direction === "desc") {
      result = -result;
    }
    return result;
  }

  // multi-column sort: use the second column only if the first is equal
  const sorted_list = [...filtered_list].sort(function (a, b) {
    const first_result = compareValues(a, b, first_column, first_direction);
    if (first_result !== 0) {
      return first_result;
    }
    return compareValues(a, b, second_column, second_direction);
  });

  const column_options = (
    <>
      <option value="name">Name</option>
      <option value="category">Category</option>
      <option value="region">Region</option>
      <option value="revenue">Revenue</option>
      <option value="units">Units</option>
    </>
  );

  return (
    <div>
      <h1>Data Table</h1>

      <div className="card">
        <input
          type="text"
          placeholder="Search name, category or region..."
          value={search_text}
          onChange={function (e) {
            setSearchText(e.target.value);
          }}
        />

        <div className="sort-row">
          <label>
            Sort by:{" "}
            <select
              value={first_column}
              onChange={function (e) {
                setFirstColumn(e.target.value);
              }}
            >
              {column_options}
            </select>
            <select
              value={first_direction}
              onChange={function (e) {
                setFirstDirection(e.target.value);
              }}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>

          <label>
            Then by:{" "}
            <select
              value={second_column}
              onChange={function (e) {
                setSecondColumn(e.target.value);
              }}
            >
              {column_options}
            </select>
            <select
              value={second_direction}
              onChange={function (e) {
                setSecondDirection(e.target.value);
              }}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </label>
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Region</th>
              <th>Revenue</th>
              <th>Units</th>
            </tr>
          </thead>
          <tbody>
            {sorted_list.map(function (item) {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.region}</td>
                  <td>{item.revenue}</td>
                  <td>{item.units}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
