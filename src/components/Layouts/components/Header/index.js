import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import Search from 'antd/es/input/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const onSearch = (value) => console.log(value);
function Header() {
    return (
        <div className={`${cx('wrapper')}`}>
            <div className={`${cx('header-container')}  wrapper`}>
                <Link to="/" className={cx('header-left')}>
                    <img src={images.logo} />
                    My Story
                </Link>
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
                <div className={cx('header-right')}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            </div>
        </div>
    );
}

export default Header;
