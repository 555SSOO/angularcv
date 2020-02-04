import {CvItem} from '../models/cv-item.model';

export class HobbiesItems {

  public static get CV_HOBBIES_ITEM_1(): CvItem {
    return {
      id: 1,
      headline: 'Running',
      description: 'Love for running, especially in nature',
      imageURI: 'assets/img/Running.png'
    };
  }
  public static get CV_HOBBIES_ITEM_2(): CvItem {
    return {
      id: 2,
      headline: 'Video games',
      description: 'Passionate about video games since childhood',
      imageURI: 'assets/img/VideoGames.png'
    };
  }
  public static get CV_HOBBIES_ITEMS(): Array<CvItem> {
    return [this.CV_HOBBIES_ITEM_1, this.CV_HOBBIES_ITEM_2];
  }

}
