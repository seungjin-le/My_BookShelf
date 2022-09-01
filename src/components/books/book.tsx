import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOutlined,
  DeleteOutlined,
  EditOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { BookType } from '../../types';
import moment from 'moment';
import { Button, Tooltip } from 'antd';
import styles from '../styles/books/book.module.css';
import { useHistory } from 'react-router';

interface BookProps extends BookType {
  deleteBook: (bookId: number) => void;
}

const Book: React.FC<BookProps> = ({
  bookId,
  title,
  author,
  createAt,
  url,
  deleteBook,
}) => {
  const history = useHistory();

  const clickDelete = () => {
    deleteBook(bookId);
  };
  const testclick = () => {
    history.push(`/edit/${bookId}`);
  };
  return (
    <div className={styles.book}>
      <div className={styles.title}>
        <Link to={`/book/${bookId}`} className={styles.link_detail_title}>
          <BookOutlined /> {title}
        </Link>
      </div>
      <div className={styles.author}>
        <Link to={`/book/${bookId}`} className={styles.link_detail_author}>
          {author}
        </Link>
      </div>
      <div className={styles.created}>
        {moment(createAt).format('YYYY년 MM월 DD일 hh:mm a')}
      </div>
      <div className={styles.tooltips}>
        <Tooltip title={url}>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={styles.link_url}>
            <Button
              size="small"
              type="primary"
              shape="circle"
              icon={<HomeOutlined />}
              className={styles.button_url}
            />
          </a>
        </Tooltip>
        <Tooltip title={'Edit'}>
          <Button
            size="small"
            shape="circle"
            icon={<EditOutlined />}
            className={styles.button_edit}
            onClick={testclick}
          />
        </Tooltip>
        <Tooltip title={'Delete'}>
          <Button
            size="small"
            type="primary"
            shape="circle"
            danger
            icon={<DeleteOutlined />}
            className={styles.button_delete}
            onClick={clickDelete}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Book;
