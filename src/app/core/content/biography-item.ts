import {BioItem} from '../models/bio-item.model';

export class BiographyItem {

  public static get BIOGRAPHY_ITEM(): BioItem {
    return {
      id: 1,
      pictureURI: 'assets/img/ProfilePicture.png',
      bio: 'This is Srđan Obradović\'s website, and this is a bit of copy about him. He is a ' +
        'fullstack software engineer at msgNetconomy, and has a passion for all software related topics.' +
        'That\'s not giving you a lot of detail, is it? So read more by clicking on tabs at the top of the page.'
    };
  }
}
