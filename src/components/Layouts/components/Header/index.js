import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark, faCircleQuestion, faCoins, faEllipsis, faEllipsisVertical, faGear, faKeyboard, faLanguage, faMessage, faMoon, faRightFromBracket, faUpload, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import Searches from '../Search';
import HeadlessTippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';
import Button from '~/components/Buttons';
import Menu from '~/components/Popup/Menu';
import { MessengerIcon } from '~/components/Icon';
import Image from '~/components/Image';
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
        title: 'Log Out',
        separate: true
    }
];

function Header() {
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

                <Searches />

                <div className={cx('header-right')}>
                    <Button text iconleft={<FontAwesomeIcon icon={faUpload} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <HeadlessTippy content="Messenger">
                            <button className={cx('icon-mess')}>
                                <MessengerIcon height={35} width={35} />
                            </button>
                        </HeadlessTippy>
                    ) : (
                        <Button primary>Login</Button>
                    )}

                    <Menu items={currentUser ? User_Items : Menu_Items} onChange={handleChange}>
                        {currentUser ? (
                            <Image src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/6282287a97d2f3c55744e0c68a7f36c9~c5_300x300.webp?x-expires=1685692800&x-signature=rhFl%2FOMKXVhhLK61vhGhbWXqPo0%3D" className={cx('user-avatar')} fallback="" alt="no" />
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
