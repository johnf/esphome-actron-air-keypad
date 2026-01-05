"""Constants for Actron Air ESPHome integration."""

from typing import Final

DOMAIN: Final = "actron_air_esphome"

# Configuration keys
CONF_ENTITY_PREFIX: Final = "entity_prefix"
CONF_ZONE_COUNT: Final = "zone_count"
CONF_CURRENT_TEMP_SENSOR: Final = "current_temperature_sensor"
CONF_HUMIDITY_SENSOR: Final = "humidity_sensor"

# Default values
DEFAULT_ENTITY_PREFIX: Final = "actron_air_esphome"
DEFAULT_ZONE_COUNT: Final = 4
MAX_ZONE_COUNT: Final = 7

# Temperature settings
MIN_TEMP: Final = 16.0
MAX_TEMP: Final = 29.0
TEMP_STEP: Final = 0.5

# Entity suffixes (matching ESPHome config and card)
ENTITY_SUFFIXES: Final = {
    # Sensors
    "setpoint_temp": "setpoint_temperature",
    # Switches
    "power": "power",
    # Binary sensors
    "cool": "cool",
    "heat": "heat",
    "auto_mode": "auto_mode",
    "run": "run",
    "fan_low": "fan_low",
    "fan_mid": "fan_mid",
    "fan_high": "fan_high",
    "fan_cont": "fan_cont",
    "timer": "timer",
    "inside": "inside",
    # Buttons
    "mode_button": "mode",
    "fan_button": "fan",
    "temp_up": "temp_up",
    "temp_down": "temp_down",
}

# Fan mode names
FAN_MODE_HIGH: Final = "High"
FAN_MODE_MEDIUM: Final = "Medium"
FAN_MODE_LOW: Final = "Low"
FAN_MODE_HIGH_CONT: Final = "High Cont"
FAN_MODE_MEDIUM_CONT: Final = "Medium Cont"
FAN_MODE_LOW_CONT: Final = "Low Cont"
FAN_MODE_OFF: Final = "Off"

# Fan mode list for climate entity
FAN_MODES: Final = [
    FAN_MODE_HIGH,
    FAN_MODE_MEDIUM,
    FAN_MODE_LOW,
    FAN_MODE_HIGH_CONT,
    FAN_MODE_MEDIUM_CONT,
    FAN_MODE_LOW_CONT,
    FAN_MODE_OFF,
]

# Preset names
PRESET_ALL_ZONES: Final = "All Zones"
PRESET_ZONE_PREFIX: Final = "Zone "
