import { Injectable } from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from '@nebular/theme';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  public static REMOTE_ADDRESS = environment.REMOTE_ADDRESS;

  public static REMOTE_BS_CORE_URL = UtilsService.REMOTE_ADDRESS + 'bs-core';
  public static REMOTE_BS_EVALUATION_URL =
    UtilsService.REMOTE_ADDRESS + 'bs-evaluation-management';
  public static API_FILE = UtilsService.REMOTE_BS_CORE_URL + '/api/file';
  public static API_AUTH = UtilsService.REMOTE_ADDRESS + 'api/auth/signin';

  constructor(
    private toastrService: NbToastrService,
    private httpClient: HttpClient,
    private datePipe: DatePipe,
  ) {}

  public showToast(type: NbComponentStatus, title: string, body: string) {
    if (type === 'danger') {
      Swal.fire({
        icon: 'error',
        title: title,
        text: body,
      });
    } else {
      const config = {
        status: type,
        destroyByClick: true,
        duration: 4000,
        hasIcon: true,
        position: NbGlobalPhysicalPosition.TOP_RIGHT,
        preventDuplicates: false,
      };
      const titleContent = title ? `${title}` : '';
      this.toastrService.show(body, `${titleContent}`, config);
    }
  }

  now(format: string): string {
    return this.datePipe.transform(
      new Date().toLocaleDateString('en-US', { timeZone: 'Africa/Tunis' }) +
        ' ' +
        new Date().toLocaleTimeString('en-US', { timeZone: 'Africa/Tunis' }),
      format,
      'Africa/Tunis',
    );
  }

  getDate(date: any, format: string): string {
    return this.datePipe.transform(date, format, 'Africa/Tunis');
  }

  convertAmountToString(initialAmount: string): string {
    let amount = '';
    if (initialAmount.includes('.')) {
      const array: any[] = initialAmount.split('.');
      if (array[1].length === 1) {
        array[1] = '.' + array[1] + '00';
        return array[0] + array[1];
      } else if (array[1].length === 2) {
        array[1] = '.' + array[1] + '0';
        return array[0] + array[1];
      }
      return array[0] + '.' + array[1];
    } else {
      amount = initialAmount + '.000';
      return amount;
    }
  }

  convertIndexToString(index: any): string {
    let localIndex = index.toString();
    if (localIndex.length === 1) localIndex = '0' + localIndex;
    return localIndex;
  }
}
