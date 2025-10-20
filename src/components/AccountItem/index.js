import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/034f5fbb93452091de3cbefe9285d808~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=1ca1d4a2&x-expires=1761102000&x-signature=zgH9PJY%2Bp4WHEBfoHZVCANOFhLM%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt="Avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <sppan>Nguyễn Tuấn Kiệt</sppan>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>ntkiet0908</p>
            </div>
        </div>
    );
}

export default AccountItem;
