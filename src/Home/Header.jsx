import React from 'react';

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1>
          <a>
            <span>快包</span>
          </a>
          <span>行動快包平台</span>
        </h1>
      </div>
    </header>
  );
}
