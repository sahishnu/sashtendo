import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../Sketches/sketch';
import Button from './RoundButton/Button';
import './Gameboy.scss';

const Gameboy = () => {

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
        <div className="d-pad-container">
          <Button button={'w'} height={'55px'} width={'40px'} />
          <div className="d-pad-horizontal-row">
          <Button button={'a'} height={'40px'} width={'55px'} />
          <Button button={'s'} height={'40px'} width={'55px'} />
          </div>
          <Button button={'d'} height={'55px'} width={'40px'} />
          {/* <div className="d-pad">
            <div className="d-pad-horizontal button"></div>
            <div className="d-pad-vertical button"></div>
          </div> */}
        </div>
        <div className="a-button-container">
          <Button button={'a'} round />
          <div className="button-letter">A</div>
        </div>
        <div className="b-button-container">
          <Button button={'b'} round />
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
      <div className="speaker-container">
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
        <div className="speaker"></div>
      </div>
    </div>
  );
}

export default Gameboy;
