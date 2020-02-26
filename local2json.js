class local2json{
    /*  create By: Magdiel López Morales <lpzcode.net>
        versión: 1.0.0
    */
    constructor(name){
        this.name   = name;
        this.tables = [];
        if(localStorage.getItem(name)){
            this.tables = JSON.parse(localStorage.getItem(name));
        }
    }
    // table control functions
    Save(){
        localStorage.setItem(this.name,JSON.stringify(this.tables));
    }
    NewTable(tableName){
        this.tables.push({name:tableName,data:[]});
        this.Save();
        return true;
    }
    GetTable(tableName){
        let tableOut = [];
        for (const table in this.tables) {
            if (table.name == tableName) {
                tableOut = table;
                break;
            }
        }
        return tableOut;
    }
    UpdateTable(tableName,data){
        const tableRegisters = this.tables.length;
        for (let i=0;i < tableRegisters;i++) {
            if (this.tables[i].name == tableName) {
                this.tables[i].data = data;
                this.Save();
                return true;
            }
        }
        return false;
    }
    DeteleTable(tableName){
        const tableRegisters = this.tables.length;
        for (let i=0;i < tableRegisters;i++) {
            if (this.tables[i].name == tableName) {
                tables.splice(i, 1);
                this.Save();
                return true;
            }
        }
        return false;
    }
    // items control functions
    InsertItem(tableName,item){
        const tableRegisters = this.tables.length;
        for (let i=0;i < tableRegisters;i++) {
            if (this.tables[i].name == tableName) {
                this.tables[i].data.push(item);
                this.Save();
                return true;
            }
        }
        return false;
    }
    GetItem(tableName,searchParameter){
        let result     = [];
        const val1     = searchParameter.split(' ',10)[0];
        const val2     = searchParameter.split(' ',10)[2];
        const question = searchParameter.split(' ',10)[1];
        for (const table in this.tables) {
            if (table.name == tableName) {
                let data = table.data;
                let dataSize = data.length;
                for(let i=0;i<dataSize;i++){
                    let string = JSON.stringify(data[i]);
                    string = string.replace('{','');
                    string = string.replace('}','');
                    string = string.replace('"','');
                    let cad = string.split(',',5000);
                    for (let key=0;key < cad.length;key++) {
                        if(val1 == key.split(':')[0]){
                            switch (question) {
                                case '==':
                                    if(val2 == key.split(':')[1]){
                                        result.push(data[i]);
                                        key = cad.length;
                                    }
                                    break;
                                case '<':
                                    if(val2 < key.split(':')[1]){
                                        result.push(data[i]);
                                        key = cad.length;
                                    }
                                    break;
                                case '<=':
                                    if(val2 <= key.split(':')[1]){
                                        result.push(data[i]);
                                        key = cad.length;
                                    }
                                    break;
                                case '>':
                                    if(val2 > key.split(':')[1]){
                                        result.push(data[i]);
                                        key = cad.length;
                                    }
                                    break;
                                case '>=':
                                    if(val2 >= key.split(':')[1]){
                                        result.push(data[i]);
                                        key = cad.length;
                                    }
                                    break;
                                case '!=':
                                    if(val2 != key.split(':')[1]){
                                        result.push(data[i]);
                                        key = cad.length;
                                    }
                                    break;
                            }
                        }
                    }
                }
            }
            break;
        }
        return result;
    }
    DeleteItem(tableName,searchParameter){
        const val1     = searchParameter.split(' ',10)[0];
        const val2     = searchParameter.split(' ',10)[2];
        const question = searchParameter.split(' ',10)[1];
        for (let table=0;table < this.tables.length;table++) {
            if (this.tables[table].name == tableName) {
                let data = this.tables[table].data;
                let dataSize = data.length;
                for(let i=0;i<dataSize;i++){
                    let string = JSON.stringify(data[i]);
                    string = string.replace('{','');
                    string = string.replace('}','');
                    string = string.replace('"','');
                    let cad = string.split(',',5000);
                    for (let key=0;key < cad.length;key++) {
                        if(val1 == key.split(':')[0]){
                            switch (question) {
                                case '==':
                                    if(val2 == key.split(':')[1]){
                                        this.tables.data.splice(table,1);
                                        this.Save();
                                        return true;
                                    }
                                    break;
                                case '<':
                                    if(val2 < key.split(':')[1]){
                                        this.tables.data.splice(table,1);
                                        this.Save();
                                        return true;
                                    }
                                    break;
                                case '<=':
                                    if(val2 <= key.split(':')[1]){
                                        this.tables.data.splice(table,1);
                                        this.Save();
                                        return true;
                                    }
                                    break;
                                case '>':
                                    if(val2 > key.split(':')[1]){
                                        this.tables.data.splice(table,1);
                                        kthis.Save();
                                        return true;
                                    }
                                    break;
                                case '>=':
                                    if(val2 >= key.split(':')[1]){
                                        this.tables.data.splice(table,1);
                                        this.Save();
                                        return true;
                                    }
                                    break;
                                case '!=':
                                    if(val2 != key.split(':')[1]){
                                        this.tables.data.splice(table,1);
                                        this.Save();
                                        return true;
                                    }
                                    break;
                            }
                        }
                    }
                }
            }
            break;
        }
        return false;
    }
    UpdateItem(tableName,searchParameter,itemValue){
        const val1     = searchParameter.split(' ',10)[0];
        const val2     = searchParameter.split(' ',10)[2];
        const question = searchParameter.split(' ',10)[1];
        for (let table=0;table < this.tables.length;table++) {
            if (this.tables[table].name == tableName) {
                let data = this.tables[table].data;
                let dataSize = data.length;
                for(let i=0;i<dataSize;i++){
                    let string = JSON.stringify(data[i]);
                    string = string.replace('{','');
                    string = string.replace('}','');
                    string = string.replace('"','');
                    let cad = string.split(',',5000);
                    for (let key=0;key < cad.length;key++) {
                        if(val1 == key.split(':')[0]){
                            switch (question) {
                                case '==':
                                    if(val2 == key.split(':')[1]){
                                        this.tables.data[table] = itemValue;
                                        this.Save();
                                        return true;
                                    }
                                    break;
                                case '<':
                                    if(val2 < key.split(':')[1]){
                                        this.tables.data[table] = itemValue;
                                        this.Save();
                                        return true;
                                    }
                                    break;
                                case '<=':
                                    if(val2 <= key.split(':')[1]){
                                        this.tables.data[table] = itemValue;
                                        this.Save();
                                        return true;
                                    }
                                    break;
                                case '>':
                                    if(val2 > key.split(':')[1]){
                                        this.tables.data[table] = itemValue;
                                        kthis.Save();
                                        return true;
                                    }
                                    break;
                                case '>=':
                                    if(val2 >= key.split(':')[1]){
                                        this.tables.data[table] = itemValue;
                                        this.Save();
                                        return true;
                                    }
                                    break;
                                case '!=':
                                    if(val2 != key.split(':')[1]){
                                        this.tables.data[table] = itemValue;
                                        this.Save();
                                        return true;
                                    }
                                    break;
                            }
                        }
                    }
                }
            }
            break;
        }
        return false;
    }
}