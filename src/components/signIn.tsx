import React, { useState } from 'react';
import { Button, Col, Row } from 'antd';
import styles from './signIn.module.css';
import { loginData, SigInProps } from '../types';

const SignIn: React.FC<SigInProps> = ({ login }) => {
  const [user, setUser] = useState<loginData>({
    email: '',
    password: '',
  });
  const userOnChange = ({ target }: any) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };
  return (
    <Row align={'middle'} className={styles.signin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          <Col span={12}></Col>
          <Col span={12}>
            <div className={styles.signin_title}>My Books</div>
            <div className={styles.signin_subtitle}>
              Please Note Your Opinion
            </div>
            <div className={styles.signin_underline} />
            <div className={styles.email_title}>
              Email <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <input
                placeholder={'Email'}
                type="Email"
                autoComplete="email"
                name="email"
                value={user.email}
                onChange={userOnChange}
                className={styles.input}
              />
            </div>
            <div className={styles.password_title}>
              Password <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <input
                placeholder={'Password'}
                type="password"
                autoComplete={'current-password'}
                name={'password'}
                value={user.password}
                onChange={userOnChange}
                className={styles.input}
              />
            </div>
            <div className={styles.button_area}>
              <Button
                className={styles.button}
                size={'large'}
                onClick={() => {
                  login(user);
                }}>
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SignIn;
