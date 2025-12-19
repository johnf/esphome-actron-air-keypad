import type { LovelaceCardConfig } from 'custom-card-helpers';

export interface ZoneConfig {
  name: string;
}

export interface ActronAirCardConfig extends LovelaceCardConfig {
  type: string;
  entity_prefix: string;
  name?: string;
  show_timer?: boolean;
  show_zones?: boolean;
  zone_count?: number;
  zones?: ZoneConfig[];
}

export interface CardState {
  power: boolean;
  temperature: number;
  mode: 'cool' | 'heat' | 'auto' | 'off';
  fanSpeed: 'low' | 'mid' | 'high' | 'off';
  fanContinuous: boolean;
  run: boolean;
  timer: boolean;
  room: boolean;
  inside: boolean;
  zones: boolean[];
}
