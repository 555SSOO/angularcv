import {CvItem} from '../models/cv-item.model';

export class ProjectsItems {

  public static get CV_PROJECTS_ITEM_1(): CvItem {
    return {
      id: 1,
      headline: 'Café Society',
      description: 'Creating a new and innovative coffee shop management system. ' +
        'This system was composed of a server type desktop application written in Java,' +
        ' a website and an Android application for customer and waiter access.' +
        ' The main design point was that customers could order their drinks' +
        ' or food without having to hail the waiting staff.',
      imageURI: 'assets/img/CafeSociety.png'
    };
  }
  public static get CV_PROJECTS_ITEM_2(): CvItem {
    return {
      id: 2,
      headline: 'Pasman',
      description: 'Creating a password manager. Creation consisted of making a desktop application ' +
        'written in C++ and an Android application. The key point was creating a safe and encrypted' +
        ' system. The encryption follows AES256 specifications and was handled without using any ' +
        'third party libraries. It was written from scratch in C',
      imageURI: 'assets/img/PasMan.png'
    };
  }
  public static get CV_PROJECTS_ITEMS(): Array<CvItem> {
    return [this.CV_PROJECTS_ITEM_1, this.CV_PROJECTS_ITEM_2];
  }

}
