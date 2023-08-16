import { useState } from 'react';
import Editor from '../../components/Editor';
import 'react-quill/dist/quill.snow.css';
import { TagsInput } from 'react-tag-input-component';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Write = () => {
    const state = useLocation().state;
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [selected, setSelected] = useState([]);

    const handleClick = async e => {
        e.preventDefault();

        try {
            state
                ? axios.put(`/post/${state.id}`, {
                      title,
                  })
                : axios.post(`/post/`, {});
        } catch (err) {}
    };

    return (
        <div className="writebackend">
            <h2>編輯文章</h2>
            <hr />
            <div className="title">
                <p>文章標題：</p>
                <input type="text" value={title} size="30" onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="categories">
                <p>文章分類：</p>
                <div className="cat">
                    <input type="radio" name="cat" id="design" value="design" />
                    <label htmlFor="cat">程式設計</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" id="food" value="food" />
                    <label htmlFor="cat">美食分享</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" id="technology" value="technology" />
                    <label htmlFor="cat">科技探索</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" id="music" value="music" />
                    <label htmlFor="music">音樂分享</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" id="cinema" value="cinema" />
                    <label htmlFor="cinema">觀影心得</label>
                </div>
            </div>

            {/* <pre>{JSON.stringify(selected)}</pre> */}
            <TagsInput value={selected} onChange={setSelected} name="fruits" placeHolder="請輸入標籤" />

            <div className="editorContainer">
                <Editor value={value} onChange={setValue} />
            </div>

            <input type="button" id="btn_OKY" value="存檔" onClick={handleClick} />
        </div>
    );
};

export default Write;
