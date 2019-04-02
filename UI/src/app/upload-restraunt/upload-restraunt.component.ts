import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RestrauntDataService } from '../restraunt-data.service';
// import { FileUtil } from './file.util';
// import { Constants } from './test.constants';

@Component({
  selector: 'app-upload-restraunt',
  templateUrl: './upload-restraunt.component.html',
  styleUrls: ['./upload-restraunt.component.css']
})
export class UploadRestrauntComponent implements OnInit {
  @ViewChild('fileImportInput')
  fileImportInput: any;
  tokenDelimeter = ',';
  isHeaderPresentFlag = true;
  validateHeaderAndRecordLengthFlag = false;
  valildateFileExtenstionFlag = false;
  isValid = false;
  csvJSONArray = [];
  csvRecords = [];
  constructor(private restrauntDataService: RestrauntDataService) { }

  ngOnInit() {
  }
  fileChangeListener($event): void {
    const text = [];
    const files = $event.srcElement.files;

    if (this.validateHeaderAndRecordLengthFlag) {
      if (!this.isCSVFile(files[0])) {
        alert('Please import valid .csv file.');
        this.fileReset();
      }
    }

    const input = $event.target;
    const reader = new FileReader();
    reader.readAsText(input.files[0]);

    reader.onload = (data) => {
      const csvData = reader.result;
      const csvRecordsArray = (csvData as string).split(/\r\n|\n/);

      let headerLength = -1;
      if (this.isHeaderPresentFlag) {
        const headersRow = this.getHeaderArray(csvRecordsArray, this.tokenDelimeter);
        headerLength = headersRow.length;
        this.isHeaderPresentFlag = false;
      }

      this.csvRecords = this.getDataRecordsArrayFromCSVFile(csvRecordsArray,
        headerLength, this.validateHeaderAndRecordLengthFlag, this.tokenDelimeter);
      console.log(this.csvRecords);
      this.csvJSONArray = this.createJSONArray(this.csvRecords, headerLength);
      if (this.csvRecords == null) {
        this.fileReset();
      }
    };

    reader.onerror = () => {
      alert('Unable to read ' + input.files[0]);
    };
  }

  fileReset() {
    this.fileImportInput.nativeElement.value = '';
    this.csvRecords = [];
  }
  isCSVFile(file) {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvRecordsArr, tokenDelimeter) {
    const headers = csvRecordsArr[0].split(tokenDelimeter);
    const headerArray = [];
    for (const header of headers) {
      headerArray.push(header);
    }
    return headerArray;
  }

  validateHeaders(origHeaders, fileHeaaders) {
    if (origHeaders.length !== fileHeaaders.length) {
      return false;
    }

    let fileHeaderMatchFlag = true;
    for (let j = 0; j < origHeaders.length; j++) {
      if (origHeaders[j] !== fileHeaaders[j]) {
        fileHeaderMatchFlag = false;
        break;
      }
    }
    return fileHeaderMatchFlag;
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray, headerLength, validateHeaderAndRecordLengthFlag, tokenDelimeter) {
    const dataArr = [];

    for (let i = 0; i < csvRecordsArray.length; i++) {
      const data = csvRecordsArray[i].split(tokenDelimeter);

      if (validateHeaderAndRecordLengthFlag && data.length !== headerLength) {
        if (data === '') {
          alert('Extra blank line is present at line number ' + i + ', please remove it.');
          this.isValid = false;
          return null;
        } else {
          alert('error');
          this.isValid = false;
          return null;
        }
      }

      const col = [];
      for (const val of data) {
        col.push(val);
      }
      dataArr.push(col);
    }
    this.isValid = true;
    return dataArr;
  }
  createJSONArray(csvRecords, headerLength) {
    const jsonArray = [];
    for (let i = 1; i < csvRecords.length; i++) {
      const obj = {};
      for (let j = 0; j < headerLength; j++) {
        if (j === 0 && csvRecords[i][j] === '') {
          break;
        }
        obj[this.format(csvRecords[0][j])] = csvRecords[i][j];
      }
      if (Object.entries(obj).length === 0 && obj.constructor === Object) {
        continue;
      }
      jsonArray.push(obj);
    }
    console.log(jsonArray);
    return jsonArray;
  }
  loadRestraunts() {
    this.restrauntDataService.uploadRestraunts(this.csvJSONArray).subscribe(data => {
      alert('upload succesfully. Duplicate Restraunts are not inserted');
    }, error => {
      if (error.status === 200) {
        alert('upload succesfully. Duplicate Restraunts are not inserted');
      } else {
        alert('Failed uploading with status : ' + error.status);
      }
    });
  }
  format(text) {
    if (text) {
      text = text.trim();
      text = text.replace(/\s/g, '_');
      return text;
    }

  }
}
