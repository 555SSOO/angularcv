import {CvItem} from '../models/cv-item.model';

export class ExperienceItems {

  public static get CV_EXPERIENCE_ITEM_1(): CvItem {
    return {
      id: 1,
      headline: 'Junior software engineer',
      description: 'Bachelor degree in Electrical engineering and computing 2016 - present'};
  }
  public static get CV_EXPERIENCE_ITEM_2(): CvItem {
    return {
      id: 2,
      headline: 'Software engineering intern',
      description: 'Mathematical and natural science'};
  }
  public static get CV_EXPERIENCE_ITEM_3(): CvItem {
    return {
      id: 3,
      headline: 'Network engineering intern',
      description: 'Mathematical and natural science'};
  }
  public static get CV_EXPERIENCE_ITEM_4(): CvItem {
    return {
      id: 4,
      headline: 'Lead software developer at startup',
      description: 'Mathematical and natural science'};
  }
  public static get CV_EXPERIENCE_ITEMS(): Array<CvItem> {
    return [this.CV_EXPERIENCE_ITEM_1, this.CV_EXPERIENCE_ITEM_2, this.CV_EXPERIENCE_ITEM_3, this.CV_EXPERIENCE_ITEM_4];
  }

}
