import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const Write = () => {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState('');

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const res = await axios.post('/upload', formData);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleClick = e => {
        e.preventDefault();
        upload();
    };

    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder="標題" onChange={e => setTitle(e.target.value)} />
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
                    <input style={{ display: 'none' }} type="file" name="" id="file" onChange={e => setFile(e.target.files[0])} />
                    <label className="file" htmlFor="file">
                        上傳照片
                    </label>
                    <div className="buttons">
                        <button>暫存</button>
                        <button onClick={handleClick}>更新</button>
                    </div>
                </div>
                <div className="item">
                    <h1>分類</h1>
                    <div className="cat">
                        <input type="radio" name="cat" value="cinema" id="cinema" onClick={e => setCat(e.target.value)} />
                        <label htmlFor="cinema">觀影心得</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="design" id="design" onClick={e => setCat(e.target.value)} />
                        <label htmlFor="design">程式開發</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="music" id="music" onClick={e => setCat(e.target.value)} />
                        <label htmlFor="music">音樂分享</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="food" id="food" onClick={e => setCat(e.target.value)} />
                        <label htmlFor="food">美食分享</label>
                    </div>
                    <div className="cat">
                        <input type="radio" name="cat" value="technology" id="technology" onClick={e => setCat(e.target.value)} />
                        <label htmlFor="technology">科技探索</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Write;
