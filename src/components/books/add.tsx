import PageHeader from 'antd/lib/page-header';
import React, { useRef } from 'react';
import Layout from '../layout/layout';
import { ForkOutlined } from '@ant-design/icons';
import { Button, Input, InputRef } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styles from '../styles/books/add.module.css';
import TextAreaType from 'rc-textarea';
import { BookReqType } from '../../types';
import { message as messageDialog } from 'antd';
import { useHistory } from 'react-router';

interface AddProps {
  loading: boolean;
  back: () => void;
  logout: () => void;
  add: (book: BookReqType) => void;
}

const Add: React.FC<AddProps> = ({ loading, back, logout, add }) => {
  const titleRef = useRef<InputRef>(null);
  const messageRef = useRef<TextAreaType>(null);
  const authorRef = useRef<InputRef>(null);
  const urlRef = useRef<InputRef>(null);
  const history = useHistory();

  const click = () => {
    const title = titleRef.current!.input!.value;
    const message = messageRef.current!.resizableTextArea.textArea
      .value as string;
    const author = authorRef.current!.input!.value;
    const url = urlRef.current!.input!.value;

    if (!title || !message || !author || !url)
      return messageDialog.error('책 정보를 입력해 주세요');

    messageDialog.success('책 등록 완료');
    add({
      title: title,
      message: message,
      author: author,
      url: url,
    });
    history.push('/');
  };
  return (
    <Layout>
      <PageHeader
        onBack={back}
        title={
          <div>
            <ForkOutlined /> Add Book
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
            className={styles.input}
            ref={titleRef}
          />
        </div>
        <div className={styles.input_comment}>
          Comment
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <TextArea
            rows={4}
            placeholder={'comment'}
            className={styles.input}
            ref={messageRef}
          />
        </div>
        <div className={styles.input_author}>
          Author
          <span className={styles.required}> *</span>
        </div>
        <div>
          <Input
            placeholder={'Author'}
            className={styles.input}
            ref={authorRef}
          />
        </div>
        <div className={styles.input_url}>
          URL
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input placeholder={'URL'} className={styles.input} ref={urlRef} />
        </div>
        <div className={styles.button_area}>
          <Button
            className={styles.button}
            size={'large'}
            loading={loading}
            onClick={click}>
            {' '}
            Add
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Add;
