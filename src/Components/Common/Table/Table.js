import React, { useState, useMemo } from "react";
import Filter from "./Filter";

const Table = ({ columns = [], data = [], onClick }) => {
  const [search, setSearch] = useState("");
  const [sortCol, setSortCol] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  // SEARCH
  const filteredData = useMemo(() => {
    if (!search) return data;
    return data.filter((row) =>
      Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, data]);

  // SORT
  const sortedData = useMemo(() => {
    if (!sortCol) return filteredData;

    return [...filteredData].sort((a, b) => {
      const val1 = a[sortCol];
      const val2 = b[sortCol];
      if (val1 < val2) return sortOrder === "asc" ? -1 : 1;
      if (val1 > val2) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortCol, sortOrder]);

  const handleSort = (key) => {
    if (sortCol === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCol(key);
      setSortOrder("asc");
    }
  };

  // Create grid template columns based on column count
  const gridTemplate = `grid-cols-${columns.length}`;

  return (
    <div className="w-full h-screen flex flex-col">
      {/* TOP BAR: Search Left + Add Right */}
      <div className="flex justify-between items-center px-2 mb-2">
        {/* Search Component */}
        <Filter search={search} setSearch={setSearch} />

        {/* Add button */}
        <div
          className="cursor-pointer text-purple-600 font-semibold bg-purple-100 px-4 py-2 rounded-full hover:bg-purple-200 transition mr-2"
          onClick={onClick}
        >
          Add +
        </div>

      </div>

      {/* TABLE WRAPPER */}
      <div className="flex-1 overflow-auto border rounded-lg p-2">

        {/* ROUNDED HEADER */}
        <div className="sticky top-0 z-10 p-2 bg-white">
          <div
            className={`grid ${gridTemplate} bg-purple-500 text-white rounded-full shadow px-4 py-2 font-semibold`}
            style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
          >
            {columns.map((col) => (
              <div
                key={col.accessor}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => handleSort(col.accessor)}
              >
                {col.Header}
                {sortCol === col.accessor && (
                  <span className="ml-1">
                    {sortOrder === "asc" ? "▲" : "▼"}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ROUNDED BODY ROWS */}
        <div>
          {sortedData.map((row, index) => (
            <div key={index} className="p-2">
              <div
                className="grid bg-white text-black rounded-full shadow px-4 py-2 hover:bg-purple-50 hover:text-purple-500 transition"
                style={{ gridTemplateColumns: `repeat(${columns.length}, 1fr)` }}
              >
                {columns.map((col) => (
                  <div key={col.accessor} className="whitespace-nowrap">
                    {col.Cell
                      ? col.Cell({
                        row: { ...row, index },
                        value: row[col.accessor],
                      })
                      : row[col.accessor]}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {sortedData.length === 0 && (
            <div className="text-center p-4 text-gray-500">No results found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
