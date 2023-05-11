import request from '@/utils/request'

const api_name = '/admin/system/sysMenu'

export default {


    findNodes(){
        return request({
            url: `${api_name}/findNodes`,
            method: 'get',
        })
    },

    save(menu){
        return request({
            url: `${api_name}/save`,
            method: 'post',
            data: menu
        })
    },

    updateById(menu){
        return request({
            url: `${api_name}/update`,
            method: 'put',
            data: menu
        })
    },

    removeById(id){
        return request({
            url: `${api_name}/remove/${id}`,
            method: 'delete',
        })
    },

    toAssign(roleId){
        return request({
            url: `${api_name}/toAssign/${roleId}`,
            method: 'get'
        })
    },

    doAssign(assignMenuVo){
        return request({
            url: `${api_name}/doAssign`,
            method: 'post',
            data: assignMenuVo
        })
    }
}
