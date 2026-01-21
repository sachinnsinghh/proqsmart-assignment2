import type { FlatRow, TreeNode } from "../types/types";


export function buildTree(data: FlatRow[]): TreeNode[] {
const categoryMap = new Map<string, TreeNode>();


data.forEach((row) => {
if (!categoryMap.has(row.category)) {
categoryMap.set(row.category, {
key: row.category,
label: row.category,
children: [],
});
}


const categoryNode = categoryMap.get(row.category)!;


let sub1Node = categoryNode.children!.find(
(c) => c.key === row.subCategory1
);


if (!sub1Node) {
sub1Node = {
key: row.subCategory1,
label: row.subCategory1,
children: [],
};
categoryNode.children!.push(sub1Node);
}


let sub2Node = sub1Node.children!.find(
(c) => c.key === row.subCategory2
);


if (!sub2Node) {
sub2Node = {
key: row.subCategory2,
label: row.subCategory2,
children: [],
};
sub1Node.children!.push(sub2Node);
}


sub2Node.children!.push({
key: row.itemCode,
label: row.itemCode,
data: {
description: row.description,
quantity: row.quantity,
rate: row.rate,
},
});
});


return Array.from(categoryMap.values());
}