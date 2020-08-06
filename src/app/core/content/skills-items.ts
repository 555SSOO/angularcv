import {CvItem} from '../models/cv-item.model';

export class SkillsItems {

  public static get CV_SKILLS_ITEM_1(): CvItem {
    return {
      id: 1,
      headline: 'Network design',
      description: 'Designing networks based on Cisco devices',
      imageURI: 'assets/img/icons/NetworkDesignIcon.png'
    };
  }
  public static get CV_SKILLS_ITEM_2(): CvItem {
    return {
      id: 2,
      headline: 'Java programming',
      description: 'Creating server and computer applications',
      imageURI: 'assets/img/icons/JavaIcon.png'
    };
  }
  public static get CV_SKILLS_ITEM_3(): CvItem {
    return {
      id: 3,
      headline: 'Encryption algorithms',
      description: 'Implementation of AES, DES and others',
      imageURI: 'assets/img/icons/EncryptionIcon.png'
    };
  }
  public static get CV_SKILLS_ITEM_4(): CvItem {
    return {
      id: 4,
      headline: 'Database design and optimization',
      description: 'SQL, MySQL, SQLite, Oracle and others',
      imageURI: 'assets/img/icons/DatabaseIcon.png'
    };
  }
  public static get CV_SKILLS_ITEM_5(): CvItem {
    return {
      id: 5,
      headline: 'Linux systems',
      description: 'Usage of many different distributions',
      imageURI: 'assets/img/icons/LinuxIcon.png'
    };
  }
  public static get CV_SKILLS_ITEM_6(): CvItem {
    return {
      id: 6,
      headline: 'SAP Commerce Cloud',
      description: 'Creating e-commerce websites',
      imageURI: 'assets/img/icons/HybrisIcon.png'
    };
  }
  public static get CV_SKILLS_ITEM_7(): CvItem {
    return {
      id: 7,
      headline: 'SAP Commerce Cloud',
      description: 'Creating e-commerce websites',
      imageURI: 'assets/img/icons/HybrisIcon.png'
    };
  }
  public static get CV_SKILLS_ITEM_8(): CvItem {
    return {
      id: 8,
      headline: 'SAP Commerce Cloud',
      description: 'Creating e-commerce websites',
      imageURI: 'assets/img/icons/HybrisIcon.png'
    };
  }

  public static get CV_SKILLS_ITEMS(): Array<CvItem> {
    return [this.CV_SKILLS_ITEM_1,
            this.CV_SKILLS_ITEM_2,
            this.CV_SKILLS_ITEM_3,
            this.CV_SKILLS_ITEM_4,
            this.CV_SKILLS_ITEM_5,
            this.CV_SKILLS_ITEM_6,
            this.CV_SKILLS_ITEM_7,
            this.CV_SKILLS_ITEM_8
    ];
  }

}
