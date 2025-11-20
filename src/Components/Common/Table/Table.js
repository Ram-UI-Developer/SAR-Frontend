import React, { useState, useMemo } from "react";

const Table = ({ columns = [], data = [] }) => {
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

  return (
    <div className="w-full h-screen flex flex-col">
      {/* SEARCH INPUT */}
      <div className="p-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="px-3 py-2 border rounded w-full"
        />
      </div>

      {/* TABLE WRAPPER — FULL HEIGHT MINUS SEARCH BOX */}
      <div className="flex-1 overflow-auto border rounded-lg">
        <table className="min-w-full border-collapse">
          {/* STICKY HEADER */}
          <thead className="sticky top-0 bg-gray-100 shadow z-10">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.accessor}
                  className="p-3 border-b font-semibold cursor-pointer text-left whitespace-nowrap"
                  onClick={() => handleSort(col.accessor)}
                >
                  {col.Header}

                  {sortCol === col.accessor && (
                    <span className="ml-1">
                      {sortOrder === "asc" ? "▲" : "▼"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sortedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={col.accessor} className="p-3 border-b">
                    {col.Cell ? col.Cell({ row: { ...row, index }, value: row[col.accessor] }) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}

            {sortedData.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="text-center p-4 text-gray-500">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
