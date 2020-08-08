import {BioItem} from '../models/bio-item.model';

export class BiographyItem {

  public static get BIOGRAPHY_ITEM(): BioItem {
    return {
      id: 1,
      bigPictureURI: 'assets/img/homepage/big.jpg',
      smallPictureURI: 'assets/img/homepage/small.jpg',
      bio: 'Hello, I\'m Srđan Obradović'
    };
  }
}
