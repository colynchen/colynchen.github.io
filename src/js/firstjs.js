var app1 = new Vue({
    el: '#app-1',
    data: {
        message1: 'Hello Vue!',
        message2: '页面加载于' + new Date().toLocaleString(),
        message3: '点下面按钮  点他点他',
        message4: '填写下面输入框试试看哦',
        seen:true ,
        todos: [
            {text: "学习 js"},
            {text: "学习 Vue"},
            {text: "学习 Over"}
        ]
    },
    methods: {
        clickEgg: function(){
            this.message3 = this.message3.split('').reverse().join('')
        }
    }
})


