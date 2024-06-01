import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TextEditor = () => {
  const [value, setValue] = useState('');

  return (
    <div className="max-w-4xl mx-auto">
      <ReactQuill value={value} onChange={setValue} />
    </div>
  );
};

export default TextEditor;
