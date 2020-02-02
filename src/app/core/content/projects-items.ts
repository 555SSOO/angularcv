import {CvItem} from '../models/cv-item.model';

export class ProjectsItems {

  public static get CV_PROJECTS_ITEM_1(): CvItem {
    return {
      id: 1,
      headline: 'Cafe Society',
      description: 'Bachelor degree in Electrical engineering and computing 2016 - present'};
  }
  public static get CV_PROJECTS_ITEM_2(): CvItem {
    return {
      id: 2,
      headline: 'Pasman',
      description: 'Mathematical and natural science'};
  }
  public static get CV_PROJECTS_ITEMS(): Array<CvItem> {
    return [this.CV_PROJECTS_ITEM_1, this.CV_PROJECTS_ITEM_2];
  }

}
