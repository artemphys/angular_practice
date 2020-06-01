import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-title-input',
  templateUrl: './title-input.component.html',
  styleUrls: ['./title-input.component.scss'],
})
export class TitleInputComponent implements OnInit {
  public titleFormGroup;
  constructor(public controlContainer: ControlContainer) {}

  ngOnInit() {
    this.titleFormGroup = this.controlContainer.control;
  }
}
