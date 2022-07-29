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
  isSelected,
}) => {
  return (
    <button
      className={cx('button', width, height, textColor, backColor, textSize, {
        selected: isSelected,
      })}
      onClick={(e) => {
        e.preventDefault()
        onClick(e.currentTarget.innerText)
      }}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  width: Proptypes.oneOf(['large', 'small']).isRequired,
  backColor: Proptypes.oneOf(['backBlue', 'backGrey']).isRequired,
  textColor: Proptypes.oneOf(['textBlack', 'textWhite', 'textBlue']).isRequired,
  textSize: Proptypes.oneOf(['textLarge']),
  height: Proptypes.oneOf(['tall']),
  onClick: Proptypes.func,
}

export default Button
