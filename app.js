new Vue({
      el:"#main",
      data : {
        newTodo : '',
        idForTodo:3,
        filter : 'all',
        todos : [
          { 'id' : 1,
            'title' : 'Faire le ménage',
            'completed' : false
          },

          { 'id' : 2,
            'title' : 'Faire à manger',
            'completed' : false
          }
        ]
      },
      methods : {
        addTodo(){
          if(this.newTodo.trim().length > 0){
            this.todos.push({
              id: this.idForTodo,
              title: this.newTodo,
              completed: false
            });
            this.newTodo = '';
            this.idForTodo++;
          }
        },
        removeTodo(index){
          this.todos.splice(index,1);
        },

        checkAllTodo(){
          this.todos.forEach((todo) => todo.completed = event.target.checked);
        },

        clearCompleted(){
          this.todos = this.todos.filter(todo => ! todo.completed);
        }

      }, computed : {
        remaining(){
          return this.todos.filter(todo => !todo.completed).length;
        },

        anyRemaining(){
          return this.remaining != 0;
        },

        showCompletedButton(){
          return this.todos.filter(todo => todo.completed).length > 0;
        },

        todosFiltered(){
          if(this.filter == 'all'){
            return this.todos
          } else if (this.filter == 'active'){
            return this.todos.filter(todo => !todo.completed);
          } else if(this.filter == 'completed'){
             return this.todos.filter(todo => todo.completed);
          }

          return this.todos
        }

      }
  });