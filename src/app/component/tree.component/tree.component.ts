import { Component, OnInit, Input, Output, ElementRef, AfterViewInit, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'nk-tree',
  templateUrl: 'app/component/tree.component/tree.component.html'
})
export class TreeComponent implements OnInit {

  private treeData = [
    {
      text: '来自手机', value: 1, icon: 'fa fa-user', children: [
        { text: 'Level2 - Item1', value: 11, icon: 'fa fa-lock' },
        { text: 'Level2 - Item2', value: 12 },
        {
          text: '技术', value: 13, children: [
            { text: 'Level3 - Item1', value: 131 },
            { text: '前端', value: 132, children: [
               { text: 'Level4 - Item1', value: 1321 },
            ] },
          ]
        }
      ]
    },
    { text: 'Text2 - Level1', value: 2 },
    { text: 'Text3 - Level1', value: 3 }
  ];

  @Input()
  private treeOpen: boolean = false;

  @Input()
  private showIcon: boolean = false;

  @Input()
  private showCheckbox: boolean = true;

  @Input()
  private single: boolean = false;

  @Input()
  private value: any;

  @Output()
  private valueChange: EventEmitter<any> = new EventEmitter();

  @Output()
  private itemClick: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.processTreeData(this.treeData || []);
  }

  private processTreeData(arr: Array<any>) {
    arr.forEach(item => {
      item.hasChildren = item.children && item.children.length > 0
      if (item.hasChildren) {
        this.processTreeData(item.children);
      }
    });
  }

  ngOnChanges(changesObj:any) {
    if (changesObj.treeData) {
      this.processTreeData(this.treeData || []);
    }
    if (changesObj.value) {
      this.setItemState();
    }
  }

  private setItemState() {
    let valueArr = Array.isArray(this.value) ? this.value : [this.value];
    this.selectItems(this.treeData, valueArr);
  }

  private selectItems(itemArr: Array<any>, valueArr: Array<any>) {
    itemArr.forEach(item => {
      if (item.hasChildren) {
        this.selectItems(item.children, valueArr);
      } else {
        if (valueArr.indexOf(item.value) >= 0) {
          item.selected = true;
        }
      }
    });
  }
  private stopPrapation($event:any){
    $event && $event.stopPropagation();
  }

  private onItemClick(item:any) {
  //   $event && $event.stopPropagation();
  //   item = item.item;
  //   $event = item.$event;
  //  $event && $event.stopPropagation();
    if (item.hasChildren) {
      item.open = !item.open;
      console.log('aaaaaaaaaaa');
    } else {
      let selected = !item.selected;
      if (this.single) {
        this.cancelAllItemSelect(this.treeData);
      }
      item.selected = selected;
      if (this.single) {
        this.valueChange.emit(selected ? item.value : null);
      } else {
        if (!Array.isArray(this.value)) {
          this.value = [this.value];
        }
        // selected ? this.value.push(item.value) : this.negUtil.remove(this.value, item.value);
        this.valueChange.emit(this.value);
      }
    }
    this.itemClick.emit(item);
        // console.log($event);
    console.log(item);
  }


  private cancelAllItemSelect(itemArr: Array<any>) {
    itemArr.forEach(item => {
      item.selected = false;
      if (item.hasChildren) {
        this.cancelAllItemSelect(item.children);
      }
    });
  }
}