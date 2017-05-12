import { Component, OnInit, Input, Output, ElementRef, AfterViewInit, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'nk-tree',
  templateUrl: 'app/component/tree.component/tree.component.html'
})
export class TreeComponent implements OnInit {

  @Input()
  private treeData: any;

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

  @Input()
  private newFolder: boolean = false;

  @Output()
  private valueChange: EventEmitter<any> = new EventEmitter();

  @Output()
  private itemClick: EventEmitter<any> = new EventEmitter();

  // @Output()
  // private addFolderItem: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.processTreeData(this.treeData || []);
    // this.addFolderItem.emit(this.treeData);
  }

  private processTreeData(arr: Array<any>) {
    arr.forEach(item => {
      item.hasChildren = item.children && item.children.length > 0
      if (item.hasChildren) {
        this.processTreeData(item.children);
      }
    });
  }

  // private addFolderItem(){
  //   if(this.newFolder){
  //     this.treeData.push(
  //       { text: '<input type="text" value="新建文件夹">', value: 4 }
  //       );
  //   }
  // }

  ngOnChanges(changesObj:any) {
    if (changesObj.treeData) {
      this.processTreeData(this.treeData || []);
    }
    if (changesObj.value) {
      this.setItemState();
    }
    //  this.addFolderItem();
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
    // if (item.hasChildren) {
      item.open = !item.open;
    // } else {
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
    // }
    this.itemClick.emit(item);
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