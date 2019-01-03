import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import TextTag from '../TextTag/TextTag';

class Details extends Component {
    render() {
        let { data } = this.props;
        // 头部jsx法书写
        const header = (
            <div>
                <h1>{data.title}</h1>
                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <TextTag data={data}/>
                    <Avatar src={data.author.avatar_url} />
                    <Link to={"/user/" + data.author.loginname}>{data.author.loginname}</Link>
                    发表于{data.create_at.split("T")[0]}
                </div>
            </div>
        )
        return (
            <div className="detail_wrap">
                <Card
                    title = {header}
                >
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.content
                        }}
                    ></div>
                </Card>
            </div>
        );
    }
}

export default Details;
