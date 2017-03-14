<template>
    <div>
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="链接">
                <el-input class="url" v-model="form.url"></el-input>
            </el-form-item>

            <el-form-item label="名称">
                <el-input class="name" v-model="form.name"></el-input>
            </el-form-item>

            <el-form-item label="分组">
                <el-autocomplete
                  class="group"
                  v-model="form.group"
                  :fetch-suggestions="querySearch"
                  :trigger-on-focus="false"
                  @select="handleSelect"
                ></el-autocomplete>
            </el-form-item>

            <el-form-item label="请求类型">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="GET"></el-checkbox>
                    <el-checkbox label="POST"></el-checkbox>
                    <el-checkbox label="DELETE"></el-checkbox>
                    <el-checkbox label="PUT"></el-checkbox>

                    <el-tooltip content="可以多选" placement="right">
                        <i class="el-icon-warning"></i>
                    </el-tooltip>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item label="返回类型">
                <el-select v-model="form.dataType" placeholder="请选择">
                    <el-option label="json" value="json"></el-option>
                    <el-option label="jsonp" value="jsonp"></el-option>
                    <el-option label="text" value="text"></el-option>
                </el-select>

                <el-tooltip content="设置接口的Content-Type" placement="right">
                    <i class="el-icon-warning"></i>
                </el-tooltip>
            </el-form-item>

            <el-form-item label="返回值">
                <div id="javascript-editor" class="content" v-html="form.content"></div>
            </el-form-item>

            <el-form-item label="文档">
                <div id="javascript-editor2" class="content" v-html="form.docs"></div>
            </el-form-item>

            <el-form-item>
                <el-button type="primary">创建</el-button>
                <el-button>预览</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
var ace = require('brace');
require('brace/mode/javascript');
require('brace/mode/json');
require('brace/theme/github');


export default {
    data() {
        console.log(this.$route)
        return {
            form: {
                url: '',
                type: [],
                group: '',
                name: '',
                content: '测试',
                docs: `[
    {
        "name": "返回值显示名称",
        "get": {
            "test": "这里是get的参数配置"
        },
        "post": {
            "test": "这里是post的参数配置"
        },
        "params": {
            "test": "这里的参数get, post都可以取到, 但优化使用get,post的配置"
        }
    },

    {
        "name": "登录成功",
        "post": {
            "username": "test",
            "password": "test"
        }
    },

    {
        "name": "用户名或者密码错误",
        "post": {
            "username": "1",
            "password": "1"
        }
    },

    {
        "name": "用户名或者密码为空"
    }
]`,
                dataType: 'json'
            }
        };
    },

    methods: {
        querySearch() {

        },

        handleSelect() {

        }
    },

    mounted() {
        var editor = ace.edit('javascript-editor');
        editor.getSession().setMode('ace/mode/javascript');
        editor.setTheme('ace/theme/github');

        var editor2 = ace.edit('javascript-editor2');
        editor2.getSession().setMode('ace/mode/json');
        editor2.setTheme('ace/theme/github');
    },

    components: {
    },

    watch: {
        'form.content'(a, b) {
            console.log(a, b);
        }
    }
};
</script>

<style scoped lang="less">
.name,
.group,
.url {
    width: 300px;
}
.content {
    width: 100%;
    height: 500px;
}
.el-icon-warning {
    color: #20a0ff;
    display: inline-block;
    margin-left: 10px;
}
</style>