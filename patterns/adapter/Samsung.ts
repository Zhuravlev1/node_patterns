export interface Android {
  useMicroUSB()
}

export class Samsung implements Android {
  useMicroUSB () {
    console.log('Using micro usb...')
  }
}