import PageHeader from 'antd/lib/page-header';
import React, { useEffect, useRef, useState } from 'react';
import Layout from '../layout/layout';
import { ForkOutlined } from '@ant-design/icons';
import { Button, Input, InputRef } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styles from '../styles/books/add.module.css';
import TextAreaType from 'rc-textarea';
import { BookReqType, BookType } from '../../types';
import { message as messageDialog } from 'antd';

interface EditProps {
  loading: boolean;
  back: () => void;
  logout: () => void;
  edit: (book: BookReqType) => void;
  book: BookType | undefined;
  getBooks: () => void;
}
interface EditBookData extends BookReqType {
  bookId: number;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
const Edit: React.FC<EditProps> = ({
  loading,
  back,
  logout,
  edit,
  book,
  getBooks,
}) => {
  const [bookData, setBookData] = useState<EditBookData>({
    bookId: 0,
    title: '',
    ownerId: '',
    createdAt: '',
    updatedAt: '',
    deletedAt: '',
    message: '',
    author: '',
    url: '',
  });
  const titleRef = useRef<InputRef>(null);
  const messageRef = useRef<TextAreaType>(null);
  const authorRef = useRef<InputRef>(null);
  const urlRef = useRef<InputRef>(null);

  useEffect(() => {
    getBooks();
    setBookData({
      ...bookData,
      bookId: book?.bookId || 0,
      title: book?.title || '',
      message: book?.message || '',
      author: book?.author || '',
      url: book?.url || '',
    });
  }, [getBooks]);

  console.log(book);
  const onChange = ({ target }: any) => {
    const { id, value } = target;
    console.log(id, value);
    setBookData({
      ...bookData,
      [id]: value,
    });
  };
  const click = () => {
    const { title, message, author, url } = bookData;

    if (!title || !message || !author || !url)
      return messageDialog.error('책 정보를 입력해 주세요');

    messageDialog.success('책 수정 완료');
    //edit({ title: title, message: message, author: author, url: url });
  };
  return (
    <Layout>
      <PageHeader
        onBack={back}
        title={
          <div>
            <ForkOutlined /> Edit Book
          </div>
        }
        subTitle={'Add Your Book'}
        extra={[
          <Button
            key={'1'}
            type={'primary'}
            onClick={logout}
            className={styles.button_logout}>
            logout
          </Button>,
        ]}
      />
      <div className={styles.add}>
        <div className={styles.input_title}>
          Title
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input
            placeholder={'Title'}
            id={'title'}
            className={styles.input}
            value={bookData?.title}
            onChange={onChange}
          />
        </div>
        <div className={styles.input_comment}>
          Comment
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <TextArea
            rows={4}
            id={'message'}
            placeholder={'comment'}
            className={styles.input}
            value={bookData?.message}
            onChange={onChange}
          />
        </div>
        <div className={styles.input_author}>
          Author
          <span className={styles.required}> *</span>
        </div>
        <div>
          <Input
            placeholder={'Author'}
            id={'author'}
            className={styles.input}
            value={bookData?.author}
            onChange={onChange}
          />
        </div>
        <div className={styles.input_url}>
          URL
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input
            placeholder={'URL'}
            id={'url'}
            className={styles.input}
            value={bookData?.url}
            onChange={onChange}
          />
        </div>
        <div className={styles.button_area}>
          <Button
            className={styles.button}
            size={'large'}
            loading={loading}
            onClick={click}>
            {' '}
            Edit
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
