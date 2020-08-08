import {CvItem} from '../models/cv-item.model';

export class SkillsItems {

  public static get CV_SKILLS_ITEM_1(): CvItem {
    return {
      id: 1,
      headline: 'Machine Learning',
      description: 'Machine learning experience working with TensorFlow',
      imageURI: 'assets/img/skills/machineLearning.png'
    };
  }
  public static get CV_SKILLS_ITEM_2(): CvItem {
    return {
      id: 2,
      headline: 'DevOps',
      description: 'Developed CI/CD pipelines for code deployment using Jenkins',
      imageURI: 'assets/img/skills/devops.png'
    };
  }
  public static get CV_SKILLS_ITEM_3(): CvItem {
    return {
      id: 3,
      headline: 'Backend programming',
      description: 'Programming in Java based backend systems like Spring',
      imageURI: 'assets/img/skills/backend.png'
    };
  }
  public static get CV_SKILLS_ITEM_4(): CvItem {
    return {
      id: 4,
      headline: 'Frontend programming',
      description: 'Frontend development experience in Angular, React, JSP/JSTL',
      imageURI: 'assets/img/skills/frontend.png'
    };
  }
  public static get CV_SKILLS_ITEM_5(): CvItem {
    return {
      id: 5,
      headline: 'SAP Commerce Cloud',
      description: 'Creating e-commerce websites in SAP Commerce Cloud',
      imageURI: 'assets/img/skills/SAPCC.png'
    };
  }
  public static get CV_SKILLS_ITEM_6(): CvItem {
    return {
      id: 6,
      headline: 'Network programming',
      description: 'Designing and setting up networks based on Cisco devices',
      imageURI: 'assets/img/skills/network.png'
    };
  }
  public static get CV_SKILLS_ITEM_7(): CvItem {
    return {
      id: 7,
      headline: 'Encryption algorithms',
      description: 'Implementation of encryption algorithms such as AES and DES',
      imageURI: 'assets/img/skills/encryption.png'
    };
  }
  public static get CV_SKILLS_ITEM_8(): CvItem {
    return {
      id: 8,
      headline: 'Git',
      description: 'Experience using software version control systems such as Git and BitBucket',
      imageURI: 'assets/img/skills/git.png'
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
