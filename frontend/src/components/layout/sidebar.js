import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/user">
        Salads
      </a>
      <a className="menu-item" href="/admin">
        Pizzas
      </a>
      <a className="menu-item" href="/profile">
        Desserts
      </a>
    </Menu>
  );
};