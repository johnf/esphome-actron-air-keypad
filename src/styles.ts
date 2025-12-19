import { css } from 'lit';

export const cardStyles = css`
  :host {
    --actron-card-bg: #e8e4d9;
    --actron-lcd-bg-start: #a8b5a0;
    --actron-lcd-bg-end: #8a9982;
    --actron-lcd-border: #666;
    --actron-lcd-text-active: #1a2e1a;
    --actron-lcd-text-inactive: #6a7a6a;
    --actron-button-bg: #f5f5f0;
    --actron-button-border: #999;
    --actron-button-text: #333;
    --actron-button-hover: #e8e8e3;
    --actron-power-bg: #d0d0d0;
    --actron-set-temp-bg: #888;
    --actron-zone-active: #d4e4d4;
    --actron-logo-colour: #1a3a5c;
  }

  ha-card {
    background: var(--actron-card-bg);
    border-radius: 8px;
    padding: 10px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  }

  .card-content {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: auto;
    grid-gap: 6px;
    grid-template-areas:
      'lcd lcd lcd lcd lcd lcd lcd power'
      'mode mode logo logo logo logo fan fan'
      '. . . . . . . .'
      'temp-up temp-up set-temp set-temp timer timer timer-up timer-up'
      'temp-down temp-down set-temp set-temp . . timer-down timer-down'
      '. . . . . . . .'
      'zone1 zone1 zone1 zone1 zone2 zone2 zone2 zone2'
      'zone3 zone3 zone3 zone3 zone4 zone4 zone4 zone4';
  }

  /* LCD Display */
  .lcd {
    grid-area: lcd;
    background: linear-gradient(180deg, var(--actron-lcd-bg-start) 0%, var(--actron-lcd-bg-end) 100%);
    border: 2px solid var(--actron-lcd-border);
    border-radius: 4px;
    padding: 8px 12px;
    min-height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .lcd-temp {
    font-family: monospace;
    font-size: 36px;
    font-weight: bold;
    color: var(--actron-lcd-text-active);
    text-align: left;
  }

  .lcd-status {
    display: flex;
    gap: 12px;
    font-size: 10px;
    font-weight: bold;
    justify-content: flex-end;
  }

  .lcd-status span {
    color: var(--actron-lcd-text-inactive);
  }

  .lcd-status span.active {
    color: var(--actron-lcd-text-active);
  }

  .lcd-indicators {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .lcd-indicators span {
    font-size: 9px;
    font-weight: bold;
    color: var(--actron-lcd-text-inactive);
  }

  .lcd-indicators span.active {
    color: var(--actron-lcd-text-active);
  }

  /* Power Button */
  .power {
    grid-area: power;
    align-self: start;
  }

  .power button {
    background: var(--actron-power-bg);
    border: none;
    border-radius: 4px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    height: 50px;
    width: 100%;
    cursor: pointer;
    font-size: 10px;
    font-weight: bold;
    color: var(--actron-button-text);
    line-height: 1.2;
  }

  .power button:hover {
    background: var(--actron-button-hover);
  }

  /* Mode Button */
  .mode {
    grid-area: mode;
  }

  /* Logo */
  .logo {
    grid-area: logo;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: var(--actron-logo-colour);
  }

  /* Fan Control */
  .fan {
    grid-area: fan;
  }

  /* Control Buttons */
  .control-btn {
    background: var(--actron-button-bg);
    border: 1px solid var(--actron-button-border);
    border-radius: 3px;
    height: 40px;
    width: 100%;
    cursor: pointer;
    font-size: 9px;
    font-weight: bold;
    color: var(--actron-button-text);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.3;
  }

  .control-btn:hover {
    background: var(--actron-button-hover);
  }

  /* Temperature Buttons */
  .temp-up {
    grid-area: temp-up;
  }

  .temp-down {
    grid-area: temp-down;
  }

  .temp-btn {
    background: var(--actron-button-bg);
    border: 1px solid var(--actron-button-border);
    border-radius: 3px;
    height: 30px;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .temp-btn:hover {
    background: var(--actron-button-hover);
  }

  .temp-btn ha-icon {
    --mdc-icon-size: 20px;
  }

  .temp-btn.up ha-icon {
    color: #cc3333;
  }

  .temp-btn.down ha-icon {
    color: #3333aa;
  }

  /* Set Temp Label */
  .set-temp {
    grid-area: set-temp;
  }

  .set-temp-label {
    background: var(--actron-set-temp-bg);
    border-radius: 3px;
    height: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
    color: #222;
    line-height: 2;
    text-align: center;
  }

  /* Timer */
  .timer {
    grid-area: timer;
  }

  .timer-btn {
    background: var(--actron-button-bg);
    border: 1px solid var(--actron-button-border);
    border-radius: 3px;
    height: 35px;
    width: 55px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    color: var(--actron-button-text);
  }

  .timer-btn:hover {
    background: var(--actron-button-hover);
  }

  /* Timer Up/Down */
  .timer-up {
    grid-area: timer-up;
  }

  .timer-down {
    grid-area: timer-down;
  }

  .timer-arrow {
    background: var(--actron-button-bg);
    border: 1px solid var(--actron-button-border);
    border-radius: 3px;
    height: 30px;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .timer-arrow:hover {
    background: var(--actron-button-hover);
  }

  .timer-arrow ha-icon {
    --mdc-icon-size: 20px;
    color: #888;
  }

  /* Zone Buttons */
  .zone {
    display: flex;
  }

  .zone1 {
    grid-area: zone1;
  }

  .zone2 {
    grid-area: zone2;
  }

  .zone3 {
    grid-area: zone3;
  }

  .zone4 {
    grid-area: zone4;
  }

  .zone-btn {
    background: var(--actron-button-bg);
    border: 1px solid var(--actron-button-border);
    border-radius: 3px;
    height: 40px;
    width: 100%;
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    padding: 0 8px;
  }

  .zone-btn:hover {
    background: var(--actron-button-hover);
  }

  .zone-btn.active {
    background: var(--actron-zone-active);
  }

  .zone-btn .zone-num {
    font-size: 14px;
    font-weight: bold;
    color: var(--actron-button-text);
    text-align: left;
  }

  .zone-btn .zone-name {
    font-size: 14px;
    color: var(--actron-button-text);
    text-align: right;
  }
`;
