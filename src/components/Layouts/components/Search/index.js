import Tippy from '@tippyjs/react/headless';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import AccoutItem from '~/components/AccoutItem';
import { Wrapper as PopupWrapper } from '~/components/Popup';
import { useEffect, useState } from 'react';
import Search from 'antd/es/input/Search';

const cx = classNames.bind(styles);
function Searches() {
    const [searchResult, setSearchResult] = useState([]);
    const [value, setValue] = useState('');

    const onSearch = (value) => {
        setSearchResult(value);
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };
    return (
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
    );
}

export default Searches;
