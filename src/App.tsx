import autopilotDisconnect from './assets/audio/boeing_autopilot_disconnect.wav'
import cabinAnnouncement from './assets/audio/boeing_cabin_annoucement.wav'
import fireBell from './assets/audio/boeing_fire_bell.wav'
import masterCaution from './assets/audio/boeing_master_caution.wav'
import masterWarning from './assets/audio/boeing_master_warning.wav'
import selcal from './assets/audio/boeing_selcal.wav'

import adjustVerticalSpeed from './assets/audio/airbus_adjust_vertical_speed.wav'
import apAltLevelOff from './assets/audio/airbus_ap_alt_level_off.wav'
import apDisconnect from './assets/audio/airbus_ap_disconnect.wav'
import apFailure from './assets/audio/airbus_ap_failure.wav'
import clearOfConflict from './assets/audio/airbus_clear_of_conflict.wav'
import climbNow from './assets/audio/airbus_climb_now.wav'
import climb from './assets/audio/airbus_climb.wav'
import crossingClimb from './assets/audio/airbus_crossing_climb.wav'
import crossingDescend from './assets/audio/airbus_crossing_descend.wav'
import descendNow from './assets/audio/airbus_descend_now.wav'
import descend from './assets/audio/airbus_descend.wav'
import fireAlarm from './assets/audio/airbus_fire_alarm.wav'
import goAroundWindshear from './assets/audio/airbus_go_around_windshear_aheada.wav'
import increaseClimb from './assets/audio/airbus_increase_climb.wav'
import increaseDescend from './assets/audio/airbus_increase_descend.wav'
import maintainVerticalSpeedMaintain from './assets/audio/airbus_maintain_vertical_speed_maintain.wav'
import maintainVerticalSpeed from './assets/audio/airbus_maintain_vertical_speed.wav'
import monitorVerticalSpeed from './assets/audio/airbus_monitor_vertical_speed.wav'
import passSign from './assets/audio/airbus_pass_sign.wav'
import stall from './assets/audio/airbus_stall.wav'
import traffic from './assets/audio/airbus_traffic.wav'
import transonic from './assets/audio/airbus_transonic.wav'
import windshear from './assets/audio/airbus_windshear.wav'

import SoundButton from './SoundButton'
import './App.css'

const BOEING_SOUNDS = [
  { label: 'Master Caution', src: masterCaution, category: 'warning' },
  { label: 'Master Warning', src: masterWarning, category: 'warning' },
  { label: 'Fire Bell', src: fireBell, category: 'warning' },
  { label: 'Autopilot Disconnect', src: autopilotDisconnect, category: 'ap' },
  { label: 'SELCAL', src: selcal, category: 'comm' },
  { label: 'Cabin Announcement', src: cabinAnnouncement, category: 'comm' },
]

const AIRBUS_SOUNDS = [
  { label: 'Climb', src: climb, category: 'tcas' },
  { label: 'Climb Now', src: climbNow, category: 'tcas' },
  { label: 'Descend', src: descend, category: 'tcas' },
  { label: 'Descend Now', src: descendNow, category: 'tcas' },
  { label: 'Crossing Climb', src: crossingClimb, category: 'tcas' },
  { label: 'Crossing Descend', src: crossingDescend, category: 'tcas' },
  { label: 'Increase Climb', src: increaseClimb, category: 'tcas' },
  { label: 'Increase Descend', src: increaseDescend, category: 'tcas' },
  { label: 'Adjust Vertical Speed', src: adjustVerticalSpeed, category: 'tcas' },
  { label: 'Maintain Vertical Speed', src: maintainVerticalSpeed, category: 'tcas' },
  { label: 'Maintain VS Maintain', src: maintainVerticalSpeedMaintain, category: 'tcas' },
  { label: 'Monitor Vertical Speed', src: monitorVerticalSpeed, category: 'tcas' },
  { label: 'Traffic', src: traffic, category: 'tcas' },
  { label: 'Clear of Conflict', src: clearOfConflict, category: 'tcas' },
  { label: 'AP Disconnect', src: apDisconnect, category: 'ap' },
  { label: 'AP Failure', src: apFailure, category: 'ap' },
  { label: 'AP Alt Level Off', src: apAltLevelOff, category: 'ap' },
  { label: 'Fire Alarm', src: fireAlarm, category: 'warning' },
  { label: 'Windshear', src: windshear, category: 'weather' },
  { label: 'Go Around / Windshear', src: goAroundWindshear, category: 'weather' },
  { label: 'Stall', src: stall, category: 'other' },
  { label: 'Transonic', src: transonic, category: 'other' },
  { label: 'Pass Sign', src: passSign, category: 'other' },
]

function App() {
  return (
    <div className="app">
      <h1>Airplane Siren Panel</h1>
      <div className="panels">
        <div className="panel panel-boeing">
          <h2 className="section-heading">Boeing</h2>
          <div className="sound-grid sound-grid-boeing">
            {BOEING_SOUNDS.map((s) => (
              <SoundButton key={s.src} label={s.label} src={s.src} category={s.category} />
            ))}
          </div>
        </div>
        <div className="panel panel-airbus">
          <h2 className="section-heading">Airbus</h2>
          <div className="sound-grid sound-grid-airbus">
            {AIRBUS_SOUNDS.map((s) => (
              <SoundButton key={s.src} label={s.label} src={s.src} category={s.category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
