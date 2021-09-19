<template>
  <div class="container">
    <div class="row">
      <h3>Vue-Resource</h3>
      <div class="form group">
        <input type="text" class="form-control" v-model="userName" />
        <button class=" btn btn-primary" @click="save">Kaydet</button>
        <button class=" btn btn-success" @click="get">Verileri Getir</button>
        <hr />
        <ul class="list-group">
          <li class="list-group-item" v-for="user in userList" :key="user">
            <span>{{ user.data.userName }}</span>
            <button class="btn btn-danger" @click="deleteUser(user.key)">Sil</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: null,
      userList: [],
      resource:{}
    };
  },
  methods: {
    save() {
      // this.$http.post("users.json", { userName: this.userName }).then((response) => {
      //   console.log(response);
     // });
    this.resource.saveAlt({},{userName:this.userName})
    // this.$resource("users.json").save({},{userName:this.userName})
    },
    get() {
      this.$resource("users.json")
        .get()
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (let key in data.userList) {
            // console.log(data[key])
            this.userList.push({
              key: key,
              data: data.userList[key],
            });
          }
        });

      //console.log(response.data);
    },
    deleteUser(userKey) {
      // this.$http.delete("users/"+userKey +".json").then(response=>{
      //   console.log(response)
      // })
      this.$resource.delete("users/"+userKey +".json")
    },
  },
  created(){
    const customAction={
      saveAlt:{method:"POST" ,url:'users.json'}
    };
  this.resource=this.$resource("users.json",{},customAction);
  }
};
</script>

<style></style>
