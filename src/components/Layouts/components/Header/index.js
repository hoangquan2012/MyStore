import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <img src="./images/logo.png" />
            My Story
        </div>
    );
}

export default Header;
