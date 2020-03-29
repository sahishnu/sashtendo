import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
import './Gameboy.scss';

function Gameboy() {
  return (
    <div className="Gameboy">
      <div className="screen-container">
        <div className="screen-power-indicator">
          <div className="screen-power-light"></div>
          <div className="power-title">Power</div>
        </div>
        <div className="screen">
          <P5Wrapper sketch={sketch} />
        </div>
        <div className="screen-title">
          <span className="screen-title-main">Sashtendo</span><span className="screen-title-sub">beta</span>
        </div>
      </div>
      <div className="etching">
        @sahishnu
      </div>
      <div className="controls-row">
        <div className="d-pad-container button">
          {/* <div className="d-pad">
            <div className="d-pad-horizontal button"></div>
            <div className="d-pad-vertical button"></div>
          </div> */}
        </div>
        <div className="a-button-container">
          <div className="a-button button"></div>
          <div className="button-letter">A</div>
        </div>
        <div className="b-button-container">
          <div className="b-button button"></div>
          <div className="button-letter">B</div>
        </div>
      </div>
      <div className="settings-row">
        <div className="setting-button-container" style={{marginRight: '16px'}}>
          <div className="setting-button button"></div>
          <div className="setting-button-lettering">Select</div>
        </div>
        <div className="setting-button-container">
          <div className="setting-button button"></div>
          <div className="setting-button-lettering">Start</div>
        </div>
      </div>
    </div>
  );
}

export default Gameboy;
