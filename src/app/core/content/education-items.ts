import {CvItem} from '../models/cv-item.model';

export class EducationItems {

  public static get CV_EDUCATION_ITEM_1(): CvItem {
    return {
      id: 1,
      headline: 'The Faculty of Computer Science',
      description: 'Bachelor degree in Electrical engineering and computing 2016 - present',
      imageURI: 'assets/img/RacunarskiFakultet.png'};
  }
  public static get CV_EDUCATION_ITEM_2(): CvItem {
    return {
      id: 2,
      headline: 'VIII Belgrade gymnasium',
      description: 'Mathematical and natural science',
      imageURI: 'assets/img/OsmaBeogradskaGimnazija.jpeg'};
  }
  public static get CV_EDUCATION_ITEMS(): Array<CvItem> {
    return [this.CV_EDUCATION_ITEM_1, this.CV_EDUCATION_ITEM_2];
  }

}
