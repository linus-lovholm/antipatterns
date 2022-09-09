import { useState } from 'react';
import './unclickableButton.css';

/**
 * Primary UI component for user interaction
 */
export const UnclickableButton = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const [hoverOne, setHoverOne] = useState(true);
  const [hoverTwo, setHoverTwo] = useState(false);

  const handleMouseIn = () => {
    setHoverOne(!hoverOne);
    setHoverTwo(!hoverTwo);
  };

  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  return (
    <>
      <button
        type='button'
        onMouseOver={handleMouseIn}
        className={[
          'storybook-button',
          `storybook-button--${size}`,
          'move',
          mode,
        ].join(' ')}
        style={
          (backgroundColor && { backgroundColor },
          !hoverTwo ? { visibility: 'hidden' } : { visibility: 'visible' })
        }
        {...props}
      >
        {label}
      </button>
      <button
        type='button'
        onMouseOver={handleMouseIn}
        className={[
          'storybook-button',
          `storybook-button--${size}`,

          'move',
          mode,
        ].join(' ')}
        style={
          (backgroundColor && { backgroundColor },
          !hoverOne ? { visibility: 'hidden' } : { visibility: 'visible' })
        }
        {...props}
      >
        {label}
      </button>
    </>
  );
};
