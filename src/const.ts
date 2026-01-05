export const CARD_VERSION = '0.1.0';

export const DEFAULT_ENTITY_PREFIX = 'actron_air_esphome';
export const DEFAULT_ZONE_COUNT = 4;
export const MAX_ZONE_COUNT = 7;

export const ENTITY_SUFFIXES = {
  // Sensors
  setpointTemperature: 'setpoint_temperature',

  // Switches
  power: 'power',

  // Binary sensors
  cool: 'cool',
  heat: 'heat',
  autoMode: 'auto_mode',
  run: 'run',
  fanLow: 'fan_low',
  fanMid: 'fan_mid',
  fanHigh: 'fan_high',
  fanCont: 'fan_cont',
  room: 'room',
  timer: 'timer',
  inside: 'inside',

  // Buttons
  mode: 'mode',
  fan: 'fan',
  tempUp: 'temp_up',
  tempDown: 'temp_down',
  timerButton: 'timer',
  timerUp: 'timer_up',
  timerDown: 'timer_down',
} as const;

export const DEFAULT_ZONE_NAMES = [
  'Zone 1',
  'Zone 2',
  'Zone 3',
  'Zone 4',
  'Zone 5',
  'Zone 6',
  'Zone 7',
  'Zone 8',
];
