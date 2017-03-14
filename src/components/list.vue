<template>
    <div>
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="分组">
                <el-select v-model="form.group" class="group">
                    <el-option label="全部" value="all"></el-option>
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二区域二区域二区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="请求类型">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="GET"></el-checkbox>
                    <el-checkbox label="POST"></el-checkbox>
                    <el-checkbox label="DELETE"></el-checkbox>
                    <el-checkbox label="PUT"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>

            <el-form-item label="链接">
                <el-input v-model="form.url" class="url"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary">搜索</el-button>
                <el-button @click="$router.push({name: 'ApiAdd'})">创建</el-button>
            </el-form-item>
        </el-form>

        <div class="list">
            <el-table
                :data="tableData"
                stripe
                border
                style="width: 100%">
                <el-table-column
                    prop="url"
                    label="链接"
                    width="180">
                    <template scope="scope">
                        <a :href="scope.row.url" target="_blank">{{ scope.row.url }}</a>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="名称"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="type"
                    label="类型">
                </el-table-column>
                <el-table-column
                    prop="group"
                    label="分组">
                </el-table-column>
                <el-table-column
                    label="操作">
                    <template scope="scope">
                        <el-button size="small" type="info" @click="$router.push({
                            name: 'ApiEdit', 
                            params: {
                                id: scope.row.url
                            }
                        })">编辑</el-button>
                        <el-button size="small" type="info">文档</el-button>
                        <el-button size="small" type="danger">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            $router: this.$router,
            form: {
                url: '',
                group: 'all',
                type: ['DELETE', 'POST', 'PUT', 'GET']
            },
            tableData: [
                {
                    url: '/api/user/login',
                    name: '登录',
                    group: '用户接口',
                    type: 'GET',
                },
                {
                    url: '/api/user/reg',
                    name: '注册',
                    group: '用户接口',
                    type: 'POST',
                }
            ]
        };
    },

    watch: {
    },

    methods: {
    }
};
</script>

<style scoped lang="less">
.group,
.url {
    width: 300px;
}
.list {
    margin-top: 50px;
}
</style>