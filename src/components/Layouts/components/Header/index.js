import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Search from 'antd/es/input/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEllipsis, faEllipsisVertical, faKeyboard, faLanguage, faMoon, faUpload, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
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
                    <Button primary>Login</Button>
                    <Menu items={Menu_Items} onChange={handleChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
