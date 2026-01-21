export type FlatRow = {
category: string;
subCategory1: string;
subCategory2: string;
itemCode: string;
description: string;
quantity: number;
rate: number;
};


export type TreeNode = {
key: string;
label: string;
children?: TreeNode[];
data?: {
description: string;
quantity: number;
rate: number;
};
};