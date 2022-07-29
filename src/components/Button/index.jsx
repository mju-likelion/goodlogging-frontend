import Proptypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './button.module.scss'

const cx = classNames.bind(styles)

const Button = ({
  text,
  width,
  height,
  textColor,
  backColor,
  textSize,
  onClick,
}) => {
  return (
    <button
      className={cx('button', width, height, textColor, backColor, textSize)}
      onClick={(e) => onClick(e.currentTarget.value)}
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
  onClick: Proptypes.func,
}

export default Button
