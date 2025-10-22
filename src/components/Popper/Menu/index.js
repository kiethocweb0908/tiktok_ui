import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '../';
import AccountItem from '~/components/AccountItem';
import MenuItem from './MenuItem';
import HandlessTippy from '@tippyjs/react/headless';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <HandlessTippy
            // visible
            interactive
            placement="top-end"
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </HandlessTippy>
    );
}

export default Menu;

// history = [
//     {
//         data: [
//             {
//                 icon: <FontAwesomeIcon icon={faLanguage} />,
//                 title: 'English',
//                 children: {
//                     title: 'Language',
//                     data: [
//                         {
//                             code: 'en',
//                             title: 'English',
//                         },
//                         {
//                             code: 'vi',
//                             title: 'Vietnames',
//                         },
//                         {
//                             code: 'fr',
//                             title: 'French',
//                         },
//                         {
//                             code: 'de',
//                             title: 'German',
//                         },
//                     ],
//                 },
//             },
//             {
//                 icon: <FontAwesomeIcon icon={faCircleQuestion} />,
//                 title: 'Feedback and help',
//                 to: '/feedback',
//             },
//             {
//                 icon: <FontAwesomeIcon icon={faKeyboard} />,
//                 title: 'Keyboard shortcuts',
//             },
//         ],
//     },
// ];
