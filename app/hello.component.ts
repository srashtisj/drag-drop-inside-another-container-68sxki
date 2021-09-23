import { Component, Input, ViewChild, TemplateRef, ViewContainerRef ,ViewEncapsulation, ElementRef} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem,DragRef } from '@angular/cdk/drag-drop';
import {MatExpansionPanel} from '@angular/material';

@Component({
  selector: 'hello',
  template: `
          <div #dvDragElement >
        This is inside a componenet.
         <div id='child1'
    cdkDropList
    #comp_todoList="cdkDropList"
    [cdkDropListData]="componenet_todo"
    [cdkDropListConnectedTo]="todoList"
    class="example-list"
    (cdkDropListDropped)="drop($event)">
    <div class="example-box" *ngFor="let item of componenet_todo" cdkDrag>{{item}}</div>
  </div>
</div>

  `,
  styles: ['cdk-drag-drop-connected-sorting-example.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HelloComponent {
  @Input() todoList: Array<string>;
componenet_todo = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
   drop(event: CdkDragDrop<string[]>) {
     console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
