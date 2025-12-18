# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ESPHome external component that decodes pulse trains from Actron Air keypad displays. Captures 40-bit frames via GPIO interrupts and exposes temperature setpoint, mode indicators, fan speeds, and zone states as Home Assistant sensors.

## Architecture

### Component Structure

```
components/actron_air_keypad/
├── __init__.py           # ESPHome component registration and config schema
├── actron_air_keypad.h   # Main component class header
├── actron_air_keypad.cpp # Component implementation (ISR, sensor publishing)
├── led_protocol.h        # Protocol decoder header (bit definitions, timing)
├── led_protocol.cpp      # Protocol decoder (frame parsing, 7-segment decoding)
├── sensor.py             # Numeric sensor platform (setpoint_temp, error_count)
├── binary_sensor.py      # Binary sensor platform (18 sensors: modes, fans, zones)
└── text_sensor.py        # Text sensor platform (bit_string for debugging)
```

### Data Flow

```
GPIO Pin → ISR (handle_interrupt) → LedProtocol → Main Loop → Publish to Sensors
```

1. Hardware interrupt captures falling edges on GPIO pin
2. `LedProtocol` measures pulse timing to decode 0/1 bits
3. 40-bit frames are assembled and validated
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

- `ActronAirKeypad` (actron_air_keypad.h) - ESPHome Component, manages ISR and sensors
- `LedProtocol` (led_protocol.h) - Decodes pulse timing into bit array and extracts values

## Available Sensors

**Numeric (`sensor` platform):** `setpoint_temp`, `error_count`

**Binary (`binary_sensor` platform):** `cool`, `heat`, `auto_mode`, `run`, `fan_low`, `fan_mid`, `fan_high`, `fan_cont`, `zone1`-`zone7`, `room`, `timer`, `inside`

**Text (`text_sensor` platform):** `bit_string`

## Requirements

- ESP32 with ESP-IDF framework
- Python 3.13+
- ESPHome >= 2025.11.5
