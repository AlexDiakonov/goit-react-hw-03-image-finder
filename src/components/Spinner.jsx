import React from 'react';
import Loader from 'react-loader-spinner';
import style from '../style.module.css';
export default class Spinner extends React.Component {
  //other logic
  render() {
    return (
      <div className={style.spinner}>
        <Loader
          type="Rings"
          color="teal"
          height={130}
          width={130}
          timeout={7000}
          radius={400}
        />
      </div>
    );
  }
}
