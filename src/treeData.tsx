import React from 'react';
import  {
  TreeItem
} from 'react-sortable-tree'

const maxDepth = 5;

const renderDepthTitle = ( path: any ) => `Depth: ${path.length}`;


const treeData: TreeItem[] = [
  {
    title: '`title`',
    subtitle: '`subtitle`',
    expanded: true,
    children: [
      {
        title: 'Child Node',
        subtitle: 'Defined in `children` array belonging to parent',
      },
    ],
  },
];

export default treeData;
