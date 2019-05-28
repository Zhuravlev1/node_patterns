export interface Iphone {
  useLighting();
}

export class Iphone7 implements Iphone {
  useLighting() {
    console.log('Using Lighting port...')
  }
}