import { useContext, useState, useRef } from 'react';
import Editor from '../../components/Editor';
import 'react-quill/dist/quill.snow.css';
import { TagsInput } from 'react-tag-input-component';
import { AuthContext } from '../../context/authContext';
import axios from 'axios';

const Write = () => {
    const { currentUser } = useContext(AuthContext);
    const textInput = useRef();

    // console.log(textInput.current?.state.editorHtml);

    const [file, setFile] = useState(null);
    const [cat, setCat] = useState('');
    const [title, setTitle] = useState('');
    const [stus, setState] = useState('');
    const [mark, setMark] = useState([]);

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            const res = await axios.post('/upload', formData);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    const handleClick = async e => {
        e.preventDefault();
        const imgUrl = await upload();

        try {
            await axios.post(`/posts/`, {
                userid: currentUser?.py_001_usid,
                title,
                desc: textInput.current?.state.editorHtml,
                mark,
                stus,
                cat,
                img: file ? imgUrl : '',
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div
            className="writebackend"
            onClick={() => {
                let e = document.querySelector('#menu-1');
                if (!e.classList.contains('st-move')) {
                    document.getElementById('menu-1').classList.toggle('st-move');
                }
            }}
        >
            <h2>編輯文章</h2>
            <hr />
            <div className="title">
                <input type="text" id="title" placeholder="請輸入標題" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="categories">
                <p>文章分類：</p>
                <div className="cat">
                    <input type="radio" name="cat" id="design" value="desgin" onChange={e => setCat(e.target.value)} />
                    <label htmlFor="cat">程式設計</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" id="food" value="food" onChange={e => setCat(e.target.value)} />
                    <label htmlFor="cat">美食分享</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" id="technology" value="technology" onChange={e => setCat(e.target.value)} />
                    <label htmlFor="cat">科技探索</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" id="music" value="music" onChange={e => setCat(e.target.value)} />
                    <label htmlFor="music">音樂分享</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" id="cinema" value="cinema" onChange={e => setCat(e.target.value)} />
                    <label htmlFor="cinema">觀影心得</label>
                </div>
            </div>
            <div className="states">
                <p>文章狀態：</p>
                <div className="stus">
                    <input type="radio" name="stus" value="Y" onChange={e => setState(e.target.value)} />
                    <label htmlFor="show">公開</label>
                </div>
                <div className="stus">
                    <input type="radio" name="stus" value="N" onChange={e => setState(e.target.value)} />
                    <label htmlFor="hide">不公開</label>
                </div>
            </div>

            <div className="upload">
                <input type="file" name="" id="file" onChange={e => setFile(e.target.files[0])} />
            </div>

            {/* <pre value={JSON.stringify(mark)}></pre> */}
            <TagsInput value={mark} onChange={setMark} name="mark" placeHolder="請輸入標籤" />
            <div className="editorContainer">
                <Editor ref={textInput} />
            </div>
            <input type="button" id="btn_OKY" value="存檔" onClick={handleClick} />
        </div>
    );
};

export default Write;
