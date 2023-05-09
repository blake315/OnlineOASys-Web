import request from '@/utils/request'

const api_name = '/admin/system/sysRole'
export default {
    getPageList(current, limit, searchObj) {
        return request({
            url: `${api_name}/${current}/${limit}`,
            method: 'get',
            params: searchObj
          })
    },
    /**
     * 角色删除
     * @param {*} id 
     * @returns 
     */
    removeById(id) {
        return request({
        url: `${api_name}/remove/${id}`,
        method: 'delete'
        })
    },

    /**
     * 角色添加
     * @param {*} role 
     * @returns 
     */
    save(role) {
        return request({
        url: `${api_name}/save`,
        method: 'post',
        data: role
        })
    },

    // 回显要修改的id信息
    getById(id) {
        return request({
        url: `${api_name}/get/${id}`,
        method: 'get'
        })
    },
    
    // 修改
    updateById(role) {
        return request({
        url: `${api_name}/update`,
        method: 'put',
        data: role
        })
    },

    // 批量删除
    batchRemove(idList) {
        return request({
        url: `${api_name}/batchRemove`,
        method: `delete`,
        data: idList
        })
    },

    getRoles(adminId) {
        return request({
            url: `${api_name}/toAssign/${adminId}`,
            method: 'get'
        })
    },

    assignRoles(assginRoleVo){
        return request({
            url: `${api_name}/doAssign`,
            method: 'post',
            data: assginRoleVo
        })
    },

    findAll() {
        return request({
            url: `${api_name}/findAll`,
            method: `get`
        })
    }
    
}