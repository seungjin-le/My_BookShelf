import PageHeader from 'antd/lib/page-header';
import React from 'react';
import Layout from './layout';
import { ForkOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styles from './add.module.css';

interface AddProps {
  loading: boolean;
  back: () => void;
  logout: () => void;
}

const Add: React.FC<AddProps> = ({ loading, back, logout }) => {
  const click = () => {};
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
          <Input placeholder={'Title'} className={styles.input} />
        </div>
        <div className={styles.input_comment}>
          Comment
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <TextArea rows={4} placeholder={'comment'} className={styles.input} />
        </div>
        <div className={styles.input_author}>
          Author
          <span className={styles.required}> *</span>
        </div>
        <div>
          <Input placeholder={'Author'} className={styles.input} />
        </div>
        <div className={styles.input_url}>
          URL
          <span className={styles.required}> *</span>
        </div>
        <div className={styles.input_area}>
          <Input placeholder={'URL'} className={styles.input} />
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
