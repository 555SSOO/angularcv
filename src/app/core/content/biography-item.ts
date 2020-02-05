import {BioItem} from '../models/bio-item.model';

export class BiographyItem {

  public static get BIOGRAPHY_ITEM(): BioItem {
    return {
      id: 1,
      pictureURI: 'assets/img/ProfilePicture.png',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        'Pellentesque in mollis massa. Curabitur dignissim vitae tortor id efficitur.' +
        'Aliquam blandit congue auctor. Morbi tincidunt odio sit amet enim feugiat,' +
        'in sagittis mauris pellentesque. Fusce aliquet enim ac massa rutrum,' +
        'eu vestibulum velit venenatis.'
    };
  }
}
