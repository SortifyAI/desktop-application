import React, { useState } from 'react';

import File from './File/File';

import { BsSortUp, BsSortUpAlt } from 'react-icons/bs';
import { MdDownload } from 'react-icons/md';
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';

import s from './main.module.scss';

export default function Main() {
    const [ascending, setAscending] = useState(true);
    const [sortIsOpened, setSortIsOpened] = useState(false);
    const [mode, setMode] = useState('Названию');
    const [categoryIsOpen, setCategoryIsOpen] = useState(false);

    return (
        <div className={s.main}>
            
            <div className={s.navBar}>
                <div className={s.top}>
                    <button className={s.download}>
                        <MdDownload />
                        <span>Загрузить</span>
                    </button>
                    <button className={s.download_w + ' ' + s.download}>
                        <MdDownload />
                        <span>Загрузить</span>
                    </button>
                    <button
                        className={s.category}
                        onClick={() => setCategoryIsOpen((prev) => !prev)}
                    >
                        <BiCategoryAlt />
                        Категории
                    </button>
                    <div
                        style={
                            categoryIsOpen
                                ? { display: 'block' }
                                : { display: 'none' }
                        }
                        className={s.category__menu}
                    >
                        <ul>
                            <li>бла-1</li>
                            <li>бла-2</li>
                            <li>бла-3</li>
                            <li>бла-4</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={s.files}>
                <div className={s.header}>
                    <h1>Файлы</h1>
                    <div className={s.sort}>
                        <button
                            className={s.sort__btn}
                            onClick={() => setSortIsOpened((prev) => !prev)}
                        >
                            {ascending ? <BsSortUpAlt /> : <BsSortUp />}
                            <span>По {mode}</span>
                            {sortIsOpened ? <RxCaretUp /> : <RxCaretDown />}
                        </button>
                        <div
                            onClick={() => setSortIsOpened(false)}
                            style={
                                sortIsOpened
                                    ? { display: 'block' }
                                    : { display: 'none' }
                            }
                            className={s.sort__options}
                        >
                            <div className={s.top}>
                                <ul>
                                    <li onClick={() => setMode('Названию')}>
                                        <div className={s.svg_place}>
                                            {mode == 'Названию' ? (
                                                <AiOutlineCheck />
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                        Названию
                                    </li>
                                    <li onClick={() => setMode('Размеру')}>
                                        <div className={s.svg_place}>
                                            {mode == 'Размеру' ? (
                                                <AiOutlineCheck />
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                        Размеру
                                    </li>
                                    <li onClick={() => setMode('Типу')}>
                                        <div className={s.svg_place}>
                                            {mode == 'Типу' ? (
                                                <AiOutlineCheck />
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                        Типу
                                    </li>
                                    <li
                                        onClick={() =>
                                            setMode('Дате изменения')
                                        }
                                    >
                                        <div className={s.svg_place}>
                                            {mode == 'Дате изменения' ? (
                                                <AiOutlineCheck />
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                        Дате изменения
                                    </li>
                                </ul>
                            </div>
                            <div className={s.br}></div>

                            <div className={s.bottom}>
                                <ul>
                                    <li onClick={() => setAscending(true)}>
                                        <div className={s.svg_place}>
                                            {' '}
                                            {ascending ? (
                                                <AiOutlineCheck />
                                            ) : (
                                                ''
                                            )}
                                        </div>
                                        Возрастанию
                                    </li>
                                    <li onClick={() => setAscending(false)}>
                                        <div className={s.svg_place}>
                                            {' '}
                                            {ascending ? (
                                                ''
                                            ) : (
                                                <AiOutlineCheck />
                                            )}
                                        </div>
                                        Убыванию
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.files__main}>
                    <File fileName={''} />
                </div>
            </div>
        </div>
    );
}
