import React, { useRef } from 'react';
import { Button, Col, Input, Row } from 'antd';
import styles from './signIn.module.scss';

const SignIn = () => {
  // @ts-ignore
  const emailRef = useRef<Input>(null);
  // @ts-ignore
  const passwordRef = useRef<Input>(null);
  function click() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  }
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
                ref={emailRef}
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
                ref={passwordRef}
              />
            </div>
            <div>
              <Button className={styles.button} size={'large'} onClick={click}>
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
