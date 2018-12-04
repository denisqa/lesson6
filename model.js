class Model {
  load(id){
    let table = this.constructor.table();
    global.db.query(`SELECT * FROM ${table} WHERE ${this.pk}=${id}`, function(error, result){
      if(error){
        console.log(error);
      }
      console.log(result);
    });
  }

}

module.exports = Model;
