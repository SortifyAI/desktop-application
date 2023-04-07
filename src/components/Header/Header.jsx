import React, { useState } from 'react';

import s from './header.module.scss';

import { IoMdSearch, IoMdSettings } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
export default function Header() {
    const [settingsIsOpen, setSettingsIsOpen] = useState(false);
    return (
        <div className={s.header}>
            <div
                style={
                    settingsIsOpen ? { display: 'flex' } : { display: 'none' }
                }
                className={s.settings__screen}
            >
                <div className={s.settings__screen__screen}>
                    <button
                        className={s.settings__screen__btnClose}
                        onClick={() => setSettingsIsOpen(false)}
                    >
                        <RxCross2 />
                    </button>
                </div>
            </div>
            <div className={s.body}>
                <div className={s.logo}>
                    <svg width='36' height='36'>
                        <circle cx='18' cy='18' r='18' fill='#FC3F1D'></circle>
                        <path
                            d='M20.67 10.103h-1.822c-3.123 0-4.684 1.561-4.684 3.903 0 2.603 1.04 3.904 3.383 5.465l1.822 1.302-5.205 8.067H10l4.945-7.287c-2.863-2.082-4.425-3.903-4.425-7.287 0-4.163 2.863-7.026 8.328-7.026h5.465v21.6H20.67V10.103z'
                            fill='#fff'
                        ></path>
                    </svg>
                    <svg width='76' height='36'>
                        <path
                            transform='translate(-36)'
                            d='M86.802 21.278c0-4.082-4.082-6.15-10.34-6.15-3.674 0-6.697 1.065-8.139 2.743.273-4.96 2.816-7.669 8.792-7.669 3.129 0 5.85.464 8.516 1.905V9.85C83.426 8.79 80.84 8 77.087 8c-7.972 0-11.348 4.79-11.348 11.184 0 5.85 2.666 8.816 10.532 8.816 5.933 0 10.531-2.477 10.531-6.722zm-10.585 4.518c-4.934 0-7.427-1.66-7.427-4.273 0-2.694 2.868-4.19 7.591-4.19 4.354 0 7.564 1.468 7.564 4.162 0 2.831-3.074 4.3-7.727 4.3zm-28.516-8.68v-.003h.004l11.3-6.392H44.79V8.544H63.18v2.041l-9.821 5.508c.572-.093 1.18-.149 1.797-.149 4.734 0 8.815 1.852 8.815 5.742 0 3.946-4.381 6.314-10.748 6.31-4.517 0-7.536-1.006-9.224-1.85V23.89c2.013.98 4.815 1.904 9.196 1.904 5.279 0 7.92-1.522 7.92-4.162 0-2.498-2.722-3.646-7.32-3.646-3.32 0-5.198.897-5.198.897l-.895-1.765-.002-.001zm43.754.844c0 5.784 3.674 7.835 8.544 7.835 4.87 0 8.544-2.051 8.544-7.755 0-5.805-3.674-7.835-8.544-7.835-4.87 0-8.544 2.03-8.544 7.755zm-2.885.027C88.57 10.853 93.66 8 100 8s11.428 2.853 11.428 10.013c0 7.134-5.089 9.987-11.428 9.987-6.34 0-11.429-2.853-11.429-10.013z'
                            fill='currentColor'
                        ></path>
                    </svg>
                </div>

                <div className={s.search}>
                    <input type='text' placeholder='Поиск в Sortify' />
                    <button>
                        <IoMdSearch />
                    </button>
                </div>

                <div className={s.user}>
                    <button
                        className={s.settings}
                        onClick={() => setSettingsIsOpen(true)}
                    >
                        <IoMdSettings />
                    </button>
                    <div className={s.userImg}>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
