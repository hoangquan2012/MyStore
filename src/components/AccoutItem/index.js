import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccoutItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccoutItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/6282287a97d2f3c55744e0c68a7f36c9~c5_300x300.webp?x-expires=1685692800&x-signature=rhFl%2FOMKXVhhLK61vhGhbWXqPo0%3D" alt="name" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Le Bich Hien</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </p>
                <span className={cx('username')}>lebitchhien</span>
            </div>
        </div>
    );
}

export default AccoutItem;
