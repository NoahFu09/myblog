import { useState } from 'react';
import Editor from '../../components/Editor';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [tag, setTag] = useState('');

    return (
        <div className="writebackend">
            <h2>編輯文章</h2>
            <hr />
            <div className="content">
                <div className="box1">
                    <span>文章標題：</span>
                    <input type="text" value={title} size="30" onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="box2">
                    <span>文章分類：</span>
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
                <div className="box3">
                    <span>文章標記：</span>
                    <input type="text" value={tag} size="30" onChange={e => setTag(e.target.value)} />
                </div>
                <div className="tagmark">
                    <div className="tag">#ASP.NET</div>
                    <div className="tag">#VB.NET</div>
                    <div className="tag">#報表</div>
                    <div className="tag">#SQL</div>
                    <div className="tag">#C#</div>
                </div>

                <div className="editorContainer">
                    <Editor value={value} onChange={setValue} />
                </div>
            </div>
        </div>
    );
};

export default Write;
