import React, { useState } from "react";
import type { TreeNode } from "../types/types";
import { ChevronDown, ChevronRight } from "lucide-react";

interface Props {
  node: TreeNode;
  level: number;
}

const TreeRow: React.FC<Props> = ({ node, level }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = !!(node.children && node.children.length > 0);
  const isLeaf = !hasChildren;

  return (
    <>
      <tr
        className={`
          border-b border-gray-200
          ${hasChildren ? "bg-gray-50" : "bg-white hover:bg-blue-50/30"}
        `}
      >
        {/* ITEM */}
        <td className="px-4 py-3 text-sm border-r border-gray-200">
          <div
            className="flex items-center gap-2"
            style={{ paddingLeft: `${level * 20}px` }}
          >
            {hasChildren ? (
              <button
                onClick={() => setExpanded(!expanded)}
                className="w-6 h-6 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                {expanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
            ) : (
              <div className="w-6 h-6" />
            )}

            <span
              className={`truncate ${
                hasChildren
                  ? "font-semibold text-gray-800"
                  : "font-medium text-gray-700"
              }`}
            >
              {node.label}
            </span>

            {hasChildren && (
              <span className="ml-2 text-xs font-semibold text-gray-500">
                ({node.children?.length})
              </span>
            )}
          </div>
        </td>

        {/* DESCRIPTION */}
        <td className="px-4 py-3 text-sm border-r border-gray-200 text-gray-600">
          {node.data?.description ?? "—"}
        </td>

        {/* QUANTITY */}
        <td className="px-4 py-3 text-sm text-center border-r border-gray-200">
          {node.data?.quantity ?? "—"}
        </td>

        {/* RATE */}
        <td className="px-4 py-3 text-sm text-right font-medium text-gray-800">
          {node.data?.rate ? `₹${node.data.rate.toFixed(2)}` : "—"}
        </td>
      </tr>

      {expanded &&
        node.children?.map((child) => (
          <TreeRow key={child.key} node={child} level={level + 1} />
        ))}
    </>
  );
};

export default TreeRow;
