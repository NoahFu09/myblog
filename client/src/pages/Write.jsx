import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('');

    console.log(value);
    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder="標題" />
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>發佈</h1>
                    <span>
                        <b>狀態:</b> 編輯中
                    </span>
                    <span>
                        <b>可見度:</b> 公開
                    </span>
                    <input style={{ display: 'none' }} type="file" name="" id="file" />
                    <label className="file" htmlFor="file">
                        上傳照片
                    </label>
                    <div className="buttons">
                        <button>暫存</button>
                        <button>上傳</button>
                    </div>
                </div>
                <div className="item">
                    <h1>分類</h1>
                    <input type="radio" name="cat" value="cinema" id="cinema" />
                    <label htmlFor="cinema">觀影心得</label>
                    <input type="radio" name="cat" value="design" id="design" />
                    <label htmlFor="design">程式開發</label>
                    <input type="radio" name="cat" value="music" id="music" />
                    <label htmlFor="music">音樂分享</label>
                    <input type="radio" name="cat" value="food" id="food" />
                    <label htmlFor="food">美食分享</label>
                    <input type="radio" name="cat" value="technology" id="technology" />
                    <label htmlFor="technology">科技探索</label>
                </div>
            </div>
        </div>
    );
};

export default Write;
