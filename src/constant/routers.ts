export const RoutersInfo = {
  empty: {
    path: '/',
    name: 'empty'
  },

  timelines: {
    path: '/timelines',
    name: 'timelines'
  },

  defaulttimelines: {
    path: ':timeLineType',
    name: 'defaulttimelines'
  },

  tagtimelines: {
    path: 'tag/:tagName',
    name: 'tagtimelines'
  },

  listtimelines: {
    path: 'list/:listName',
    name: 'listtimelines'
  },

  statuses: {
    path: '/statuses/:statusId',
    name: 'statuses'
  },

  home: {
    path: '/home',
    name: 'home'
  },

  oauth: {
    path: '/oauth',
    name: 'oauth'
  },

  settings: {
    path: '/settings',
    name: 'settings'
  },

  accounts: {
    path: '/accounts/:accountId',
    name: 'accounts'
  }
};
