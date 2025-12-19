# Actron Air ESP32 Keypad Component for ESPHome

An ESPHome external component for reading and decoding pulse trains from the
Actron Air ESP32 keypad display, plus a custom Lovelace card for Home Assistant.

## Key Features

- **Interrupt-driven reading**: Accurate pulse train capture
- **40-bit decoding**: Full status from keypad display
- **Temperature display**: 7-segment decoder for setpoint
- **18 binary sensors**: Mode, fan, zones, timers
- **Error tracking**: Bit count for monitoring reliability
- **Type-safe config**: ESPHome validation for all settings
- **Custom Lovelace card**: Retro keypad-style control interface

## Hardware Requirements

- ESP32 (ESP-IDF framework)
- GPIO pin for pulse train input
- Connection to air conditioner keypad display output

See the forum thread at
<https://community.home-assistant.io/t/actron-aircon-esp32-controller-help/609062>
to build the hardware.

## Installation

### HACS (Recommended)

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=johnf&repository=esphome_actron_air_keypad&category=plugin)
Or manually:

1. Open HACS in Home Assistant
2. Go to "Frontend" section
3. Click the three dots menu and select "Custom repositories"
4. Add `https://github.com/johnf/esphome_actron_air_keypad` with category "Lovelace"
5. Install "Actron Air ESPHome Card"
6. Restart Home Assistant

### Manual Installation

1. Download `actron-air-esphome-card.js` from the [latest release](https://github.com/johnf/esphome_actron_air_keypad/releases)
2. Copy to `config/www/actron-air-esphome-card.js`
3. Add to Lovelace resources (Settings > Dashboards > Resources):

   ```yaml
   url: /local/actron-air-esphome-card.js
   type: module
   ```

4. Restart Home Assistant

### ESPHome External Component

```yaml
external_components:
  - source:
      type: git
      url: https://github.com/johnf/esphome_actron_air_keypad
      ref: main
    components: [actron_air_keypad]
```

## Lovelace Card Usage

Add the card to your dashboard:

```yaml
type: custom:actron-air-esphome-card
entity_prefix: actron_air
```

### Card Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity_prefix` | string | **required** | Prefix for ESPHome entities (e.g., `actron_air`) |
| `name` | string | - | Card title (optional) |
| `show_timer` | boolean | `true` | Show timer controls |
| `show_zones` | boolean | `true` | Show zone buttons |
| `zone_count` | number | `4` | Number of zones to display (1-7) |
| `zones` | array | - | Custom zone names |

### Full Configuration Example

```yaml
type: custom:actron-air-esphome-card
entity_prefix: actron_air
name: Air Conditioning
show_timer: true
show_zones: true
zone_count: 4
zones:
  - name: Bedrooms
  - name: Living Room
  - name: Kitchen
  - name: Office
```

### Expected Entity Names

The card expects entities with the following naming pattern based on your `entity_prefix`:

**Sensors:**

- `sensor.{prefix}_setpoint_temperature`

**Switches:**

- `switch.{prefix}_power`
- `switch.{prefix}_zone_1` through `switch.{prefix}_zone_7`

**Binary Sensors:**

- `binary_sensor.{prefix}_cool`
- `binary_sensor.{prefix}_heat`
- `binary_sensor.{prefix}_auto`
- `binary_sensor.{prefix}_run`
- `binary_sensor.{prefix}_fan_low`
- `binary_sensor.{prefix}_fan_mid`
- `binary_sensor.{prefix}_fan_high`
- `binary_sensor.{prefix}_fan_continuous`
- `binary_sensor.{prefix}_room`
- `binary_sensor.{prefix}_timer`
- `binary_sensor.{prefix}_zone_1` through `binary_sensor.{prefix}_zone_7`

**Buttons:**

- `button.{prefix}_mode`
- `button.{prefix}_fan`
- `button.{prefix}_temp_up`
- `button.{prefix}_temp_down`
- `button.{prefix}_timer`
- `button.{prefix}_timer_up`
- `button.{prefix}_timer_down`

## ESPHome Configuration

See `example_actron_air_keypad.yaml` for complete configuration with all
sensors and DAC controls.

```yaml
# Load the component
external_components:
  - source:
      type: local
      path: components

# Configure the reader
actron_air_keypad:
  adc_pin: GPIO33

# Add temperature sensor
sensor:
  - platform: actron_air_keypad
    setpoint_temp:
      name: "Temperature"

# Add mode sensors
binary_sensor:
  - platform: actron_air_keypad
    cool:
      name: "Cool Mode"
    heat:
      name: "Heat Mode"
    fan_hi:
      name: "Fan High"
    zone1:
      name: "Zone Bedrooms"
      icon: mdi:bed
    zone2:
      name: "Zone Living"
      icon: mdi:sofa

text_sensor:
  - platform: template
    name: "Fan Mode"
    lambda: |-
      if (id(fan_hi).state && id(fan_cont).state)
        return {"High Continuous"};
      else if (id(fan_hi).state)
        return {"High"};
      else if (id(fan_mid).state)
        return {"Medium"};
      return {"Low"};
```

## Available ESPHome Sensors

### Numeric Sensors (`sensor` platform)

- `setpoint_temp` - Temperature from 7-segment display (C)
- `error_count` - Error counter for monitoring

### Status Sensors (`binary_sensor` platform)

- **Mode**: `cool`, `heat`, `auto`, `run`
- **Fan**: `fan_hi`, `fan_mid`, `fan_low`, `fan_cont`
- **Zones**: `zone1` through `zone7`
- **Other**: `inside`, `timer`

### Debug Sensors (`text_sensor` platform)

- `bit_string` - Raw 40-bit pulse train (internal use)

## How It Works

### Wires

There are 4 wires inside the wall unit that connect to the main supply:

- SENS - sensor line is directly connected to a thermistor
- KEY - connected to the keypad, it changes resistance to a different value
  when keys are pressed. This drops the voltage from 5V to different levels
- COMM - ground
- POWER - 19V and also data line that gets shifted into the LED. The protocol
  in this wire is quite simple: Data is transmitted every 200ms or so. It starts
  with a 16V->0V transition, followed by 41 other pulses, a zero or a one is
  determined by the time between the pulses. Each value is then shifted through
  the leds in the board.

### Pulse Train Decoding

1. An interrupt handler captures falling edges on the ADC pin
2. Timing between edges determines if the pulse represents a '0' or '1'
3. 40 bits are collected to form a complete frame
4. The frame is decoded to extract display and LED status
5. Changes are published to Home Assistant sensors

## Troubleshooting

### No data received

- Check ADC pin connection
- Verify pulse train voltage levels
- Monitor `error_count` sensor for errors

### Incorrect temperature readings

- Check 7-segment wiring/decoding
- Look at `bit_string` for raw data
- Verify display is showing temperature

### Compile errors

- Ensure ESP-IDF framework is selected
- Check all Python files are present
- Validate YAML indentation

### Card not showing

- Clear browser cache
- Check browser console for errors
- Verify the resource is loaded in Settings > Dashboards > Resources

---

**Need Help?**

- Check ESPHome logs: `esphome logs your-device.yaml`
- Validate config: `esphome config your-device.yaml`
- Review example.yaml for complete setup

## License

MIT License - Feel free to use and modify

## Thanks

This builds on the work of many others:

- <https://community.home-assistant.io/t/actron-aircon-esp32-controller-help/609062>
- <https://github.com/kursancew/actron-air-wifi>
- <https://github.com/brentk7/Actron-Keypad>
- <https://github.com/cjd/Actron-Keypad>
- <https://github.com/LaughingLogic/Actron-Keypad>
