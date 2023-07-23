import React from 'react';

const Post = () => {
    return (
        <div className="post">
            <table>
                <thead>
                    <tr>
                        <th>項次</th>
                        <th>標題</th>
                        <th>封面</th>
                        <th>發佈日期</th>
                        <th>狀態</th>
                        <th>類別</th>
                        <th>動作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>test1</td>
                        <td>
                            <img src="https://unsplash.it/200/100" alt="" />
                        </td>
                        <td>2023-07-15 12:19:39</td>
                        <td>公開</td>
                        <td>電影欣賞</td>
                        <td>
                            <a href="/">修改</a>
                            <a href="/">刪除</a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>test2</td>
                        <td>
                            <img src="https://unsplash.it/400/300" alt="" />
                        </td>
                        <td>2023-07-15 12:19:39</td>
                        <td>編輯中</td>
                        <td>程式開發</td>
                        <td>
                            <a href="/">修改</a>
                            <a href="/">刪除</a>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>test3</td>
                        <td>
                            <img src="https://unsplash.it/800/600" alt="" />
                        </td>
                        <td>2023-07-15 12:19:39</td>
                        <td>不公開</td>
                        <td>美食分享</td>
                        <td>
                            <a href="/">修改</a>
                            <a href="/">刪除</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Post;
