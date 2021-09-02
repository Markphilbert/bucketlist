var app = new function(){
    this.el = document.getElementById('tasks');
    this.tasks = []

    this.FetchAll = function(){
        var data='';
        console.log(tasks)

        if(this.tasks.length>0){
            for(i=0; i<this.tasks.length; i++){
                data+='<tr>';
                data+='<td>'+this.tasks[i]+'</td>';
                data+='<td><button onclick="app.Edit('+i+')" class="editBtn">Edit</button></td> ';
                data+='<td><button onclick="app.Delete('+i+')" class="deleteBtn">Delete</button></td> ';
                data+='</tr>';
            }
        }
        this.Count(this.tasks.length);
        return this.el.innerHTML = data;
    };

    this.Add = function(){
        el = document.getElementById('add-list');
        var task = el.value;
        if(task){
            this.tasks.push(task.trim());
            this.el.value=''
            this.FetchAll();
            document.getElementById('form').reset();
        }
    };

    this.Edit = function(item){
        el = document.getElementById('edit-list');
        this.el.value = this.tasks[item]
        document.getElementById('edit-box').style.display = 'block';
        self=this;

        document.getElementById('save-edit').onsubmit = function(){
            var task = el.value;
            if(task){
                self.tasks.splice(item, 1, task.trim());
                self.FetchAll();
                CloseInput();
            }
        }
    };

    this.Delete = function (item){
        this.tasks.splice(item, 1)
        this.FetchAll();
    };

    this.Count = function(data){
        var el = document.getElementById('counter');
        var name = 'Things Left to Accomplish';
        if(data){
            if(data == 1){
                name = 'Thing Left to Accomplish';
            }
            el.innerHTML = data+' '+name;
        }
        else{
            el.innerHTML = "You need to add some new stuff on here..."
        }
    };
}

app.FetchAll();

CloseInput = () => {
    document.getElementById('edit-box').style.display = 'none'
}