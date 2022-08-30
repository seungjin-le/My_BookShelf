import Layout from './layout';
import { Button, PageHeader, Table } from 'antd';
import { useDispatch } from 'react-redux';
import React from 'react';
import { BookType } from '../types';

interface ListProps {
  books: BookType[] | null;
  loading: boolean;
}

const BookList: React.FC<ListProps> = ({ books, loading }) => {
  const dispatch = useDispatch;
  const goAdd = () => {};
  const logout = () => {
    //dispatch()
  };
  return (
    <Layout>
      <PageHeader
        title={<div>Book List</div>}
        extra={[
          <Button key={2} type={'primary'} onClick={goAdd}>
            Add Book
          </Button>,
          <Button key={1} type={'primary'} onClick={logout}>
            Logout
          </Button>,
        ]}
      />
      <Table
        dataSource={[]}
        columns={[
          {
            title: 'test',
            dataIndex: 'book',
            key: 'book',
            render: () => <div>Book</div>,
          },
        ]}
        loading={books || loading}
        showHeader={false}
        rowKey={'bookId'}
        pagination={false}
      />
    </Layout>
  );
};

export default BookList;
