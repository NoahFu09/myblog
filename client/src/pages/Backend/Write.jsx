import { useState } from 'react';
import Editor from '../../components/Editor';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');

    return (
        <div className="writebackend">
            <input type="text" value={title} onChange={setTitle} placeholder="請輸入文章標題" />
            <Editor value={value} onChange={setValue} />
        </div>
    );
};

export default Write;
