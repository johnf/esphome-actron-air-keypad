# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ESPHome external component that decodes pulse trains from Actron Air keypad displays. Captures 40-bit frames via GPIO interrupts and exposes temperature setpoint, mode indicators, fan speeds, and zone states as Home Assistant sensors. Also includes a Home Assistant integration with climate entity and custom Lovelace card.

## Architecture

### ESPHome Component Structure

```
components/actron_air_esphome/
├── __init__.py           # ESPHome component registration and config schema
├── actron_air_keypad.h   # Main component class (protocol, timing, enums)
├── actron_air_keypad.cpp # Component implementation (ISR, decoding, publishing)
├── sensor.py             # Numeric sensor platform (setpoint_temp, error_count)
├── binary_sensor.py      # Binary sensor platform (18 sensors: modes, fans, zones)
└── text_sensor.py        # Text sensor platform (bit_string for debugging)
```

### Home Assistant Integration Structure

```
custom_components/actron_air_esphome/
├── __init__.py           # Integration setup, frontend card registration
├── climate.py            # Climate entity implementation
├── config_flow.py        # UI-based configuration
├── const.py              # Constants and entity mappings
├── manifest.json         # Integration metadata
├── strings.json          # Config flow UI strings
├── translations/
│   └── en.json           # English translations
└── frontend/
    └── actron-air-esphome-card.js  # Bundled Lovelace card
```

### Lovelace Card Structure

```
src/
├── actron-air-esphome-card.ts  # Main card component
├── editor.ts                    # Config editor
├── styles.ts                    # Retro LCD styling
├── types.ts                     # TypeScript interfaces
└── const.ts                     # Constants and mappings
```

### Data Flow

```
GPIO Pin → ISR (handle_interrupt) → Main Loop → Publish to Sensors
```

1. Hardware interrupt captures falling edges on GPIO pin
2. ISR measures pulse timing to decode 0/1 bits into volatile buffer
3. 40-bit frames are assembled and validated in `loop()`
4. `ActronAirKeypad::loop()` publishes decoded data to ESPHome sensors

### Python-C++ Integration

- Python files define ESPHome config schemas and generate C++ code
- `__init__.py` auto-loads sensor, binary_sensor, and text_sensor platforms
- `to_code()` functions use `cg.new_Pvariable()` and setter methods to wire sensors

### Protocol Details

- **Frame size:** 40 bits
- **Frame boundary:** >3.5ms reset pulse
- **Start condition:** ~2.7ms pulse
- **Bit threshold:** 1ms (shorter = 0, longer = 1)
- **Update rate:** ~200ms between frames

### Key Classes

- `ActronAirKeypad` (actron_air_keypad.h) - ESPHome Component handling ISR, protocol decoding, and sensor publishing
- `ActronAirClimate` (climate.py) - Home Assistant climate entity wrapping ESPHome sensors

## Available Sensors

**Numeric (`sensor` platform):** `setpoint_temp`, `error_count`

**Binary (`binary_sensor` platform):** `cool`, `heat`, `auto_mode`, `run`, `fan_low`, `fan_mid`, `fan_high`, `fan_cont`, `zone_1`-`zone_7`, `room`, `timer`, `inside`

**Text (`text_sensor` platform):** `bit_string`

## Climate Entity Features

- **HVAC Modes:** off, cool, heat, auto, fan_only
- **Fan Modes:** High, Medium, Low, High Cont, Medium Cont, Low Cont, Off
- **Zone Presets:** Individual zones and "All Zones"
- **Optional:** Current temperature and humidity from external sensors

## Requirements

- ESP32 with ESP-IDF framework
- Python 3.13+
- ESPHome >= 2025.11.5
- Home Assistant >= 2024.1.0 (for integration)

## Build Commands

- `pnpm run build` - Build Lovelace card and copy to integration
- `pnpm run lint` - Run Biome linter
- `pnpm run lint:fix` - Fix linting issues

## Maintenance

Keep this file updated when making architectural changes to the codebase.
