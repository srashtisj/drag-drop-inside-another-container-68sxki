import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
})
export class CdkDragDropConnectedSortingExample {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up'];
  todoList = ['root', 'child1', 'child2'];
  drop(event: CdkDragDrop<string[]>) {
    if (
      event.previousContainer.id === 'root' &&
      event.previousContainer !== event.container
    ) {
      console.log(event.previousContainer.id);
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
