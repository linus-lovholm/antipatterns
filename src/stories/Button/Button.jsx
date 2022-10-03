import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, label, ...props }) => {
  const mode = primary ? 'storybook-button--test' : 'storybook-button--secondary';
  return (
    <div  className={'bgColor'} ><button
      type="button"
      className={[, `storybook-button--test`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
      <button
      type="button"
      className={[, `storybook-button--test`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}

      <button
      type="button"
      className={[, `storybook-button--test`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}

      <button
      type="button"
      className={[, `storybook-button--test`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}

      <button
      type="button"
      className={[, `storybook-button--test`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}

      <button
      type="button"
      className={[, `storybook-button--test`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
      
      <button
      type="button"
      className={[, `storybook-button--test`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}

      <button
      type="button"
      className={[, `storybook-button--test`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}

      <button
      type="button"
      className={[, `storybook-button--test`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}

      <button
      type="button"
      className={[, `storybook-button--test`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}

      <button
      type="button"
      className={[, `storybook-button--test`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}

      <button
      type="button"
      className={[, `storybook-button--test`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}

      <button
      type="button"
      className={[`storybook-button--test`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>

    </button>

    </button>

    </button>

    </button>

    </button>

    </button>

    </button>

    </button>

    </button>

    </button>

    </button>

    </button>
    </div>

    
  );
};