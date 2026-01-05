"""Binary sensor platform for Actron Air ESPHome component."""

from typing import Any

import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import binary_sensor

from . import ActronAirKeypad, CONF_ACTRON_AIR_ESPHOME_ID

DEPENDENCIES = ["actron_air_esphome"]

# Sensor configuration keys
CONF_ROOM = "room"
CONF_FAN_CONT = "fan_cont"
CONF_FAN_HIGH = "fan_high"
CONF_FAN_MID = "fan_mid"
CONF_FAN_LOW = "fan_low"
CONF_COOL = "cool"
CONF_AUTO_MODE = "auto_mode"
CONF_HEAT = "heat"
CONF_RUN = "run"
CONF_TIMER = "timer"
CONF_INSIDE = "inside"
CONF_ZONE_1 = "zone_1"
CONF_ZONE_2 = "zone_2"
CONF_ZONE_3 = "zone_3"
CONF_ZONE_4 = "zone_4"
CONF_ZONE_5 = "zone_5"
CONF_ZONE_6 = "zone_6"
CONF_ZONE_7 = "zone_7"
CONF_ZONE_8 = "zone_8"

# Mapping of config keys to C++ setter method names
SENSOR_MAP: list[tuple[str, str]] = [
    (CONF_ROOM, "set_room_sensor"),
    (CONF_FAN_CONT, "set_fan_cont_sensor"),
    (CONF_FAN_HIGH, "set_fan_high_sensor"),
    (CONF_FAN_MID, "set_fan_mid_sensor"),
    (CONF_FAN_LOW, "set_fan_low_sensor"),
    (CONF_COOL, "set_cool_sensor"),
    (CONF_AUTO_MODE, "set_auto_mode_sensor"),
    (CONF_HEAT, "set_heat_sensor"),
    (CONF_RUN, "set_run_sensor"),
    (CONF_TIMER, "set_timer_sensor"),
    (CONF_INSIDE, "set_inside_sensor"),
    (CONF_ZONE_1, "set_zone_1_sensor"),
    (CONF_ZONE_2, "set_zone_2_sensor"),
    (CONF_ZONE_3, "set_zone_3_sensor"),
    (CONF_ZONE_4, "set_zone_4_sensor"),
    (CONF_ZONE_5, "set_zone_5_sensor"),
    (CONF_ZONE_6, "set_zone_6_sensor"),
    (CONF_ZONE_7, "set_zone_7_sensor"),
    (CONF_ZONE_8, "set_zone_8_sensor"),
]

CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(CONF_ACTRON_AIR_ESPHOME_ID): cv.use_id(ActronAirKeypad),
        cv.Optional(CONF_ROOM): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_FAN_CONT): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_FAN_HIGH): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_FAN_MID): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_FAN_LOW): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_COOL): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_AUTO_MODE): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_HEAT): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_RUN): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_TIMER): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_INSIDE): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_ZONE_1): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_ZONE_2): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_ZONE_3): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_ZONE_4): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_ZONE_5): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_ZONE_6): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_ZONE_7): binary_sensor.binary_sensor_schema(),
        cv.Optional(CONF_ZONE_8): binary_sensor.binary_sensor_schema(),
    }
)


async def to_code(config: dict[str, Any]) -> None:
    parent = await cg.get_variable(config[CONF_ACTRON_AIR_ESPHOME_ID])

    for conf_key, setter_name in SENSOR_MAP:
        if conf_key in config:
            sens = await binary_sensor.new_binary_sensor(config[conf_key])
            cg.add(getattr(parent, setter_name)(sens))
