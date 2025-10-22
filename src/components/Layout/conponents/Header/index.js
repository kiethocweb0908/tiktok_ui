import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faXmarkCircle,
    faSpinner,
    faMagnifyingGlass,
    faRightToBracket,
    faEllipsisV,
    faLanguage,
    faKeyboard,
    faCircleQuestion,
    faArrowUpFromBracket,
    faGear,
    faCoins,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import HandlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Buttons from '~/components/Buttons';
import Menu from '~/components/Popper/Menu';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faCommentDots, faEnvelope, faFlag, faUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vi',
                    title: 'Vietnames',
                },
                {
                    type: 'Language',
                    code: 'fr',
                    title: 'French',
                },
                {
                    type: 'Language',
                    code: 'de',
                    title: 'German',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    // Handle logic
    const handleMenuChange = (MenuItem) => {
        console.log(MenuItem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'User profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },

        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                {/*  */}
                <HandlessTippy
                    // visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HandlessTippy>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy trigger="click" content="upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                </button>
                            </Tippy>
                            <Tippy content="Envelope" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </button>
                            </Tippy>
                            <Tippy content="message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCommentDots} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Buttons type="text">Upload</Buttons>
                            <Buttons type="primary" size="" rightIcon={<FontAwesomeIcon icon={faRightToBracket} />}>
                                Log in
                            </Buttons>

                            {/*  */}
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                alt="name"
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/034f5fbb93452091de3cbefe9285d808~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=1ca1d4a2&x-expires=1761102000&x-signature=zgH9PJY%2Bp4WHEBfoHZVCANOFhLM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
