import {Component, OnInit} from '@angular/core';
import {InferenceService} from '../../core/services/inference.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-video-clone',
  templateUrl: './video-clone.component.html',
  styleUrls: ['./video-clone.component.scss']
})
export class VideoCloneComponent implements OnInit {

  selectedFile: ImageSnippet;

  constructor(private inferenceService: InferenceService) {}

  ngOnInit() {
  }

  runInference(image){
    const imageFile: File = image.files[0]
    const reader = new FileReader()
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, imageFile);
      this.inferenceService.runInference(this.selectedFile.file).subscribe(response => {
        console.log(response)
      })
    });
    reader.readAsDataURL(imageFile);

  }

}
