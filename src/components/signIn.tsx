import React, { useState } from 'react';
import { Button, Col, Input, Row } from 'antd';
import styles from './signIn.module.scss';

export type loginData = {
  email: string;
  password: string;
};

interface SigInProps {
  login: (reqData: loginData) => void;
}

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
  const click = () => {
    setUser({
      email: '',
      password: '',
    });
  };
  return (
    <Row align={'middle'} className={styles.signin_row}>
      <Col span={24}>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <div>My Books</div>
            <div>Please Note Your Opinion</div>
            <div />
            <div>
              Email <span> *</span>
            </div>
            <div>
              <input
                placeholder={'Email'}
                type="Email"
                autoComplete="email"
                name="email"
                value={user.email}
                onChange={userOnChange}
              />
            </div>
            <div className={styles.signin_title}>
              Password <span> *</span>
            </div>
            <div>
              <input
                placeholder={'Password'}
                type="password"
                autoComplete={'current-password'}
                name={'password'}
                value={user.password}
                onChange={userOnChange}
              />
            </div>
            <div>
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
