import {CvItem} from '../models/cv-item.model';

export class ExperienceItems {

  public static get CV_EXPERIENCE_ITEM_1(): CvItem {
    return {
      id: 1,
      headline: 'Junior software engineer',
      description: 'Working with SAP Commerce Cloud at one of the SAP Commerce Cloud platinum partners - msgNETCONOMY',
      subtitleLine1: '12/2018 - present',
      linkUrl: 'https://www.msgnetconomy.net/',
      linkText: 'VISIT msgNETCONOMY WEBSITE',
      imageURI: 'assets/img/msgNC.png'
    };
  }
  public static get CV_EXPERIENCE_ITEM_2(): CvItem {
    return {
      id: 2,
      headline: 'Software engineering intern',
      description: 'Internship at msgNETCONOMY',
      subtitleLine1: '08/2018 - 12/2018',
      linkUrl: 'https://www.msgnetconomy.net/',
      linkText: 'VISIT msgNETCONOMY WEBSITE',
      imageURI: 'assets/img/msgNCInternship.png'
      };
  }
  public static get CV_EXPERIENCE_ITEM_3(): CvItem {
    return {
      id: 3,
      headline: 'Network engineering intern',
      description: 'Internship at a network company working on maintaining Cisco core networking devices',
      subtitleLine1: '04/2018 - 08/2018',
      linkUrl: 'https://netcast.rs/en/',
      linkText: 'VISIT NetCast WEBSITE',
      imageURI: 'assets/img/NetCast.png'
    };
  }

  public static get CV_EXPERIENCE_ITEMS(): Array<CvItem> {
    return [this.CV_EXPERIENCE_ITEM_1, this.CV_EXPERIENCE_ITEM_2, this.CV_EXPERIENCE_ITEM_3];
  }

}
