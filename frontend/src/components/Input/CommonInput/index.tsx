import React, { FC } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../../Icons/Icon';

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
  setError?: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  iconName?: string;
  disabled?: boolean
  height?: number;
  width?: number
  type?: 'text' | 'number';
  iconPosition?: 'left' | 'right';
};

export const Input: FC<Props> = ({
  value,
  setValue,
  error,
  setError,
  placeholder,
  iconName,
  disabled,
  height,
  width,
  type,
  iconPosition,
}) => {
  const getInputStyle = (errorValue: string) => {
    if (errorValue) {
      return `${styles.input} ${styles.error}`;
    }
    return styles.input;
  };

  const inputStyle = {
    padding: `16px 16px 16px ${(iconName && (!iconPosition || iconPosition === 'left')) ? '52px' : '16px'}`,
    height: `${height}px`,
    maxWidth: width ? `${width}px` : '100%',
  };

  return (
    <>
      <div className={styles.inputWrapper} style={{ maxWidth: width }}>
        <input
          type={type}
          style={inputStyle}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            if (setError) {
              setError('');
            }
          }}
          className={getInputStyle(error)}
          placeholder={placeholder}
          disabled={disabled}
        />

        {iconName && (
          <div className={styles.icon} style={iconPosition === 'right' ? { left: 'unset', right: '16px' } : {}}>
            <Icon iconName={iconName} />
          </div>
        )}
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </>
  );
};
