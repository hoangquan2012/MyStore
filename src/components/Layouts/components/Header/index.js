import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Search from 'antd/es/input/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { Wrapper as PopupWrapper } from '~/components/Popup';
import AccoutItem from '~/components/AccoutItem';
import Button from '~/components/Buttons';
const cx = classNames.bind(styles);

const onSearch = (value) => console.log(value);
function Header() {
    const [searchResult, setSearchResult] = useState([]);

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
                    interactive={true}
                >
                    <div className={cx('header-center')}>
                        <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            style={{
                                width: 516
                            }}
                            spellCheck={false}
                            allowClear
                        />
                    </div>
                </Tippy>

                <div className={cx('header-right')}>
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
