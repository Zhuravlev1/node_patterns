import { Android } from './Samsung'
import { Iphone } from './Iphone7'

export class LightingToMicroUSB implements Android{
  public iphoneDevice;

  constructor(iphone: Iphone) {
    this.iphoneDevice = iphone;
  }

  useMicroUSB () {
    console.log('Converting micro usb to lighting port...');

    this.iphoneDevice.useLighting();
  }
}