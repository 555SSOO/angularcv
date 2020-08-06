import {BioItem} from '../models/bio-item.model';

export class BiographyItem {

  public static get BIOGRAPHY_ITEM(): BioItem {
    return {
      id: 1,
      pictureURI: 'assets/img/ProfilePicture.png',
      bio: 'Hello, I\'m Srđan Obradović'
    };
  }
}
