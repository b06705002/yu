import './App.css';
import Cards from './Card';
import { Button, Tooltip, Card, Avatar, Divider, Modal } from "antd";
import Icon from '@ant-design/icons';
import { useState } from 'react';
import { GiftOutlined } from '@ant-design/icons';

const HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
);

const { Meta } = Card;

const Content = () => {

    const [card, setCard] = useState(true);
    const [giftCard, setGiftCard] = useState(false);

    const change = () => {
        setCard(!card)
    }

    const HeartIcon = props => <Icon component={HeartSvg} {...props} />;

    return (
        <div className="main">
            <div className="App-card">
                <Cards />
            </div>
            <div className="App-letter">
                <div className="App-com">
                    <Tooltip title="open">
                        <Button type="ghost" size="large" shape="circle" className="show" icon={<HeartIcon style={{ color: 'hotpink' }} />} onClick={change}/>
                    </Tooltip>
                </div>
                <div className="App-com">
                    <Card style={{ width: 500, marginTop: 16 }} loading={card}>
                        <Meta
                            avatar={<Avatar src="./gir.png" />}
                            title="給胖寶寶的生日祝福"
                            description="又是一年的生日，恭喜妳又老了一歲。22歲並不算是個特別的年。妳曾和我說過妳對學業、工作沒有自信。我覺得，只有對自己設有高標準、有上進心的人，才會擔心這些事情。因此，我希望妳可以打起精神繼續努力，我會為你加油，也會多拜拜請神保佑妳。祝福今年的妳身體健康、平安喜樂。"
                        />
                        <Divider></Divider>
                        <Button className="show" onClick={() => setGiftCard(true)}>
                            <GiftOutlined />
                        </Button>
                    </Card>
                </div>
            </div>
            <Modal title="生日挑禮物卷" visible={giftCard} onOk={() => setGiftCard(false)} onCancel={() => setGiftCard(false)}
                okText="確認" cancelText="取消">
                <p>恭喜你找到禮物卷啦</p>
                <p>截圖即可像黃啟宏帥哥本人兌換獎項</p>
                <p>陪你逛街+挑禮物喔</p>
                <p>但是要實體喔，不接受網路逛街謝謝</p>
                <p>使用期限: 2021/12/31</p>
            </Modal>
        </div>
    );
}
  
export default Content;