import { useEffect, useState } from 'react';
import s from '../main.module.scss';
import { BsFileRichtext } from 'react-icons/bs';

function File({ fileName }) {
    const [selected, setSelected] = useState(false);
    useEffect(() => {
        console.log(selected);
    }, [selected]);
    return (
        <div
            className={selected ? s.file + ' ' + s.file_selected : s.file}
            onClick={() => setSelected((prev) => !prev)}
        >
            <BsFileRichtext />
            <span>{fileName ? fileName : 'Без названия'}</span>
        </div>
    );
}
export default File;
