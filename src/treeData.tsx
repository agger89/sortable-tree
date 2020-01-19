import  {
  TreeItem
} from 'react-sortable-tree'

const treeData: TreeItem[] = [
  {
    title: '`title`',
    subtitle: '`subtitle`',
    expanded: true,
    children: [
      {
        title: 'Child Node',
        subtitle: 'Defined in `children` array belonging to parent',
        expanded: false,
      },
    ],
  },
];

export default treeData;
