import React from "react";
import TreeRow from "./TreeRow";
import { buildTree } from "../utils/buildTree";
import { flatData } from "../data/dummyData";
import { Layers } from "lucide-react";

const TreeTable: React.FC = () => {
  const treeData = buildTree(flatData);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">

        {/* Header */}
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Layers className="w-7 h-7 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Tree Table</h1>
          </div>
          <p className="text-gray-500 text-sm">
            Interactive hierarchical data organization
          </p>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">

          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full border-collapse table-fixed">

              {/* Header */}
              <thead>
                <tr className="bg-gray-100 text-gray-700 border-b border-gray-300">
                  <th className="px-4 py-3 text-left text-sm font-semibold border-r border-gray-300 w-[300px]">
                    Item
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold border-r border-gray-300 w-[400px]">
                    Description
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold border-r border-gray-300 w-[120px]">
                    Quantity
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold w-[120px]">
                    Rate
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {treeData.map((node) => (
                  <TreeRow key={node.key} node={node} level={0} />
                ))}
              </tbody>
            </table>
          </div>

          {treeData.length === 0 && (
            <div className="py-10 text-center text-gray-500">
              No data available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreeTable;
