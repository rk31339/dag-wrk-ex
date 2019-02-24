import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 'first',
    label: 'Root'
  }, {
    id: 'second',
    label: 'B'
  }, {
    id: 'c1',
    label: 'C1'
  }, {
    id: 'c2',
    label: 'C2'
  }, {
    id: 'c3',
    label: 'C3'
  }
];

export const clusters: ClusterNode[] = [
  {
    id: 'third',
    label: 'C',
    childNodeIds: ['c1', 'c2', 'c3']
  }
]

export const links: Edge[] = [
  {
    id: 'a',
    source: 'first',
    target: 'second',
    label: 'is parent of'
  }, {
    id: 'b',
    source: 'first',
    target: 'c1',
    label: 'custom label'
  }, {
    id: 'c',
    source: 'first',
    target: 'c1',
    label: 'custom label'
  }, {
    id: 'd',
    source: 'first',
    target: 'c2',
    label: 'custom label'
  }, {
    id: 'e',
    source: 'first',
    target: 'c3',
    label: 'custom label'
  }  , {
    id: 'f',
    source: 'c1',
    target: 'c2',
    label: 'custom label'
  } , {
    id: 'g',
    source: 'c2',
    target: 'c1',
    label: 'custom label'
  }
];