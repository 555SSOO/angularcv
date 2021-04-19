import { Injectable } from '@angular/core';

import { CoreModule } from '../core.module';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: CoreModule
})
export class InferenceService {

  constructor(private apiService: ApiService) {}

  runInference(image): Observable<any> {
    const formData = new FormData()
    formData.append('file', image)
    return this.apiService.post('predict', formData);
  }

}
