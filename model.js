class Model {
  load(id){
    global.db.query(`SELECT * FROM ${this.constructor.table()} WHERE ${this.pk}=${id}`, function(error, result){
      if(error){
        console.log(error);
      }
      console.log(result);
    });
  }

  loadAll(){
    global.db.query(`SELECT * FROM ${this.constructor.table()}`, function(error, result){
      if(error){
        console.log(error);
      }
      console.log(result);
    });
  }

  save(fields){
    let fieldsData = "";
    let fieldsKeys = "";
    let fieldsValues = "";
    let iterator = Object.entries(fields);
    for(let value of iterator){
       fieldsData += `${value[0]}='${value[1]}',`;
       fieldsKeys += `${value[0]},`;
       fieldsValues += `'${value[1]}',`;
    }
    fieldsData = fieldsData.substring(0, fieldsData.length - 1);
    fieldsKeys = fieldsKeys.substring(0, fieldsKeys.length - 1);
    fieldsValues = fieldsValues.substring(0, fieldsValues.length - 1);
    if(fields[`${this.pk}`]){
      global.db.query(`UPDATE ${this.constructor.table()} SET ${fieldsData} WHERE ${this.pk}=${fields[this.pk]}`);
    }else{
      global.db.query(`INSERT INTO ${this.constructor.table()}(${fieldsKeys}) VALUES(${fieldsValues})`);
    }
  }
}

module.exports = Model;
