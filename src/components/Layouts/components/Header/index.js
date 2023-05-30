import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <img src="./images/logo.png" />
                My Story
            </div>
            <div className={cx('header-center')}></div>
            <div className={cx('header-right')}></div>
        </div>
    );
}

export default Header;
