import { useState, useEffect, useCallback, useRef } from 'react';
import { INITIAL_SCADA_STATE } from '../data/scadaData';
import { stepScadaPhysics } from '../utils/scadaPhysics';

export function useScadaEngine() {
  const [state, setState] = useState(INITIAL_SCADA_STATE);
  const stateRef = useRef(state);
  stateRef.current = state;

  // Simulation tick loop
  useEffect(() => {
    if (!state.isRunning) return;

    const interval = setInterval(() => {
      setState(prevState => {
        const dt = 1.0;
        return stepScadaPhysics(prevState, dt);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [state.isRunning]);

  const toggleSimulation = useCallback(() => {
    setState(prev => ({ ...prev, isRunning: !prev.isRunning }));
  }, []);

  const setControlMode = useCallback((mode) => {
    setState(prev => {
      const logEntry = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        severity: "INFO",
        message: `Control Mode switched to ${mode}`
      };
      return { ...prev, controlMode: mode, eventLog: [logEntry, ...prev.eventLog.slice(0, 49)] };
    });
  }, []);

  const togglePumpIn = useCallback((index) => {
    setState(prev => {
      const key = `pumpIn${index}`;
      const nextVal = !prev[key];
      const logEntry = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        severity: "INFO",
        message: `Operator command: Inlet Pump P-10${index} set to ${nextVal ? 'ON' : 'OFF'}`
      };
      return { ...prev, [key]: nextVal, eventLog: [logEntry, ...prev.eventLog.slice(0, 49)] };
    });
  }, []);

  const togglePumpOut = useCallback((index) => {
    setState(prev => {
      const key = `pumpOut${index}`;
      const nextVal = !prev[key];
      const logEntry = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        severity: "INFO",
        message: `Operator command: Effluent Pump P-50${index} set to ${nextVal ? 'ON' : 'OFF'}`
      };
      return { ...prev, [key]: nextVal, eventLog: [logEntry, ...prev.eventLog.slice(0, 49)] };
    });
  }, []);

  const setScreenAuto = useCallback((isAuto) => {
    setState(prev => {
      const logEntry = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        severity: "INFO",
        message: `Screen Cleaning Mechanism set to ${isAuto ? 'AUTO' : 'MANUAL'}`
      };
      return { ...prev, screenAuto: isAuto, eventLog: [logEntry, ...prev.eventLog.slice(0, 49)] };
    });
  }, []);

  const triggerStormSurge = useCallback(() => {
    setState(prev => {
      const logEntry = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        severity: "WARNING",
        message: `Simulated Heavy Rainfall Storm Surge injected! Intake flow skyrocketing.`
      };
      return {
        ...prev,
        flowM3d: 38000.0,
        eventLog: [logEntry, ...prev.eventLog.slice(0, 49)]
      };
    });
  }, []);

  const triggerPollutionSpike = useCallback(() => {
    setState(prev => {
      const logEntry = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        severity: "CRITICAL",
        message: `Industrial Pollution Spike (COD/BOD) injected into raw sewage influent!`
      };
      return {
        ...prev,
        codIn: 1150.0,
        bodIn: 580.0,
        eventLog: [logEntry, ...prev.eventLog.slice(0, 49)]
      };
    });
  }, []);

  const simulatePumpFailure = useCallback(() => {
    setState(prev => {
      const logEntry = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        severity: "CRITICAL",
        message: `Hardware failure: Inlet Pump P-101 tripped on thermal overload!`
      };
      return {
        ...prev,
        pumpIn1: false,
        eventLog: [logEntry, ...prev.eventLog.slice(0, 49)]
      };
    });
  }, []);

  const emergencyStop = useCallback(() => {
    setState(prev => {
      const logEntry = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        severity: "CRITICAL",
        message: "EMERGENCY E-STOP TRIGGERED: All pumps tripped."
      };
      return {
        ...prev,
        pumpIn1: false,
        pumpIn2: false,
        pumpOut1: false,
        pumpOut2: false,
        pumpOut3: false,
        controlMode: "MANUAL",
        eventLog: [logEntry, ...prev.eventLog.slice(0, 49)]
      };
    });
  }, []);

  const resetSimulation = useCallback(() => {
    setState({
      ...INITIAL_SCADA_STATE,
      eventLog: [
        { id: Date.now(), time: new Date().toLocaleTimeString(), severity: "INFO", message: "SCADA Simulator reset to nominal WWTP defaults." }
      ]
    });
  }, []);

  return {
    state,
    toggleSimulation,
    setControlMode,
    togglePumpIn,
    togglePumpOut,
    setScreenAuto,
    triggerStormSurge,
    triggerPollutionSpike,
    simulatePumpFailure,
    emergencyStop,
    resetSimulation
  };
}
