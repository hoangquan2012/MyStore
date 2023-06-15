import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Search from 'antd/es/input/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark, faCircleQuestion, faCoins, faEllipsis, faEllipsisVertical, faGear, faKeyboard, faLanguage, faMessage, faMoon, faRightFromBracket, faUpload, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import HeadlessTippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import { Wrapper as PopupWrapper } from '~/components/Popup';
import AccoutItem from '~/components/AccoutItem';
import Button from '~/components/Buttons';
import Menu from '~/components/Popup/Menu';
const cx = classNames.bind(styles);

const Menu_Items = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'KeyBoard shortcuts'
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark Mode'
    }
];

const User_Items = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Profile'
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorite'
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins'
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting'
    },
    ...Menu_Items,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Log Out'
    }
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const [value, setValue] = useState('');
    const onSearch = (value) => {
        setSearchResult(value);
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const handleChange = (menuItem) => {
        console.log(menuItem);
    };

    const currentUser = true;

    return (
        <div className={`${cx('wrapper')}`}>
            <div className={`${cx('header-container')}  wrapper`}>
                <Link to="/" className={cx('header-left')}>
                    <img src={images.logo} />
                    My Story
                </Link>
                <Tippy
                    render={(attrs) => (
                        <div className={`${cx('search-result')}`} tabIndex="-1" {...attrs}>
                            <PopupWrapper>
                                <h4 className={`${cx('search-title')}`}>Accounts</h4>
                                <AccoutItem />
                                <AccoutItem />
                                <AccoutItem />
                            </PopupWrapper>
                        </div>
                    )}
                    visible={value.length > 0}
                    interactive={true}
                >
                    <div className={cx('header-center')}>
                        <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            onChange={onChange}
                            value={value}
                            style={{
                                width: 516
                            }}
                            spellCheck={false}
                            allowClear
                        />
                    </div>
                </Tippy>

                <div className={cx('header-right')}>
                    <Button text iconleft={<FontAwesomeIcon icon={faUpload} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <HeadlessTippy content="Messenger">
                            <button className={cx('icon-mess')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </HeadlessTippy>
                    ) : (
                        <Button primary>Login</Button>
                    )}

                    <Menu items={currentUser ? User_Items : Menu_Items} onChange={handleChange}>
                        {currentUser ? (
                            <img src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/6282287a97d2f3c55744e0c68a7f36c9~c5_300x300.webp?x-expires=1685692800&x-signature=rhFl%2FOMKXVhhLK61vhGhbWXqPo0%3D" className={cx('user-avatar')} alt="no" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
