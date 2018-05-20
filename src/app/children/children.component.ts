import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';

@Component({
  templateUrl: './children.component.html'
})
export class ChildrenComponent  { }
