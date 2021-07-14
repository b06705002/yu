import { Card } from "antd";

const Cards = () => {
    const { Meta } = Card; 

    return(
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="./8877.jpeg" />}
        >
            <Meta title="胖寶寶" description="22 歲生日快熱" />
        </Card>
    )
};

export default Cards;