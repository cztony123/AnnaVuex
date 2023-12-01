<template>
    <div>
        用户名：<input type="text" v-model="username"><br>
        密码：<input type="text" v-model="password"><br>
        <button type="button" @click="login()">登录</button>
    </div>
    
</template>

<script>
export default {
    data () {
        return {
            username:'',
            password:""
        }
    },
    methods: {
        login(){
            if(this.username.match(/^\s*$/)){
                //清除空格
                alert('请输入用户名')
                return;
            }
            if(this.password.match(/^\s*$/)){
                alert('请输入密码')
                return;
            }
            this.$request(process.env.VUE_APP_API+"/home/user/pwdlogin?token=1ec949a15fb709370f","post",{cellphone:this.username,password:this.password}).then(res=>{
                    console.log(res);
                    
                });
            }
        }
    }
</script>