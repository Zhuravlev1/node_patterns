import { Iphone7 } from './Iphone7'
import { LightingToMicroUSB } from './Adapter'

const iphone = new Iphone7();
const chargeAdapter = new LightingToMicroUSB(iphone);

chargeAdapter.useMicroUSB();
