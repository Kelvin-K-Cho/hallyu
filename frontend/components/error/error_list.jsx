import React from 'react';

const ErrorList = ({ errors }) => {
  if (errors.length === 0) return null;
  const errorItems = errors.map(error => <li key={ error }>{ error }</li>);

  return (
    <ul className="list-error">
      { errorItems }
    </ul>
  );
};

export default ErrorList;
