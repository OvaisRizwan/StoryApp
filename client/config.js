import moment from 'moment';
import React from 'react';

const clientConfig = {
    storyColumns: [{
        Header: 'Title',
        accessor: 'title',
      }, {
        Header: 'Description',
        accessor: 'description',
      }, {
        Header: 'Video',
        accessor: 'video',
      }, {
        Header: 'Status',
        accessor: 'status',
      }, {
        id: 'created',
        Header: 'Created',
        accessor: o => {
          return moment(o.dateAdded).format('lll');
        },
      }],
    }