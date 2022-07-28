import Proptypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './button.module.scss'

const cx = classNames.bind(styles)

const Button = ({ text, width, height, textColor, backColor, textSize }) => {
  return (
    <button
      className={cx('button', width, height, textColor, backColor, textSize)}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  width: Proptypes.oneOf(['large', 'small']).isRequired,
  height: Proptypes.oneOf(['tall']).isRequired,
  backColor: Proptypes.oneOf(['backBlue', 'backGrey']).isRequired,
  textColor: Proptypes.oneOf(['textBlack', 'textWhite', 'textBlue']).isRequired,
  textSize: Proptypes.oneOf(['textLarge']).isRequired,
}

export default Button
