import { Injectable } from '@angular/core';
import { Tip } from '../common/tip';
import { TIPS } from '../common/mock_tips';

@Injectable()
export class TipService{

    // 获取tip 列表
    getTips():Promise<Tip[]>{
        return Promise.resolve(TIPS);
    }


    // 根据id获取tip
    getTip(id: number): Promise<Tip> {
    return this.getTips()
               .then(tips => tips.find(tip => tip.id === id));
    }

    //获取id
    getId(id: number){
        let editId = id;
        return editId;
    }

    //新建一个空tip
    reNew(): Promise<Tip>{
        var tip = new Tip; 
        return Promise.resolve(tip);
    }

    //已完成或未完成功能
    clickCheckBox(id: number){
        let flag = TIPS[id-1].state;
        if(!flag){
            flag = true;
        }else{
            flag = false;
        }

        return TIPS[id-1].state = flag;
    }

    //删除功能
    deleteTip(id: number){
        return this.getTips()
               .then(del => {
                   if(id < TIPS.length){
                       for(let i = id; i < TIPS.length; i++){
                           TIPS[i].id = TIPS[i].id - 1;
                       }
                    }
                    TIPS.splice(id-1, 1);
                });
    }

    //新增tip功能（事件名为必填）
    setTip(name: string, expirationTime:string, description:string){
            let tip = new Tip;
            let notice = false;
            if(name == undefined||name == ''){
                notice = true;
            }else{
                let id = TIPS.length + 1;
                tip.id = id;
                tip.name = name;
                tip.expirationTime = expirationTime;
                tip.description = description;
                TIPS.push(tip);
            }
                return notice;                          
    }

    //编辑页面时不保存
    noSave(id: number, tip2: Tip){
        this.getTips(); 
        TIPS[id-1] = tip2;
        console.log(TIPS[id-1]);
    }

}
