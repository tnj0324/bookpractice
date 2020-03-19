<template>
    <section class="container podtd-page">
        <el-card>
            <div slot="header" class="clearfix">
                <span>新着情報</span>
            </div>
            <el-table
                :data="showPosts" 
                style="width: 100%"
                class="table">
              <el-table-colum
               prop="title"
               label="タイトル">
              </el-table-colum> 
              <el-table-colum
               prop="user.id"
               label="投稿者"
               width="180">
              </el-table-colum>
              <el-table-colum
               prop="created_at"
               label="投稿日時"
               width="240">
              </el-table-colum>
            </el-table>
        </el-card>
    </section>            
</template>

<script lang="js">
export default {
    compted:{
        showPosts(){
            return[
                {
                    id:'001',
                    title: 'How to develop ...',
                    body: '色々書いてある',
                    created_at: '2020/02/04 20:00:00',
                    user:{
                        id:tnj0324
                    } 
                },
                {
                   id:'002',
                    title: 'How to develop ...(2)',
                    body: '色々書いてある(2)',
                    created_at: '2020/02/04 21:00:00',
                    user:{
                        id:tnj0324
                    }  
                },
            ]
        }
    }
}
</script>

<style>
.posts-page .el-table__row{
    cursor:pointer;
}
</style>