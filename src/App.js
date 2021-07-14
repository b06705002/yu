import './App.css';
import { Form, Input, Button, Modal, message, Divider, Image } from 'antd';
import React, { useState } from 'react';
import Clock from './Clock'
import Content from './Content'

const App = () => {

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [page, setPage] = useState("Out");

  const error = () => {
    message.error('回答錯了 你這個笨蛋:(');
  };

  const onFinish = (values) => {
    if (values.password === '11321') {
        setPage("In")
    } else {
      error()
    }
  }

  return (
    <>
      { page === "Out"
      ?
      <div className="App">
        <div className="App-title">
          胖寶寶生日紀念
          <Clock />
          好老嗚嗚嗚
        </div>
        <div className="App-main">
          <div className="App-button">
            <Button type="text" className="question" size="small" onClick={() => {setVisible1(true);}}>
              第一碼
            </Button>
            <Button type="text" className="question" size="small" onClick={() => {setVisible2(true);}}>
              第二碼
            </Button>
            <Button type="text" className="question" size="small" onClick={() => {setVisible3(true);}}>
              第三碼
            </Button>
            <Button type="text" className="question" size="small" onClick={() => {setVisible4(true);}}>
              第四碼
            </Button>
            <Button type="text" className="question" size="small" onClick={() => {setVisible5(true);}}>
              第五碼
            </Button>
          </div>
          <Divider orientation="right">
            <div className="divText">輸入密碼</div>
          </Divider>
          <Form name="basic" initialValues={{remember: true,}} onFinish={onFinish}>
            <Form.Item label={<label style={{ color: "snow" }}>密碼(共五碼)</label>} name="password" rules={[{required: true, message: '請輸入密碼!',},]}>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" className='sub' htmlType="submit">確認</Button>
            </Form.Item>
          </Form>
          <Modal title="在點點心，我們沒有吃過什麼動物" okText="確認" cancelText="取消" visible={visible1} onOk={() => {setVisible1(false);}} onCancel={() => {setVisible1(false);}}>
            <Image width={200} src="./S__22773771.jpg" />
            <p><strong>1</strong> 熊熊</p>
            <p><strong>2</strong> 烏龜</p>
            <p><strong>3</strong> 兔子</p>
          </Modal>
          <Modal title="我們什麼時候去六福村玩的" okText="確認" cancelText="取消" visible={visible2} onOk={() => {setVisible2(false);}} onCancel={() => {setVisible2(false);}}>
            <Image width={200} src="./S__22773775.jpg" />
            <p><strong>1</strong> 雙十連假</p>
            <p><strong>2</strong> 萬聖節</p>
            <p><strong>3</strong> 兒童連假</p>
          </Modal>
          <Modal title="哪一部電影不是在這裡看的" okText="確認" cancelText="取消" visible={visible3} onOk={() => {setVisible3(false);}} onCancel={() => {setVisible3(false);}}>
            <Image width={200} src="./S__22773776.jpg" />
            <p><strong>1</strong> 天能</p>
            <p><strong>2</strong> 約定的夢幻島</p>
            <p><strong>3</strong> 6號鬼病床</p>
          </Modal>
          <Modal title="炒冰是在哪個夜市買的" okText="確認" cancelText="取消" visible={visible4} onOk={() => {setVisible4(false);}} onCancel={() => {setVisible4(false);}}>
            <Image width={200} src="./S__22773778.jpg" />
            <p><strong>1</strong> 中壢夜市</p>
            <p><strong>2</strong> 花園夜市</p>
            <p><strong>3</strong> 中原夜市</p>
          </Modal>
          <Modal title="下列選項何者最可愛" okText="確認" cancelText="取消" visible={visible5} onOk={() => {setVisible5(false);}} onCancel={() => {setVisible5(false);}}>
            <Image width={200} src="./S__22781954.jpg" />
            <p><strong>1</strong> 長頸鹿</p>
            <p><strong>2</strong> 胖寶寶</p>
            <p><strong>3</strong> 黃啟宏</p>
          </Modal>
        </div>
      </div>
      :
      <Content />
      }
    </>
  );
}

export default App;