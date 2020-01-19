import React, { FunctionComponent, useState } from 'react'
import SortableTree, {
  changeNodeAtPath,
  removeNodeAtPath,
  addNodeUnderParent,
} from 'react-sortable-tree'
import {
  Button,
  TextField,
} from '@material-ui/core'
import 'react-sortable-tree/style.css'
import TreeData from './treeData'

interface MenuItem {
  title: string
  subtitle: string
  children: MenuItem[]
  expanded: boolean
}

function createMenuItem(): MenuItem {
  return {
    title: '',
    subtitle: '',
    children: [],
    expanded: true,
  }
}

const TreeInput: FunctionComponent = () => {
  const [treeData, setTreeData] = useState(TreeData)
  
  const handleChange = (treeData: any) => {
    setTreeData(treeData)
  }

  const getNodeKey = ({ treeIndex }: any) => treeIndex
  
  return (
    <div style={{ height: 600 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setTreeData([...treeData, createMenuItem()])}
      >
        추가
      </Button>
      <SortableTree
        treeData={treeData}
        onChange={handleChange}
        generateNodeProps={( {node, path}) => ({
          title: (
            <TextField
              style={{ display: 'block' }}
              margin="dense"
              value={node.title}
              onChange={event => {
                const title = event.target.value
                setTreeData(
                  changeNodeAtPath({
                    treeData,
                    path,
                    getNodeKey,
                    newNode: { ...node, title },
                  }),
                )
              }}
            />
          ),
          buttons: [
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                setTreeData(
                  addNodeUnderParent({
                    treeData,
                    parentKey: path[path.length - 1],
                    getNodeKey,
                    newNode: createMenuItem(),
                  }).treeData,
                )
              }
            >
              추가
            </Button>,
            <Button
              onClick={() =>
                setTreeData(
                  removeNodeAtPath({
                    treeData,
                    path,
                    getNodeKey,
                  }),
                )
              }
            >
              삭제
            </Button>,
          ],
        })} 
      />
    </div>
  );
}

export default TreeInput;
