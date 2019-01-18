<template>
    <!-- 布局  gutter：每列的间隔 -->
    <el-row :gutter="20">

        <el-col :sm="6" :offset="4" :xs="{span: 24, offset: 0}">
            <div class="grid-content bg-purple">
                <el-carousel :interval="4000" height="300px">
                    <el-carousel-item v-for="item in 5" :key="item">
                        <img src="../img/test.jpg" alt="实例图片" width="455">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-col>

        <el-col :sm="10" :xs="{span: 24}">
            <div class="grid-content bg-purple">
                <div>
                    <el-table
                            :data="tableData"
                            style="width: 100%"
                            :default-sort = "{prop: 'date', order: 'descending'}"
                            highlight-current-row="true"
                    >
                        <el-table-column
                                prop="date"
                                label="日期"
                                sortable
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="姓名"
                                sortable
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="地址"
                                :formatter="formatter">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </el-col>

    </el-row>
</template>
<script>
    export default {
        created() {

        },
        data() {
            return {tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            formatter(row, column) {
                return row.address;
            }
        }
    }
</script>
<style scoped>

    /* 每一列，圆角 */
    .el-col {
        margin-top: 20px;
        border-radius: 10px;
    }

    /* 表格圆角 */
    .grid-content, .el-carousel__container, .el-carousel__item, .el-table {
        border-radius: 10px;
        min-height: 36px;
    }

</style>